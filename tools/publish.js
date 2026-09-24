const { execFileSync, spawnSync } = require('node:child_process')

const message = process.argv.slice(2).join(' ') || '更新博客'
const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'

function run(program, args) {
  const result = spawnSync(program, args, {
    stdio: 'inherit',
    shell: process.platform === 'win32' && program.endsWith('.cmd')
  })
  if (result.error) throw result.error
  if (result.status !== 0) process.exit(result.status || 1)
}

console.log('正在构建博客...')
run(command, ['run', 'build'])

const changes = execFileSync('git', ['status', '--short'], { encoding: 'utf8' }).trim()
if (!changes) {
  console.log('没有检测到文件变化，无需发布。')
  process.exit(0)
}

console.log('正在保存并发布修改...')
run('git', ['add', '-A'])
run('git', ['commit', '-m', message])
run('git', ['push', 'origin', 'main'])
console.log('发布完成。GitHub Actions 将自动重新构建网站。')

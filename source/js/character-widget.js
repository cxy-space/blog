(function () {
  'use strict'

  var image = window.BLOG_CHARACTER_IMAGE || '/img/red-witch.svg'
  var messages = ['欢迎来坐坐。', '今天的樱花也很好看。', '慢慢读，别着急。', '写下值得记住的事。']
  var index = 0
  var widget = document.createElement('aside')
  widget.id = 'character-widget'

  var portrait = document.createElement('button')
  portrait.className = 'character-widget__portrait'
  portrait.type = 'button'
  portrait.title = '与红衣少女互动'
  portrait.setAttribute('aria-label', '与红衣少女互动')
  var picture = document.createElement('img')
  picture.src = image
  picture.alt = ''
  portrait.appendChild(picture)

  var message = document.createElement('div')
  message.className = 'character-widget__message'
  message.textContent = messages[index]

  var toggle = document.createElement('button')
  toggle.className = 'character-widget__toggle'
  toggle.type = 'button'
  toggle.textContent = '×'
  toggle.title = '收起互动角色'
  toggle.setAttribute('aria-label', '收起互动角色')

  portrait.addEventListener('click', function () {
    index = (index + 1) % messages.length
    message.textContent = messages[index]
    message.hidden = false
  })
  toggle.addEventListener('click', function () {
    var collapsed = widget.classList.toggle('is-collapsed')
    message.hidden = collapsed
    toggle.textContent = collapsed ? '+' : '×'
    toggle.title = collapsed ? '展开互动角色' : '收起互动角色'
    toggle.setAttribute('aria-label', toggle.title)
  })

  widget.appendChild(portrait)
  widget.appendChild(message)
  widget.appendChild(toggle)
  document.body.appendChild(widget)
})()

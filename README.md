# 陈同学的反思台

这是一个使用 Hexo + Butterfly 构建的个人博客。日常写作不需要手动操作 Git，使用项目根目录下的几个命令文件即可。

## 日常写作

### 写正式文章

双击或在终端运行：

```text
write.cmd "文章标题"
```

文章会创建在 `source/_posts/`。用任意 Markdown 编辑器打开它，填写标题、摘要、分类和标签，然后写正文。

### 写草稿

草稿不会出现在网站上：

```text
npm.cmd run draft -- "草稿标题"
```

完成后可以使用 Hexo 发布草稿：

```text
npm.cmd run publish-draft -- "草稿标题"
```

### 本地预览

```text
preview.cmd
```

打开 `http://localhost:4000` 查看效果。修改文章后刷新页面即可。

### 发布网站

确认本地预览无误后：

```text
publish.cmd "发布：文章标题"
```

脚本会自动完成构建、保存修改和推送。推送成功后，GitHub Actions 会自动部署到 GitHub Pages，通常需要几十秒到几分钟生效。第一次使用前，需要在本机完成一次 GitHub 登录/凭据配置；之后无需手动输入 Git 命令。

## 需要手动补充的个性化内容

1. 将 `source/about/index.md` 改成真实的个人介绍和联系方式。
2. 将 `_config.butterfly.yml` 中的头像替换为自己的图片，推荐放在 `source/img/avatar.png`，然后把 `avatar.img` 改为 `/img/avatar.png`。
3. 如果需要评论，在 Butterfly 配置中选择 Giscus、Waline 或 Utterances，并填写对应服务的参数。当前默认关闭评论，避免引入额外账号和隐私配置。
4. 如果需要统计，当前已启用不蒜子访问量统计；它不需要申请密钥，但会请求第三方服务。

## 重要约定

- `source/` 和配置文件是需要保存的内容。
- `public/` 是构建产物，不需要手动编辑，也不会提交。
- `tools/` 存放本地辅助脚本，不需要手动修改。
- 不要把密码、Token 或其他密钥写入配置文件。

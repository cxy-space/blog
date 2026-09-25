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

### VS Code 写作规范

项目已经提供了 VS Code 推荐扩展和 Markdown 代码片段。首次打开项目时，建议安装推荐扩展。

- 新建文章：运行 `write.cmd "文章标题"`
- 插入文章头：在 Markdown 文件中输入 `hexo-post`，按 `Tab`
- 插入代码块：输入 `hexo-code`，按 `Tab`
- 插入图片：输入 `hexo-image`，按 `Tab`

文章顶部的 YAML 区域必须保留在文件最开头，并且由两行 `---` 包围。分类和标签使用数组格式，例如 `categories: [随笔]`、`tags: [Hexo, 写作]`。正文标题从 `##` 开始，不要重复写一级标题。

### 樱花背景与互动角色

博客的樱花视觉效果全部放在项目目录中，不需要修改 Butterfly 主题依赖：

- `source/img/sakura-background.jpg`：实景樱花背景图
- `source/js/sakura.js`：飘落花瓣动画，可调整 `count` 改变花瓣数量
- `source/live2d/`：本地 Live2D 运行时、互动配置与 `ariu` 模型资源
- `source/live2d/live2d.json`：工具栏、拖动与角色加载配置
- `source/css/custom.styl`：角色尺寸、位置、背景遮罩和毛玻璃样式

当前互动角色是参考站使用的 Allium／`ariu` 免费 Live2D 模型，原发布者标注为 Yuri幽里_official；网页运行组件来自 `LuoTian001/live2d-widget-AIChat`，项目代码按其 MIT License 保留在 `source/live2d/LICENSE`。本站只启用了本地模型、表情、一言、截图、说明和关闭/召回功能，没有连接参考站的 AI 聊天后端。模型仍不是上杉绘梨衣；以后取得有权使用的绘梨衣模型包后，可替换 `source/live2d/model/` 中的模型并更新 `config/model_list.json`。

背景图片来自 Unsplash 图片服务。若以后更换图片，请优先将文件下载到 `source/img/` 后使用本地路径，避免外部链接失效。

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

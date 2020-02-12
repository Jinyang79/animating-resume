let resume = `# 李金洋
17371438861 | jinyang79@foxmail.com | 武汉
Github: https://github.com/Jinyang79
Blog: https://goldsheep.club
20届本科 | 前端开发(实习)

## 专业技能
- 在项目中使用 HTML + CSS 进行页面布局，可以制作符合 W3C 标准规范的页面，能利用自己的开发经验独立建站。
- 熟悉 HTML5 新特性，实现传统布局、 Flex 布局、rem 移动端适配，在项目中使用过 CSS 预处理器 Less 或者 Scss。
- 掌握原生 JavaScript，理解原型继承、原型链、事件循环、闭包等，在项目中熟悉使用 jQuery 来简化原生 JS 操作实现项目。
- 熟悉 ES6 基本语法、解构赋值、常用的数据结构、promise的含义和用法、async 函数、class 类以及模块化开发，在项目中熟练运用以及良好的编程风格。
- 掌握前后台的数据交互，熟悉原生 ajax，在项目中使用 $ajax 和 axios 请求数据，并对请求数据进行处理，了解 RESTful 风格的API。
- 在项目中熟练使用 vue 语法、生命周期钩子、以及常用 api，掌握组件及组件间数据传递的使用、响应式原理、路由等。
- 拥有 vue 2.x 全家桶的项目开发经验，通过 vue-cli 快速搭建开发环境，使用 vue-router 实现路由懒加载，导航守卫，通过 vuex 进行全局状态管理，使用 devtools 工具进行调试，通过脚手架修改webpack的配置实现打包，并且按照官方代码风格开发。
- 熟练使用脚手架或者 npm 安装开发依赖和插件，使用过 element-ui 、mint-ui、vant-ui 等组件库快速开发，了解一些 nuxt.js 实现服务器渲染，实现更好的 seo 优化和性能优化。
- 熟练使用 git 工具（安装，使用，提交，版本回溯）npm 常用命令，遇到开发中坑会写 blog 中。

## 项目经验
### 电商管理后台系统
[效果预览](http://jinyang7.web3v.vip) | [查看源码](https://github.com/Jinyang79/vue-shop-cms)
- 关键词：\`vue\`、\`vue-router\`、\`vue-cli\`、\`axios\`、\`element-ui\`、\`es6\`、\`echarts\`
- 描述：该项目是基于 vue 和 element-ui，实现的PC后台管理系统，通过 vue-cli 快速搭建开发环境，vue-router实现路由导航守卫、懒加载，axios 请求数据，使用 es6 语法实现，包含登录、用户、权限、商品、订单管理、数据统计等业务功能。

### 仿卖座电影
[效果预览](http://jinyang7.gitee.io/vue-m.maizuo/dist) | [查看源码](https://github.com/Jinyang79/vue-m.maizuo)
- 关键词：\`vue\`、\`vuex\`、\`vue-router\`、\`vue-cli\`、\`axios\`、\`mint-ui\`、\`es6\`
- 描述：该项目是基于 vue 全家桶和 mint-ui 实现的仿卖座电影移动端web项目，建议手机预览，采用 vuex 集中管理全局状态，模块化开发，通过 keep-alive 保留组件状态，避免重新渲染，重复请求数据，实现电影信息，详情页面，电影院，切换城市等业务功能。

### 待办事项清单
[效果预览](http://jinyang7.gitee.io/jquery-todolist) | [查看源码](https://github.com/Jinyang79/jquery-todolist)
- 关键词：\`JavaScript\`、\`jQuery\`、\`localStorage\`、\`适配移动端\`
- 描述：仿 todolist 待办事项清单，原项目是基于原生 JS 实现，该项目是通过 jQuery 实现，通过 localStorage 进行本地存储，实现事项提交，删除，更改状态，通过媒体查询实现适配移动端。

### 简约音乐
[效果预览](https://jinyang7.gitee.io/vue-music) | [查看源码](https://github.com/Jinyang79/vue-music)
- 关键词：\`vue\`、\`axios\`、\`es6\`
- 描述：该项目是使用 vue 开发的网页播放器，通过 axios 请求网易云音乐的 api 接口，实现歌曲搜索，播放时封面旋转动画，歌曲热评，mv播放功能。

### 动画简历
[效果预览](https://jinyang7.gitee.io/animating-resume) | [查看源码](https://github.com/Jinyang79/animating-resume)
- 关键词：\`JavaScript\`、\`css3\`、\`es6\`、\`变速\`、\`过渡动画\`
- 描述：该项目实现将一个 Markdown 简历转成可下载的 PDF 简历。使用原生 JS 开发， Promise 处理异步链式操作（各个步骤的跳转衔接），利用 CSS3 实现过渡、动画、阴影和弹性布局等。

### 个人博客
[效果预览](https://goldsheep.club) | [查看源码](https://github.com/Jinyang79/Jinyang79.github.io)
- 关键词：\`hexo\`、\`icarus\`、\`blog\`
- 描述：该项目是本人的技术博客，通过 hexo 框架和 Icarus 主题搭建，对学习的技术进行总结，把开发过程中遇到的坑或盲点进行记录，记录学习日记。

## 教育经历
### 武昌理工学院
2016/9 - 2020/6
- 专业 学历：软件工程 本科
`

let code_ready = `/*
 * 嗨，我是李金洋。
 * 我想用代码给你展示一下我的个人简历～
 * 如果嫌速度慢，可以点击页面右上角的按钮加速
 * 好啦，不说废话了，我要开始啦...
 */

/* 添加一个过渡，使变化看起来更柔和 */
* {
  transition: all 0.3s;
}
/* 加个背景色 */
body {
  background: #455A64;
}
/* 给代码加个边框 */
#code_body {
  width: 100%;
  border: 1px solid #CFD8DC;
  background: #CFD8DC;
  padding: 16px;
  overflow: auto;
}

/* 让代码高亮起来 */
.token.comment, .token.punctuation {
  color: #757575;
}
.token.selector {
  color: #007400;
}
.token.property {
  color: #cf1f1f;
}

/* 
 * 给它们来个特效吧！
 * 让它们在被编辑的时候产生“呼吸”的效果
 */
.breathe {
  animation: breathe 3s ease 0s infinite;
}


/* 现在开始写简历啦！ */

/* 让代码框腾出一些的位置给我的简历框 */
#options {
  width: 32%;
}
/* 准备一个白板 */
#paper {
  flex: 1;
  background: #fdfdfd;
  margin: 16px;
  overflow: auto;
  white-space: pre-wrap;
}

/* 接下来，请看右边 */

`

let code_marked = `
/* 
 * 接下来我要使用一个优秀的库 marked.js
 * 来使我的简历变成一篇 Markdown
 * (https://github.com/markedjs/marked)
 */
`

let code_beautify_resume = `
/* 调整我的简历，让它变得再好看一点 */
#paper {
  white-space: unset;
  padding: 0 32px;
  font-size: 14px;
}
#paper a {
  color: #455A64;
}
#paper ul {
  padding-left: 20px;
}
/* 让每个模块上下间隔明显一点 */
#paper > div {
  margin: 28px 0;
}

/* 接下来是精细的调整 */

/* 首先，调整我的“基础信息”板块 */
#paper h1 {
  font-size: 22px;
  margin-bottom: 10px;
}
#information {
  text-align: center;
}
#information p {
  line-height: 24px;
  white-space: pre-wrap;
}

/* 然后是详细介绍模块 */
#paper h2 {
  font-size: 16px;
  border-bottom: 1px solid #455A64;
  padding-bottom: 6px;
  margin-bottom: 6px;
}
#paper h3 {
  display: inline-block;
  font-size: 14px;
  margin: 6px 0;
}
#skills > ul ul {
  margin: 4px 0;
}
#skills li, #works li, #education li {
  margin-bottom: 4px;
}
#jobs > .single {
  margin-bottom: 6px;
}

/* 调整“实习经历”和“教育经历”中时间的位置 */
#jobs > .single, #education > .single, #works > .single {
  position: relative;
}
#jobs p, #education p, #works p {
  position: absolute;
  right: 0px;
  top: 6px;
}


/* 接下来添加个头像吧！ */
`

let code_photo = `
/* 把我的头像放在个人信息里 */
#information {
  position: relative;
}
#information .avatar {
  width: 90px;
  position: absolute;
  right: 0px;
  top: -10px;
}
/* 让多余的照片隐藏吧~ */
#information {
  overflow: hidden;
}

/* 
 * 好啦，我的头像出来啦~
 * 期待这张面孔出现在您的面试中
 * 
 *   —— 李金洋 2020/01 *^_^*
 */
`

var resumeInputTimeoutID, codeInputTimeoutID
writeCode(code_ready, '').then(() => {
  createResume().then(() => {
    $('#skip_inputResume').remove()
    adjustResume().then(() => {
      addAndAdjustAvatar().then(showDownloadButton)
    }, () => {
      showFinalResult()
    })
  })
})

var speedCode = 1, duration = 80
$('#speed_btn').click(() => {
  speedCode += 1
  if (speedCode > 3) {
    speedCode = 1
  }
  switch (speedCode) {
    case 1:
      speed_status.innerText = '🚲'
      description.innerText = '开小车车快点吧~'
      duration = 70
      break
    case 2:
      speed_status.innerText = '🚗'
      description.innerText = '太废话了，我要最快！'
      duration = 30
      break
    case 3:
      speed_status.innerText = '🚀'
      description.innerText = '我眼花了！慢一点~'
      duration = 0
      break
    default:
      return 0
  }
})

function writeCode (code, origin) {
  let n = 1
  return new Promise(resolve => {
    codeInputTimeoutID = setTimeout(write, duration)
    function write () {
      code_body.innerHTML = Prism.highlight(origin + code.substr(0, n), Prism.languages.css, 'css');
      code_style.innerHTML = origin + code.substr(0, n)
      code_body.scrollTop = code_body.scrollHeight
      n++
      if (n === code.length) {
        window.clearTimeout(codeInputTimeoutID)
        resolve.call(undefined)
      } else {
        window.clearTimeout(codeInputTimeoutID)
        codeInputTimeoutID = setTimeout(write, duration)
      }
    }
  })
}
function writeResume () {
  let n = 1
  return new Promise(resolve => {
    resumeInputTimeoutID = setTimeout(write, duration)
    function write () {
      paper.innerHTML = resume.substr(0, n)
      paper.scrollTop = paper.scrollHeight
      n++
      if (n === resume.length) {
        window.clearTimeout(resumeInputTimeoutID)
        resolve.call(undefined)
      } else {
        window.clearTimeout(resumeInputTimeoutID)
        resumeInputTimeoutID = setTimeout(write, duration)
      }
    }
  })
}

function createResume () {
  return new Promise(resolve => {
    $('#paper').addClass('breathe')
    $('#code_body').removeClass('breathe')
    writeResume().then(resolve)
    setTimeout(() => {
      $('#skip_inputResume').show()
      $('#skip_inputResume').click(() => {
        skipResumeInput().then(resolve)
      })
    }, 1000)
  })
}
function adjustResume () {
  return new Promise((resolve, reject) => {
    $('#code_body').addClass('breathe')
    $('#paper').removeClass('breathe')
    writeCode(code_marked, code_ready).then(() => {
      structureResume()
      $('#paper')[0].scrollTop = 0
      writeCode(code_beautify_resume, code_ready + code_marked).then(resolve)
      setTimeout(() => {
        $('#skip_all').show()
        $('#skip_all').click(() => {
          skipAll().then(reject)
        })
      }, 1000)
    })
  })
}
function structureResume () {
  $('#paper')[0].innerHTML = marked(resume)
  $('#paper').prepend('<div id="information"></div>', '<div id="skills"></div>', '<div id="works"></div>', '<div id="jobs"></div>', '<div id="education"></div>')

  // 「基本信息」
  $('#information').append($('h1'), $('p').first())

  // 「专业技能」
  const skills_header = $('h2:contains("技能")')
  $('#skills').append(skills_header, skills_header.next('ul')[0])

  // 「教育经历」
  $('#education').append($('h2:contains("教育")'), $('<div class="single"></div>').append($('h3:contains("学院")'), $('p').last(), $('ul').last()))

  // 「工作经历」
  $('#jobs').append($('h2:contains("工作")'))
  $('h3:contains("公司")').each((index, element) => {
    $('<div class="single"></div>')
      .append($(element), $(element).next('p')[0], $(element).next('p').next('ul')[0])
      .appendTo('#jobs')
  })

  // 「项目经验」模块
  $('#works').append($('h2:contains("项目")'))
  const project_title_array = $('#paper > h3')    // 剩余的h3就是项目名
  project_title_array.each((index, element) => {
    $('<div class="single"></div>')
      .append($(element), $(element).next('p')[0], $(element).next('p').next('ul')[0])
      .appendTo('#works')
  })

  // 「小程序」
  // $('a[href="./images/qrcode.png"]').addClass('qrcode-trigger').append($('img.qrcode'))
}
function addAndAdjustAvatar () {
  return new Promise(resolve => {
    $('#information').append($('img.avatar'))
    writeCode(code_photo, code_ready + code_marked + code_beautify_resume).then(() => {
      $('#paper').addClass('breathe')
      $('#code_body').removeClass('breathe')
      $('.skipper').remove()
      setTimeout(resolve, 1000)
    })
  })
}
function showDownloadButton () {
  $('#options').css({ 'width': '23%' })
  $('a.downloadResume').addClass('show')
  $('#options').append($('a.downloadResume'))
}

function skipResumeInput () {
  return new Promise(resolve => {
    setTimeout(() => {
      window.clearTimeout(resumeInputTimeoutID)
      paper.innerHTML = resume
      paper.scrollTop = paper.scrollHeight
      resolve()
      $('#skip_inputResume').remove()
    }, 0)
  })
}
function skipAll () {
  return new Promise(resolve => {
    setTimeout(() => {
      window.clearTimeout(codeInputTimeoutID)
      resolve()
      $('.skipper').remove()
    }, 0)
  })
}
function showFinalResult () {
  $('#paper').addClass('breathe')
  $('#code_body').removeClass('breathe')
  $('#information').append($('img.avatar'))
  code_body.innerHTML = Prism.highlight(code_ready + code_marked + code_beautify_resume + code_photo, Prism.languages.css, 'css');
  code_style.innerHTML = code_ready + code_marked + code_beautify_resume + code_photo
  code_body.scrollTop = code_body.scrollHeight
  window.clearTimeout(codeInputTimeoutID)
  $('#options').css({ 'width': '23%' })
  $('a.downloadResume').addClass('show')
  $('#options').append($('a.downloadResume'))
}
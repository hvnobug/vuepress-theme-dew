---
title: 生成简历页
commentid: theme-document
---

::: tip
* 简历基于 `Gulp` + `Scss` + `Jade`。  
* 访问地址：[Hvnobug 的简历](https://hvnobug.com/resume/)
* 基于 `Json` 配置,生成 `Html` 格式简历和 `Pdf` 格式简历
:::

* [原文地址](https://github.com/Lxxyx/LxxyxResume)
* [查看效果](https://resume.lxxyx.cn)

## 环境搭建

1. 使用 `npm install` 安装
2. 全局安装 gulp `npm install -g gulp`
3. 安装 gulp 依赖:
```bash
npm install gulp-jade -D
npm install gulp-sass -D
npm install gulp@3.9.1 -D
npm install gulp-connect -D
npm install rimraf-promise -D
npm install gulp-autoprefixer@3.1.1 -D
```

ps:  由于安装puppeteer的缘故，此步骤可能涉及代理设置访问

```
# 代理设置
git config --global http.proxy 'socks5://127.0.0.1:1080'
git config --global https.proxy 'socks5://127.0.0.1:1080'
# 取消代理
git config --global --unset https.proxy 'socks5://127.0.0.1:1080'
git config --global --unset http.proxy 'socks5://127.0.0.1:1080'
```

>  推荐使用淘宝 chromium 源安装

简单方便还快速

```
npm config set puppeteer_download_host=https://npm.taobao.org/mirrors
npm install puppeteer -D
```

## 环境配置

在项目根目录创建 gulpfile.js

```javascript
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const jade = require('gulp-jade');
const rimrafPromise = require('rimraf-promise');
const fs = require('fs');
const connect = require('gulp-connect');
const puppeteer = require('puppeteer');
const resumeDir = 'node_modules/vuepress-theme-dew/resume';
const distDir = 'dist';
const generateDir = `${distDir}/pages/resume`;
gulp.task('resume-sass', () => {
    gulp
        .src(`${resumeDir}/scss/resume.scss`)
        .pipe(sass().on('error', sass.logError))
        .pipe(
            autoprefixer({
                browsers: ['last 4 versions'],
                cascade: false
            })
        )
        .pipe(gulp.dest(`${generateDir}/css/`))
        .pipe(connect.reload())
});

gulp.task('icon-sass', () => {
    gulp
        .src(`${resumeDir}/scss/iconfont.scss`)
        .pipe(sass().on('error', sass.logError))
        .pipe(
            autoprefixer({
                browsers: ['last 4 versions'],
                cascade: false
            })
        )
        .pipe(gulp.dest(`${generateDir}/iconfont/`))
        .pipe(connect.reload())
});

gulp.task('sass:watch', () => {
    gulp.watch(`${resumeDir}/scss/resume.scss`, ['resume-sass']);
    gulp.watch(`${resumeDir}/scss/iconfont.scss`, ['icon-sass']);
    gulp.watch(`${resumeDir}/scss/components/*.scss`, ['resume-sass']);
});

gulp.task('json2jade', () => {
    const info = JSON.parse(fs.readFileSync('./resume.json', 'utf-8'));
    const locals = highlight(info);
    gulp
        .src('./resume/jade/index.jade')
        .pipe(
            jade({
                locals
            })
        )
        .pipe(gulp.dest(`${generateDir}/`))
        .pipe(connect.reload())
});

gulp.task('json2jade:watch', () => {
    gulp.watch('./resume.json', ['json2jade'])
});

function src2dist(dir) {
    return gulp.src(`${resumeDir}/${dir}/*.*`).pipe(gulp.dest(`${generateDir}/${dir}/`))
}

function highlight(locals) {
    var locals = JSON.stringify(locals);
    const re = /`(.+?)`/g;
    locals = locals.replace(re, '<strong>$1</strong>');
    return JSON.parse(locals);
}

gulp.task('copy', () => {
    src2dist('iconfont');
    src2dist('img');
    src2dist('pdf');
    // gulp.src('./CNAME').pipe(gulp.dest('./dist'))
});

gulp.task('clean', () => {
    rimrafPromise(distDir + '/');
});


let port = 9000;

// 避免打印时，同时运行开发服务报错
gulp.task('set-pdf-port', () => {
    port = 9001
});

gulp.task('webserver', () => {
    connect.server({
        root: distDir,
        livereload: true,
        port
    })
});

gulp.task('dev', ['default', 'json2jade:watch', 'sass:watch', 'webserver']);

gulp.task('default', ['icon-sass', 'resume-sass', 'json2jade', 'copy']);


gulp.task('pdf', ['set-pdf-port', 'default', 'webserver'], async () => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();

    await page.setViewport({
        width: 1440,
        height: 900
    });

    await page.goto('http://localhost:9001');
    await delay(100);

    await page.pdf({
        path: `${resumeDir}/pdf/resume.pdf`,
        format: 'A4',
        printBackground: true,
        displayHeaderFooter: false,
        margin: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        }
    });

    console.log(`PDF生成在 ${resumeDir}/pdf 中了`);
    browser.close();

    connect.serverClose();
    process.exit(0)
});

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

```

::: tip
`gulpfile.js`用于生成简历 html 和  pdf,要求 gulp 版本不能超过 4.0.x
:::



## 生成 PDF 版简历

> 在 gulp.js 与 resume.json, 在 resume 目录中生成新的 resume.pdf


```bash
gulp pdf
```

在根目录创建一个 resume.json 文件,用于生成简历数据,实例:

```json
{
  "Author": "Lxxyx - Inspired by Joyee Cheung",
  "Guide": [
    "照着这里面的格式填写即可",
    "PDF 会自动生成，文件名可以在 gulp.js 里改",
    "PDF 的地址，将这个文件里pdf部分改为你的PDF文件名即可"
  ],
  "title": "Hvnobug - Java全栈",
  "aside": [
    {
      "href": "/",
      "content": "返回首页"
    },
    {
      "href": "https://www.zhihu.com/people/hvnobug",
      "content": "知乎"
    },
    {
      "href": "https://blog.hvnobug.com/",
      "content": "博客"
    },
    {
      "href": "https://github.com/hvnobug/",
      "content": "源代码"
    },
    {
      "href": "/pages/resume/pdf/resume.pdf",
      "content": "PDF 下载"
    }
  ],
  "header": {
    "title": {
      "name": "Hvnobug",
      "job": "Java全栈工程师"
    },
    "contacts": {
      "phone": "151****4737",
      "mail": "123456@qq.com",
      "wechat": "hvnobug",
      "wechatQrcode": "./img/wechat.jpg",
      "github": {
        "href": "https://github.com/hvnobug/",
        "name": "hvnobug"
      },
      "blog": {
        "href": "http://blog.hvnobug.com",
        "name": "Emil`s Blog"
      }
    }
  },
  "education": {
    "time": "2014-2018",
    "name": "南昌大学",
    "major": "人力资源管理（本科）",
    "honor": [
      "2016.09-2017.06 家园工作室 — `前端负责人`",
      "`2019.03 淘系前端团队 - 最佳新人`"
    ]
  },
  "language": {
    "cert": [
      {
        "name": "CET-4",
        "grade": 491,
        "fullmarks": 710
      }
    ],
    "skills": [
      "流畅阅读开发文档 & 无障碍观看开发者大会视频"
    ]
  },
  "experience": [
    {
      "title": {
        "place": "淘系前端团队",
        "time": "2019.07 - 至今"
      },
      "content": {
        "position": "高级前端工程师",
        "tasks": [
          "Node 架构"
        ]
      }
    },
    {
      "title": {
        "place": "淘宝前端团队",
        "time": "2018.07 - 2019.06"
      },
      "content": {
        "position": "前端工程师",
        "tasks": [
          "创新业务 & 淘宝行业"
        ]
      }
    },
    {
      "title": {
        "place": "家园工作室",
        "time": "2015.03 - 2017.06"
      },
      "content": {
        "position": "前端负责人",
        "tasks": [
          "页面开发 & `Android/iOS App` 开发",
          "制订前端技术栈 & 分享会 & 新人路线设定",
          "建立 Git 规范 & CI 体系 & 账号体系"
        ]
      }
    },
    {
      "title": {
        "place": "南大家园-iNCU",
        "time": "2017.01 - 2019.03",
        "links": [
          {
            "name": "下载链接",
            "href": "http://incu.ncuos.com/"
          }
        ]
      },
      "content": {
        "position": "客户端/前端/后台",
        "tasks": [
          "基于 `RN + TS + Redux + Saga/RxJS` 开发",
          "`性能优化 & 原生拓展功能开发 & 后端开发`",
          "`编写 100+ 单测`, 部分功能采取 TDD 方式开发",
          "注重代码可维护性与健壮性"
        ]
      }
    }
  ],
  "skills": {
    "flags": {
      "name": "Web前端",
      "skill": [
        {
          "name": "`HTML/CSS`",
          "description": [
            "能够编写语义化的 `HTML` ，熟悉 `CSS` 的使用",
            "不借助框架，能编写`响应式/移动端网页`"
          ]
        },
        {
          "name": "`ECMAScript（JavaScript）`",
          "description": [
            "`熟练使用 ES6/7/Next 开发项目`，代码编写遵守规范",
            "熟悉异步编程，`掌握常见的解决方案及原理`"
          ]
        },
        {
          "name": "前端工程化实践",
          "description": [
            "熟练使用 `TS + React/Vue/RN` ，完成各类需求",
            "前端工程化思考多，并有实际落地方案"
          ]
        }
      ]
    },
    "cloud": {
      "name": "Web后端",
      "skill": [
        {
          "name": "`Node.js`",
          "description": [
            "熟练使用 `TS + Koa2 + MongoDB` 完成各类应用",
            "使用 `Jest/Mocha` 编写单测并通过 CI 实现持续集成"
          ]
        },
        {
          "name": "其它知识",
          "description": [
            "日常使用 `Docker` 完成项目的构建与部署",
            "完成 `Nginx` 的配置，实现反向代理等功能"
          ]
        }
      ]
    },
    "gears": {
      "name": "其它",
      "skill": [
        {
          "name": "`计算机基础`",
          "description": [
            "`对计算机与编程有极大热情，自学能力较强`",
            "在校选课与 MOOC 自学计算机相关课程",
            "`坚持写原创技术博客，月浏览量 3K`"
          ]
        },
        {
          "name": "工具使用",
          "description": [
            "`两年 Linux 使用经验`",
            "熟练使用 Git & `GitFlow 并推广至团队`"
          ]
        }
      ]
    }
  }
}
```

::: block 注意:
* 请自行修改 wechatQrcode(微信二维码图片地址)
* 默认生成在 `dist/pages/resume` 目录下,可以自行修改
* 修改 dist 目录位置 `const distDir = '.vuepress/dist'`
* 修改 生成目录位置 `const generateDir = distDir + '/resume'`
ps: 结尾不要加 `/`
:::


也可使用 chrome 浏览器自带的打印机制作 PDF，同时也解决了生成简历打印没有字体图标的问题

## 启动

替换 resume.json 的内容，运行 gulp 即可，生成内容可在 dist 文件夹查看。如需本地部署：

```bash
npm install gulp-webserver --save-dev
gulp webserver
```

## 添加到 navbar

::: tip
resume 页面非 vuepress 渲染,这里我们不要使用路由,只需要设置 `route=false` 作外链处理
:::

```javascript
export default {
    themeConfig:{
        nav: [
               
            {
                text: '简历',
                link: '/pages/resume/',
                icon: 'resume',
                route: false
            },
        ]
    }
}
```
> 也可以注册一个路由

```vue
router.push({ path: '/pages/resume/' })
```

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const jade = require('gulp-jade');
const rimrafPromise = require('rimraf-promise');
const fs = require('fs');
const connect = require('gulp-connect');
const puppeteer = require('puppeteer');
const resumeDir = './resume' ;
const distDir = './dist';
const resumePath = '/pages/resume/' ;
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
        .pipe(gulp.dest(`${distDir}${resumePath}css/`))
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
        .pipe(gulp.dest(`${distDir}${resumePath}iconfont/`))
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
        .src(`${resumeDir}/jade/index.jade`)
        .pipe(
            jade({
                locals
            })
        )
        .pipe(gulp.dest(`${distDir}${resumePath}`))
        .pipe(connect.reload())
});

gulp.task('json2jade:watch', () => {
    gulp.watch('./resume.json', ['json2jade'])
});

function src2dist(dir) {
    return gulp.src(`${resumeDir}/${dir}/*.*`).pipe(gulp.dest(`${distDir}${resumePath}${dir}/`))
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
    port = 9001;
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
    const resumeUrl = `http://localhost:9001${resumePath}index.html`;
    await page.goto(resumeUrl);
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



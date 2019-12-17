# 开始
set -e

# 编译
# package.json 中需要有这一句："build": "vuepress build docs"
yarn run build

# 进入 dist 目录
cd dist

# 新建 CNAME 文件，并写入域名
 echo hvnobug.com > CNAME

# 初始化仓库
git init

# 添加
git add -A

# 提交
# shellcheck disable=SC2006
git commit -m "Site updated: `date '+%Y-%m-%d %H:%M:%S'`"

# 强制推送到 cnguu.github.io 仓库的 master 分支
git push -f git@github.com:hvnobug/hvnobug.github.io.git master

# 返回项目根目录
cd -

# 删除 dist 目录
rm -rf dist

# 备份项目
# shellcheck disable=SC2006
git add . && git commit -m "Site updated: `date '+%Y-%m-%d %H:%M:%S'`" && git push

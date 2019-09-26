#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 发布文档
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:cjl255352/docs.git master:gh-pages

# 返回根目录
cd -

# 发布文档源码
git add .
git commit -m 'deploy'
git push
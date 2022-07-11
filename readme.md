# 2022 init

[TOC]

记录一下

## 开发环境准备

windows 11，开启 wsl2，顺便熟悉一下 linux，跟着网上的教程安装即可，比较简单。

vscode 直接连接 wsl，在主机上写代码，很方便。

wsl 中安装 nvm、node、yarn 等等基本环境就可以开干了，apt、npm 各种都换成国内源

连上主机的代理，v2rayN 中开启`允许来自局域网的连接`，git 设置一下代理

```bash
git config --global http.proxy "${主机机局域网ip:port}"
git config --global https.proxy "${主机局域网ip:port}"
```

其实 wsl 也能设置代理走主机的代理软件，但我没成功，之后再说

## 技术选型

### vite + react

由于对 vue 没什么兴趣，基本框架还是选择 react，尝试使用 vite 来打包，`vite dev` 运行后可以直接访问`localhost:port`看到页面及热更新

### prettier + eslint + husky + lint-staged + commitlint

规范不能少，满上。根目录`git init`再推到远程 repo，这篇写的很详细
[前端工程化：Prettier+ESLint+lint-staged+commitlint+Hooks+CI 自动化配置处理](https://juejin.cn/post/7074893218034384927)

commitlint 新版的配置文件名为`commitlint.config.js`，前面没有点

### tailwind

尝试使用 tailwind 来写 css，减少写 css 的负担，这里碰到一些坑，tailwind 目前最新的版本 v3，跟着官网的教程安装后发现没引入，原因是 postcss 的配置问题，需要改成如下

```js
module.exports = {
    plugins: [require('tailwindcss'), require('autoprefixer')],
};
```

估计是默认的配置方法没读取到到 tailwind 的配置文件

或者直接用 cdn 的方式在`index.html`中引入也可以，但没必要

### 状态管理

小项目先不用大型的状态管理库，之后考虑 mobx or redux/toolkit

### 路由

毫无疑问 react-router，跟着官网文档走即可注意 v6 和 v5 版本写法不同

### antd

引入 antd 基础组件库，在`vite.config.js`中配置按需加载

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        vitePluginImp({
            optimize: true,
            libList: [
                {
                    libName: 'antd', // antd配置按需加载
                    libDirectory: 'es',
                    style: name => `antd/es/${name}/style`,
                },
            ],
        }),
    ],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true, // 配置了antd按需加载必须配置支持内联样式
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});
```

可以看到页面中确实只引入了单独组件的样式

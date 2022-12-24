// 1:引入核心模块
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App16'

// 把对应内容渲染到id为root的标签上
// 参数1 作为root内部的内容    参数2 渲染到/public/index.html中的目标标签
ReactDOM.render(
    <App/>,
    document.getElementById("root")
)
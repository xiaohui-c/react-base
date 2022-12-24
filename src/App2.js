import React from 'react'
import "./assets/style.css"
import Img from "./assets/images/RE4wtbD.jpg"


export default class App2 extends React.Component{
    render() {
        return (
            <div>
                {
                    /**
                     * 注释的写法
                     */
                }
                <p style={{ color: 'royalblue', fontSize: 20 }}>JSX注意事项</p>
                <p className="box">往事不可追，来着尤可鉴</p>
                <img src={Img} alt="default image" />
                <label htmlFor="username">
                    用户名：<input type="text" id="username"/>
                </label>
            </div>
        )
    }
}
##### 特点

声明式设计

react是面向数据编程，不需要直接去控制dom,只要把数据操作好，react自己会去帮你操作dom,可以节省很多操作dom的代码。



使用JSX语法

JSX是javascript语法的扩展



灵活

react所控制的dom就是id为root的dom,页面上的其它dom元素我们也可以使用jQuery等框架，可以和其它库并存



使用虚拟DOM，高效

虚拟DOM其实质是一个javascript对象，当数据和状态发生了变化，都会被自动高效的同步到虚拟DOM中，最后再将仅变化的部分同步到DOM中(不需要整个DOM树重新渲染)



组件式开发

通过React构建组件，使得代码更加容易得到复用和维护，能够很好的应用在大型项目开发中



单向数据流

父组件传递给子组件的数据，子组件能够使用，但是不能直接通过`this.props`修改，这样让数据清晰代码容易维护



##### 脚手架安装

```
npm install create-react-app -g
```

创建项目

```
create-react-app demo
```



把初始src文件夹里面的文件全部删除，接着创建入口文件`index.js`

```js
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<div>Hello React</div>,document.getElementById('root'))
```



设置js文件中自动识别标签

`setting.json`中

```js
"emmet.includeLanguages": { "javascript": "javascriptreact" },
"emmet.triggerExpansionOnTab": true
```



创建组件`App.js`

```react
import React from 'react'

class App extends React.Component{
    render(){
        return(
            <div>the first component</div>
        )
    }
}

export default App
```

修改入口文件`index.js`

```react
import React from 'react'
import ReactDom from 'react-dom'
import App from 'App'

ReactDom.render(
	<App/>,document.getElementById('root')
)
```



##### JSX语法

React的JSX是使用大小写字母来区分本地组件和HTML组件(如：html就用div p h1,组件就用Button,App等)

```jsx
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
                <p className="box">凡是过往，皆为序章</p>
                <img src={Img} alt="default image" />
                <label htmlFor="username">
                    用户名：<input type="text" id="username"/>
                </label>
            </div>
        )
    }
}
```



虚拟DOM不是html,虚拟dom对象比原生dom对象更简洁，浏览器在解析的时候会更快



##### 数组遍历

```jsx
import React from 'react'

let list = [1,2,3,4]
export default class App extends React.Component{
    render(){
        return(
            list.map((value,key)=>{
             return  <p key={key}>{value}</p>
            })
        )
    }
}
```



vscode使用`rcc`指令来快速创建文件



##### 事件

```jsx
import React from 'react'

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            num:120
        }
    }
    
    add(){
        this.setState({
            num:this.state.num + 1
        })
    }
    
    render(){
        return(
            <div>
                <p>{this.state.num}</p>
                <button onClick = {this.add.bind(this)}>增加</button>
            </div>
            
        )
    }
}
```



##### 双向数据绑定

关键词：`onChange`

```jsx
import React from 'react'

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state({
            val:'春眠不觉晓'
        })
    }
    
    handlerChange(e){
        this.setState({
            val:e.target.value
        })
    }
    
    render(){
        return(
        	<div>
                {/*显式传值 onChange={(e)=>this.handlerChange(e)}*/}
                <input value={this.state.val} onChange={this.handlerChange}/>
                <p>{this.state.val}</p>
            </div>
        )
    }
}
```





##### 组件传值

关键词`this.props`  `defaultProps`    `this.props.children`

```jsx
import React, { Component } from 'react'

class Content extends Component{
    static defaultProps = {//设置默认值
        bg:'skyblue'
    }
    render() {
        return (
            <div style = {{backgroundColor:this.props.bg}}>{this.props.msg}</div>
        )
    }
}
export default class App7 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg1: '书山有路勤为径',
            msg2: "学海无涯苦作舟",
            bg:'#cff'
        }
    }
    render() {
        return (
            <div>
                <Content msg = {this.state.msg1} bg = {this.state.bg}></Content>
                <Content msg = {this.state.msg2}>子元素</Content>
            </div>
        )
    }
}
```





##### key值的作用

例如：我们使用一个list数据去渲染一个li列表时，当我们对list数据进行改变，不会更新全部的li；

==有利于提高更新效率，减少不必要的DOM操作==



#####  子组件验证props属性值的类型

安装

```
npm install prop-types
//或
yarn add prop-types
```

使用

```jsx
import PropTypes from 'prop-types'

static propTypes = {//在子组件中使用
     msg:PropTypes.number
 }
```

==注意P的大小写==





##### 使用context来解决props属性值的多级传递问题

关键词    `contextTypes`    `this.context.value`    `childContextTypes`    `getChildContext`

```jsx
import React from 'react'
import PropTypes from 'prop-types'

class Child extends Component{
    static contextTypes = {
        value:PropTypes.string
    }
    render(){
        return(
            <div>{this.context.value}</div>
        )
    }
}

class Mom extends Component{
    render(){
        return(
        	<Child/>
        )
    }
}

export default class People extends Component{
    static childContextTypes={
        value:PropsTypes.string
    }
    getChildContext(){
        return{
            value:'书山有路勤为径'
        }
    }
    render(){
        return(
        	<Mom/>
        )
    }
}
```





##### 子组件传值父组件

```jsx
import React from 'react'

class Child extends Component{
    setNumber(){
        this.props.changeNumber(1)
    }
    render(){
        return(
            <button onClick={this.setNumber.bind(this)}>增加</button>
        )
    }
}

export default class Mom extends Component{
    constructor(props){
        this.state = {
            num:20
        }
    }
    changeNumber(value){
        this.setState({
            num:this.state.num + value
        })
    }
    render(){
        return(
        	<div>
                <Child changeNumber = {this.changeNumber.bind(this)}/>
                <p>{this.state.num}</p>
            </div>
        )
    }
}
```



##### react生命周期

生命周期指的是组件从被创建到销毁的过程

挂载期(初始)

运行时序：

`constructor`    `UNSAFE_componentWillMount`   `render`    `componentDidMount`

通常在`componentDidMount`中处理异步请求



更新期(props或state改变)

`UNSAFE_componentWillReceiveProps`  

  `shouldComponentUpdate`     `componentWillUpdate`      `render`     `UNSAFE_componentDidUpdate`

```jsx
shouldComponentUpdate(nextProps,nextState){
    //可以判断修改前后的值是否一样，不一样才去执行render,减少不必要的render,优化更新性能
    return (this.state.num !== nextState.num  || this.props.originNum !== nextProps.originNum)
}
```



卸载期

`componentWillUnmount`

```js
document.removeEventListener('click',this,close)
```



![image-20220527112051703](https://s2.loli.net/2022/05/27/G7HoicNdW3swpK1.png)





##### 不受控组件和受控组件

不受控组件：

点击提交按钮验证表单

关键词    `ref`

```html
用户名:<input type="text" ref="username"/></br></br>
密 码:<input type="password" ref="password"/></br></br>

<button onClick={this.submit.bind(this)}>提交</button>

submit(){//在这里进行验证
	console.log(this.refs.username.value)
}
```





受控组件：

关键词  `value`    `onChange`

```jsx
import React from 'react'

export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            num:0
        }
    }
    
    HandlerChange(e){
        this.setState({
            num:e.target.value
        })
        {/*if(e.target.value)*/}在这里进行验证
    }
    
    render(){
        return(
        	<input type="text" value={this.state.num} onChange={this.HandlerChange.bind(this)}/>
        )
    }
}
```







##### 路由原理

创建`index.html`

```html
<body>
    主页面
</body>
```

创建`list.html`

```html
<body>
    列表页面
</body>
```

创建`router.html`

```html
<body>
    <a href="#index">首页</a>
    <a href="#list">列表页面</a>
    <div id="routerView"></div>
</body>
<script>
    let routerview = document.getElementById("routerView")
    
    let routerList = {
        "#index":"./index.html",
        "#list":"./list.html"
    }
    
    window.addEventListener("hashchange",async ()=>{
        routerview.innerHTML = await ajax(routerList[location.hash])
    })
    
    function ajax(url){
        const p = new Promise((resolve,reject)=>{
            const xhr = new XMLHttpRequest()
            xhr.open('GET',url,true)
            xhr.onreadystatechange = () =>{
                if(xhr.readystate === 4){
                    if(xhr.status === 200){
                        resolve(xhr.response)
                    }
                }
            }
        })
        return p
    }
</script>
```





##### react-router基本使用

安装

```
yarn add react-router-dom@6
```

主文件

```jsx
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import Index from './Index';
import List from './List';

export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Link to="/index">首页</Link>
            <Link to="/list">列表页</Link>
        <Routes>
          <Route path="/index" element={<Index/>} />
          <Route path="/list" element={<List/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}
```

`Index`组件

```jsx
import React, { Component } from 'react'

export default class Index extends Component {
    render() {
        return (
            <div>
                首页面
            </div>
        )
    }
}
```

`List`组件

```jsx
import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <div>
                列表页面
            </div>
        )
    }
}
```



核心组件

`BrowerRouter`    和    `HashRouter`

作用：==包裹==整个应用，一个React应用只需要使用一次

`HashRouter`使用URL的哈希值`(#)`实现

`BrowserRouter`使用H5的`history.pushState`API实现



`Link`

作用：用于指定导航链接，完成路由跳转

语法说明：组件通过to属性指定路由地址，最终会渲染为a链接元素





##### 编程式导航

App.js文件

```jsx
import Login from './Login';
<Route path="/login" element={<Login/>} />
```

Login.js文件

```jsx
import {useNavigate} from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    function goList() {
        navigate('/list')
        {/*navigate('/list',replace:true)*/}跳转时不想增加历史记录
    }
        return (
            <div>
                login
                 <button onClick={goList}>跳到列表页面</button>
            </div>
        )
}

export default Login
```



##### 跳转携带参数

方式1：

在Login.js文件中传值

```js
function goList() {
        navigate('/list?id=1001')
    }
```

在List.js文件中接收

```jsx
import { useSearchParams } from 'react-router-dom'

function List() {
    const [params] = useSearchParams()
    const id = params.get('id')
    return (
        <div>
            列表页面
            <p>{id}</p>
        </div>
    )
}

export default List
```



方式2：

对应`http://localhost:3000/index/1000`的url传值情况

List.js文件

```jsx
import {useParams} from 'react-router-dom'

function List(){
    const params = useParams()
    return(
        <div>{params.id}</div>
    )
}
```

在App.js文件中补充暂未

```jsx
<Route path="/login/:id" element={<Login/>} />
```





##### 嵌套路由

第一步

```jsx
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import Index from './Index';
import List from './List';

export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/index" element={<Index/>}>
          		<Route path="board" element={<Board/>} />
                <Route path="article" element={<Article/>} />
            </Route>
          <Route path="/list" element={<List/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}
```

第二步

```jsx
import {Outlet} from "react-router-dom";

function Board(){
    return(
        <div>
            layout
            {/*二级路由出口*/}
            <Outlet/>
        </div>
    )
}
export default Board
```

==注意三个页面都要引用`Outlet`,并且导入都是从`react-router-dom`中导入==



##### 默认二级路由

```jsx
<Route index path="board" element={<Board/>} />
```

在输入url的时候不用再输入path



##### 配置404路由配置

```jsx
<Route path="*" element={<NotFound/>} />
```







##### Hooks

本质：一套能够使函数组件更加强大，更灵活的"钩子"(某个时机下自动执行)

React体系里组件分为类组件和函数组件，经过多年的实战，函数组件是一个更加匹配React的设计理念`UI = f(data)`，也更有利于逻辑拆分与重用的组件表达形式，而先前的函数组件是不可以有自己的状态的，为了能让==函数组件可以拥有自己的状态==，所以react v16.8开始，Hooks应运而生

1：为了兼容老版本，class类组件并没有被移除，两者都可以使用

2：有了hooks之后，不能再把函数成为无状态组件了，因为hooks为函数组件提供了状态

3：==hooks只能再函数组件中使用==

hooks解决了组件的状态逻辑复用和class组件自身的问题



##### useState

基本使用

```jsx
import {useState} from 'react'

function App(){
    const [count,setCount] = setState(0)
    return(
        <div onClick={()=>setState(count+1)}>{count}</div>
    )
}
export default App
```

==数组是有序的，对象是无序的，解构的时候要注意变量定义==



执行逻辑

调用`setCount`时候的更新过程

首次渲染

组件内部的代码会被执行一次，其中`useState`也会跟着执行，要注意初始值只在首次渲染时生效

更新渲染

app组件会再次渲染，这个函数会再次执行

`useState`再次执行，得到的新的count值不是0而是修改之后的1，模板会用新值渲染



使用规则

1：可以多次调用

```jsx
const [flag,setFlag] = useState(true)
const [list,setList] = useState([])
```

2：只能出现在函数组件中，并且不能嵌套在`if/for`以及其它函数中

3：可以通过开发者工具查看hooks状态



回调函数

使用场景：参数只会在组件的初始渲染中起作用，后续渲染时会被忽略。如果初始state需要通过计算获得，则可以传入一个函数在函数中计算并返回初始的state,此函数只在初始渲染时被调用

```jsx
import {useState} from 'react'

const [state,setState] = useState(()=>{return value//在这里做计算})
```





##### useEffect

副作用

副作用是相对于主作用来说的，一个函数除了主作用，其它的作用就是副作用。==对于React组件来说，主作用就是根据数据(state/props)渲染UI，除此之外都是副作用==

常见的副作用

数据请求ajax发送    手动修改dom    `localStorage`操作

useEffect函数的作用就是为react函数组件提供副作用处理的



```jsx
import {useEffect} from 'react'

useEffect(()=>{
    document.title = count
})
```

当我们通过修改状态更新组件的时候，副作用也会不断执行



依赖项控制副作用的执行时机

1：默认状态(无依赖项)

组件初始化的时候先执行一次，等到每次数据修改组件更新再次执行



2：添加一个空数组依赖项

组件初始化的时候==执行一次，后续不再执行==

```jsx
useEffect(()=>{},[])
```



3：添加特定依赖项

副作用函数在首次渲染时执行，在==依赖项发生变化==时重新执行

```jsx
useEffect(()=>{},[count])
```

==`useEffect`回调**函数中用到的数据**(比如count)就是依赖数据，就应该出现在依赖项数组中，如果不添加依赖项就会有bug出现==

某种意义上，hook的出现就是想不用生命周期概念也可以写业务代码



清除副作用

使用场景：在组件销毁时，如果有些副作用操作需要被清理，就可以使用此语法，比如常见的定时器

关键词：`clearInterval`

```jsx
import {useState,useEffect} from 'react'

function Test(){
    useEffect(()=>{
        let timer = setInterval(()=>{
            console.log(1)
        },1000)
        return ()=>{
            clearInterval(timer)
        }
    },[])
}

export default function App(){
    const [flag,setFlag] = useState(true)
    return(
    	<div>
            {flag ? <Test/> : null}
            <button onClick = {()=>{setFlag(!flag)}}>切换</button>
        </div>
    )
}
```



发送网络请求

关键词  `只在初始化的时候执行一次`

```jsx
useEffect(()=>{
    async function fetchData(){
        const res = await axios.get(url)
    }
   fetchData()
},[])
```





##### useRef

在函数组件中获取真实的dom元素对象或者是组件对象

关键词  `ref`    `current`

```JSX
import {useEffect,React,useRef} from 'react'

class Test extends React.Component{
    render(){
        return(
            <div>子组件</div>
        )
    }
}

export default function App(){
    const testRef = useRef(null)
    const h1Ref = useRef(null)
    useEffect(()=>{
        console.log(testRef.current)
        console.log(h1Ref.current)
      },[])
    return (
        <div>
            <Test ref={testRef}/>
            <h1 ref={h1Ref}>父组件</h1>
        </div>
    )
}
```

==useEffect是在dom渲染完成之后才执行==





##### useContext

关键字`createContext`   `const Context = createContext() `    `useContext(Context)`    `<Context.Provider>`

```jsx
import {useContext,useState,createContext} from 'react'
const Context = createContext()
function ComA(){
    const count = useContext(Context)
    return(
        <div>ComA{count}</div>
    )
}

function ComC(){
    const count = useContext(Context)
    return(
        <div>ComC{count}</div>
    )
}

export default function App(){
    const [count,setCount] = useState(0)
    return(
        <Context.provider value={count}>
        <div>
        	<ComA/>
            <ComC/>
            <button onClick={()=>{setCount(count+1)}}>增加</button>
        </div>
        </Context.provider>
    )
}
```

`Context.provider`可以直接在入口文件`index.js`中直接包裹`App`即可，该做法适用于Context要传递数据，并且只需要在整个应用初始化的时候==传递一次==就可以的情况





##### 自定义hooks

获取窗口滚动距离

创建`src/hooks`文件夹，创建`useWindowScroll.js`文件

```jsx
import {useState} from 'react'

export function useWindowScroll(){
    const [y,setY] = useState(0)
    window.addEventListener('scroll',()=>{
        const h = document.documentElement.scrollTop
        setY(h)
    })
    return [y]
}
```

App.js文件中使用

```jsx
import {useWindowScroll} from './hooks/useWindowScroll'

export default App(){
    const [y] = useWindowScroll()
    return(
    	<div style={{height:'2000px',position:relative,top:y}}>现在距离窗口顶部高度是:{y}</div>
    )
}
```



修改`localstorage`

```jsx
import {useState} from 'react'

function useLocalStorage(key,defaultValue){
    const [message,setMessage] = useState(defaultValue)
    useEffect(()=>{
        window.loacalstorage.setItem(key,message)
    },[message,key])
    return [message,setMessage]
}
```




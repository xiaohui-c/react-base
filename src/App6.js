// import React, { Component } from 'react';
// import "./assets/style.css"

// class tabListItem extends Component{
//     render() {
//         return (
//             <div>数学</div>
//         )
//     }
// }
// class App6 extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             content:'语文'
//         }

//     }
//     select(e) {
//         this.setState({
//             content:e.target.innerText
//         })
//     }

//     render() {
//         return (
//             <div className="tab_box">
//                 <div className="tab_box_list" onClick={this.select.bind(this)}>
//                     <div className={this.state.content === "语文" ? "active1" : '' }>语文</div>
//                     <div>数学</div>
//                     <div>英语</div>
//                 </div>
//                 <p className="content">{this.state.content}</p>
//             </div>
//         );
//     }
// }

// export default App6;
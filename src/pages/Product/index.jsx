import React, { Component } from 'react'
import RichTextEditor from './RichTextEditor'  //引入富文本编辑器组件
import {Link,Outlet} from 'react-router-dom'

export default class Product extends Component {
     editor = React.createRef()
     state={
         defaultContent:`<p>默认请输入内容</p>`  //定义一个默认state数据
     }
    submit = ()=>{   //编辑结束点击提交的回调函数
        const content = this.editor.current.getValue() //通过ref(editor)获取RichTextEditor组件的getValue函数
        localStorage.setItem('content',content)  //将获取的html内容保存到缓存中
        
    }
  render() {
      const defaultContent = this.state //取状态值
    return (
      <div>
          {/* 富文本编辑器组件,定义ref属性，传属性值defaultContent */}
          <RichTextEditor ref = {this.editor} defaultContent={defaultContent}></RichTextEditor> 
          <button onClick={this.submit}>提交</button>  
          <div>商品管理主界面
            <ul>
              <li><Link to='saveupdate'>添加/更新</Link></li>
              <li><Link to='detail'>详情</Link></li>
            </ul>
          </div> 
          <Outlet></Outlet>
      </div>
    )
  }
}

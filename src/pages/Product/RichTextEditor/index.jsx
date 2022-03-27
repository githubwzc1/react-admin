import React, { Component } from 'react'
import {EditorState, convertToRaw, ContentState } from 'draft-js'
import { Editor } from "react-draft-wysiwyg"; //引入一个所见即所得的富文本编辑器 
import draftToHtml from 'draftjs-to-html';   //引入富文本内容转换为html的插件
import htmlToDraft from 'html-to-draftjs';  //引入插件是react-draft-wysiwyg的内置插件
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"; //富文本编辑器 引入样式
import PropTypes from 'prop-types';   //引入prop插件

export default class RichTextEditor extends Component {
  state={
    editorState:EditorState.createEmpty()  //创建编辑器空内容
  }
  static propType = {
    defaultContent:PropTypes.string  //接收属性传值
  }
  componentDidMount(){
    const html = localStorage.getItem('content') || this.props.defaultContent  //从缓存或props中获取html的字符串数据
    const contentBlock = htmlToDraft(html); //将字符串的html转换为draft富文本格式内容
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks); //转换为contentState内容
      const editorState = EditorState.createWithContent(contentState); //转换为EditorState状态
      this.setState({  //存储
        editorState,
      })
    }
  }

  onEditorStateChange = (editorState) =>{  //编辑器内容更新的回调
    this.setState({
      editorState,
    })
  }
  getValue = (editorState) => {
    //将富文本内容转换为html格式并在textarea中输出
    return draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())) 
  }

  uploadImageCallBack = (file) => {
    return new Promise(
      (resolve, reject) => {
        console.log(file)
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.imgur.com/3/image');
        xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
        const data = new FormData();
        data.append('image', file);
        xhr.send(data);
        xhr.addEventListener('load', () => {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        });
        xhr.addEventListener('error', () => {
          const error = JSON.parse(xhr.responseText);
          reject(error);
        });
      }
    );
  }

  render() {
    const {editorState} = this.state
    return (
      
      <div>
        <Editor
          editorState={editorState}  //编辑器内容
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange} //编辑器内容触发更新
          toolbar={{
            image: { uploadCallback: this.uploadImageCallBack, alt: { present: true, mandatory: true } },
          }}
        />
        {/* 通过draftToHtml(convertToRaw(editorState.getCurrentContent()))将富文本内容转换为html格式并在textarea中输出 */}
        {/* <textarea cols="30" rows="10" value={draftToHtml(convertToRaw(editorState.getCurrentContent()))} readOnly={true} ></textarea> */}
      </div>
    )
  }
}

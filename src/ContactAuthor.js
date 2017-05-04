import React, {Component} from 'react';
import './iconfont/iconfont.css';
import './ContactAuthor.css'

export class ContactAuthor extends Component{
    render(){
        return(
            <ul className="ContactAuthor">
                <li>
                    <a className="iconfont icon-github" href='https://github.com/Nicole0320/TodoList-v1.0'/>
                    <p>查看源码</p>
                </li>
                <li>
                    <a className="iconfont icon-me" href='http://nicole0320.github.io/'/>
                    <p>关于作者</p>
                </li>
            </ul>
        )
    }
}
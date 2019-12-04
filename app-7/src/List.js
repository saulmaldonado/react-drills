import React, { Component } from "react";
import Todo from "./Todo"

export default class List extends Component{
    render(){
        let list = this.props.taskList.map((value, index) => {
            return <Todo  key={index} task={value}/>
        })
        return(
            <div>{list}</div>
        )
    }
}
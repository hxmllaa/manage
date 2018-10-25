import React, { Component } from 'react'
import { Input, Card, Button } from 'antd'
import styles from './edit.css';


class Edit extends Component {
  state = {
    name:this.props.item  ? this.props.item.name : ''  ,
    content:this.props.item ?  this.props.item.content : '' ,
  }


  handleChangeInput=(event,name)=>{
    let value = {};
    value[name]=event.target.value
    this.setState(value)
  }


  onSubmit = () => {
    const {name,content} = this.state
    const {onSave,item} = this.props
    const newItem = item ? {...item,name:name,content:content}:{name:name,content:content}
    onSave(newItem)
    // this.setState({name:'',content:''})
  }



  render () {
    const {name,content} = this.state
    const {modalButton} = this.props
    return (
      <Card>
        <h4>name</h4>
        <Input
          value={name}
          name={'name'}
          onChange={(event)=>{this.handleChangeInput(event,'name')}}
        />
        <h4>content</h4>
        <Input
          value={content}
          name={'content'}
          onChange={(event)=>{this.handleChangeInput(event,'content')}}
        />
        <Button  className={styles.add} onClick={this.onSubmit}>{modalButton}</Button>
      </Card>
    )
  }

}

export default Edit

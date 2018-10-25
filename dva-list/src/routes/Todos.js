import React ,{Component} from 'react'
import { connect } from 'dva'
import TodoList from '../components/TodoList'
import Edit from '../components/Edit'
import ButtonItem from '../components/ButtonItem'
import {Modal } from 'antd'
import styles from './Todos.css';



class Todos extends Component{
  state={
    modalTitle:'',
    modalVisible:false,
    modalContent:'',
    changeDetail:''
  }


  handleDelete= (id) =>{
    this.props.dispatch({
      type: 'todos/delete',
      payload: id,
    })
  }

  onDetail = (item) => {
      this.setState({
        modalTitle:item.name,
        modalVisible: true,
        modalContent:<div className={styles.modal}>
          {item.content}
        </div>,
      });
  }

  onAdd = (item) => {
    const [title,titleButton] = item ? ['编辑','编辑内容'] : ['新增','新增内容']
    this.setState({
      modalVisible: true,
      modalTitle:title,
      modalContent: <Edit
        onSave={this.onSave}
        item={item}
        modalButton={titleButton}
        onCancel={this.handleCancel}
      />
    })
  }

  handleCancel = () => {
    this.setState({
      modalContent:null,
      modalVisible: false,
    });
  }

  onSave = (item) => {
    if(item.id){
      this.props.dispatch({
        type: 'todos/update',
        payload: item,
      })
      this.setState({modalVisible:false,modalContent:''})
    }else{
      const newItem = {
        id: (new Date()).valueOf(),
        name:item.name,
        content:item.content
      }
      this.props.dispatch({
        type: 'todos/add',
        payload: newItem,
      })
      this.setState({modalVisible:false,modalContent:''})
    }
}
  render(){
    const {todos} = this.props
    const {modalTitle,modalVisible,modalContent} = this.state
    return (
      <div>

        <Modal
          title={modalTitle}
          visible={modalVisible}
          onCancel={this.handleCancel}
          footer={''}
        >
          {modalContent}
        </Modal>


        <TodoList onDelete={this.handleDelete} todos={todos} onDetail={this.onDetail} onAdd={this.onAdd}/>


       <ButtonItem onClick={this.onAdd} content={'Add'}/>
      </div>
    )
  }
}

export default connect(({todos}) => ({todos}))(Todos)


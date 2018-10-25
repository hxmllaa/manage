import React from 'react'
import PropTypes from 'prop-types'
import ButtonItem from './ButtonItem'
import styles from './edit.css';
import { Table,  Button ,Popconfirm} from 'antd'


const TodoList = ({onDelete, todos,onDetail,onAdd}) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Content',
      dataIndex: 'content'
    },
    {
      title:'Action' ,
      render:(index,item)=>{
        return (
          <div>
            <Popconfirm title="Delete?" onConfirm={() => onDelete(item.id)}>
              <Button>Delete</Button>
            </Popconfirm>
          </div>
        )
      }
    },
    {
      title:'Detail',
      render:(index,item) =>{
        return (
          <div className={styles.update}>
            <Button type="primary" onClick={()=>{onDetail(item)}}>Detail</Button>
            <ButtonItem  content={'update'} onClick={()=>onAdd(item)}/>
          </div>
        )
      }
    },
  ]

  return (
    <Table
      rowKey={'id'}
      dataSource={todos}
      columns={columns}
    />
  )
}

TodoList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
}

export default TodoList

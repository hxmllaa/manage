import React from 'react'
import {Button} from 'antd'

const ButtonItem = (props) => {
  const {content,onClick,item} = props
return(
  <div>
  <Button  onClick={()=>onClick(item)}>{content}</Button>
  </div>
)
}

export default ButtonItem

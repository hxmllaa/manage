export default {
  namespace: 'todos',
  state: [],
  reducers: {
    'add' (state, {payload}) {
      // TODO: 把payload 添加到数组列表末端
      return [...state, payload]
      // let id = state.reduce((previous, current) => previous.id > current.id ? previous :
      // current).id; id++; if (name === "") { alert('内容不能为空'); } else { return [...state, {name,
      // id}]; }
    },

    'update' (state, {payload}) {
      // payload 是修改后的一个item，他原来就在这个数组中
      // TODO:构建一个新的数组，通过map
      const newTodos = state.map((todo) => {
        return todo.id === payload.id ? payload : todo
      })
      return newTodos

      // let id = state.reduce((previous, current) => previous.id > current.id ? previous :
      // current).id; id++; if (name === "") { alert('内容不能为空'); } else { return [...state, {name,
      // id}]; }
    },

    'delete' (state, {payload: id}) {
      return state.filter(item => item.id !== id)
    }
  }
}


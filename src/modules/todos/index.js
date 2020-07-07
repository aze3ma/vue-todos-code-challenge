import mutations from './mutations'
import getters from './getters'
import actions from './actions'

const state = {
  todos: [],
  newTodo: '',
}

export default { namespaced: true, state, mutations, getters, actions }

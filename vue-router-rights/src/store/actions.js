import { formateRouterTree } from '../libs/utils'
import { getUserRouters } from '../services'
export default {
  async setUserRouters ({ commit, state }) {
    const userRouters = await getUserRouters(state.uid)
    const payload = formateRouterTree(userRouters)
    commit('setAuth', true)
    commit('setUserRouters', payload)
  }
}

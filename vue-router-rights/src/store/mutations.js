export default {
  setAuth (state, auth) {
    state.hasAuth = auth
  },
  setUserRouters (state, userRouters) {
    state.userRouters = userRouters
  },
  setUserUid (state, uid) {
    state.uid = uid
    localStorage.setItem('uid', uid)
  },
  getUserUid (state) {
    state.uid = localStorage.getItem('uid') || ''
  },
  setUserName (state, name) {
    state.name = name
    localStorage.setItem('userName', name)
  },
  getUserName (state) {
    state.name = localStorage.getItem('userName') || ''
  },
  deleteUserRouters (state) {
    state.userRouters = []
  }
}

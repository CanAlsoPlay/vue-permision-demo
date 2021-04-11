export default {
  setAuth (state, auth) {
    state.hasAuth = auth
  },
  setUserRouters (state, userRouters) {
    state.userRouters = userRouters
  },
  setUserUid (state, uid) {
    state.uid = uid
  }
}

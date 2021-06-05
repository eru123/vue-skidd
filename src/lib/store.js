const mutate = (storeState) => {
  const res = {};
  for (let x in storeState) {
    res[x] = function (state, value) {
      state[x] = value;
    };
  }
  return res;
};

const state = {
  user: {
    uid: null,
    email: null,
    emailVerified: null,
  },
  isAuthLoaded: false,
  authenticated: false,
  title: process.env.VUE_APP_TITLE,
};

const mutations = mutate(state);

const actions = {
  user({ commit }, user) {
    const { uid, email, emailVerified } = user ? user : state.user;
    commit("user", { uid, email, emailVerified });
  },
};

const modules = {};

export default {
  state,
  mutations,
  actions,
  modules,
};

export const actions = {
    nextStep({ commit }, payload) {
        commit('nextStep', payload);
    },
    uploadImage({ commit }, payload) {
        commit('uploadImage', payload);
    },
    selectFilter({ commit }, payload) {
        commit('selectFilter', payload);
    },
    goHome({ commit }, payload) {
        commit('goHome', payload);
    },
    lastStep({ commit }, payload) {
        commit('lastStep', payload);
    },
    sharePost({ commit, dispatch }, payload) {
        commit('sharePost', payload);
        dispatch('goHome');
    }
};

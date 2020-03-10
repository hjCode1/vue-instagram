import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        step: 1,
        image: '',
        selectedFilter: '',
        filters: [
            { name: 'normal' },
            { name: 'clarendon' },
            { name: 'gingham' },
            { name: 'moon' },
            { name: 'lark' },
            { name: 'reyes' },
            { name: 'juno' },
            { name: 'slumber' },
            { name: 'aden' },
            { name: 'perpetua' },
            { name: 'mayfair' },
            { name: 'rise' },
            { name: 'hudson' },
            { name: 'valencia' },
            { name: 'xpro2' },
            { name: 'willow' },
            { name: 'lofi' },
            { name: 'inkwell' },
            { name: 'nashville' }
        ],
        posts: [
            {
                username: 'socleansofreshh',
                userImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg',
                postImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/tropical_beach.jpg',
                likes: 36,
                hasBeenLiked: false,
                caption: "When you're ready for summer '18 ☀️",
                filter: 'perpetua'
            },
            {
                username: 'djirdehh',
                userImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me2.png',
                postImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/downtown.jpg',
                likes: 20,
                hasBeenLiked: false,
                caption: 'Views from the six...',
                filter: 'clarendon'
            },
            {
                username: 'puppers',
                userImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/pug_personal.jpg',
                postImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/puppers.jpg',
                likes: 49,
                hasBeenLiked: false,
                caption: 'Current mood 🐶',
                filter: 'lofi'
            }
        ]
    },
    mutations: {
        nextStep(state, payload) {
            state.step = 2;
        },
        lastStep(state, payload) {
            state.step = 3;
        },
        uploadImage(state, payload) {
            state.image = payload;
        },
        selectFilter(state, payload) {
            state.selectedFilter = payload;
        },
        goHome(state, payload) {
            state.step = 1;
            state.image = '';
            state.selectedFilter = '';
        },
        sharePost(state, payload) {
            const post = {
                username: 'hj',
                userImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/vue_lg_bg.png',
                postImage: payload.image,
                likes: 0,
                caption: payload.value,
                filter: payload.filterType
            };
            state.posts.unshift(post);
        }
    },
    actions: {
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
    }
});

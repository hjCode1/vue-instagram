export const mutations = {
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
            filter: payload.selectedFilter
        };
        state.posts.unshift(post);
    }
};

export default {
    ADD_LINK: (state, link) => {
        state.links.push(link);
    },
    REMOVE_LINK: (state, index) => {
        state.links.splice(index, 1);
    },
    REMOVE_ALL: state => {
        state.links = [];
    }
}
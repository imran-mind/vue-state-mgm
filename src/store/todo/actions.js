export default {
    removeLink: (context, index) => {
        context.commit("REMOVE_LINK", index);
      },
    addLinks: (context, data) => {
        context.commit("ADD_LINK", data.title);
    },
    removeLinks: ({ commit }) => {
        return new Promise(resolve => {
          setTimeout(() => {
            commit("REMOVE_ALL");
            resolve();
          }, 1500);
        });
    }
}

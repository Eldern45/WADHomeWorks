import {createStore} from 'vuex'


export default createStore({
    state: {
        posts: [
        ]
    },
    getters: {},
    mutations: {
        addPosts(state, posts) {
            console.log(posts)
            state.posts = state.posts.concat(posts)
        },
        setLikes(state, amount) {
            state.posts.forEach(e => e.likes = amount)
        },
        increaseLikes(state, index) {
            state.posts[index].likes += 1
        }
    },
    actions: {
        addPosts(context, posts) {
            context.commit("addPosts", posts)
        },
        initStore(context, url) {
            console.log("initializing the store")
            fetch(url)
                .then(async response => {
                    if (!response.ok) {
                        throw new Error("Bad response: " + response.statusText)
                    }
                    context.commit("addPosts", (await response.json()).posts)
                })
                .catch(error => {
                    console.error("Problem fetching data for vuex store initialization:" + error)
                })
        },
        increaseLikes(context, index) {
            context.commit("increaseLikes", index)
        },
        resetLikes(context) {
            context.commit("setLikes", 0)
        }
    },
    modules: {}
})


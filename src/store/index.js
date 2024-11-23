import {createStore} from 'vuex'



export default createStore({
    state: {
        posts: [
            {
                "createTime" : "2024-10-30T14:32:00Z",
                "authorName" : "Alice",
                "pictureUrl" : "https://timur0108.github.io/WADkodutooAPI/delta.jpg",
                "text" : "Delta keskus in great"
            },

            {
                "createTime" : "2024-10-29T10:15:00Z",
                "authorName" : "John",
                "pictureUrl" : null,
                "text" : "Anyone knows in which room is the lab today?"
            },

            {
                "createTime" : "2024-10-28T08:45:00Z",
                "authorName" : "Alex",
                "pictureUrl" : null,
                "text" : "Feel good today!"
            },

            {
                "createTime" : "2024-10-30T08:45:00Z",
                "authorName" : "Bob",
                "pictureUrl" : "https://timur0108.github.io/WADkodutooAPI/University%20of%20Tartu%201.jpg",
                "text" : "I study in University Of Tartu"
            },

            {
                "createTime" : "2024-10-29T14:20:00Z",
                "authorName" : "Mike",
                "pictureUrl" : null,
                "text" : "This is my first post"
            },

            {
                "createTime" : "2024-10-28T12:30:00Z",
                "authorName" : "Olivia",
                "pictureUrl" : null,
                "text" : "Saturday"
            },

            {
                "createTime" : "2024-10-27T18:15:00Z",
                "authorName" : "Emma",
                "pictureUrl" : null,
                "text" : "OK."
            },

            {
                "createTime" : "2024-10-26T07:05:00Z",
                "authorName" : "Sophia",
                "pictureUrl" : null,
                "text" : "ashjfbasfbaskjfasf"
            },

            {
                "createTime" : "2024-09-15T09:43:00Z",
                "authorName" : "Rob",
                "pictureUrl" : null,
                "text" : "The weather is good today!"
            },

            {
                "createTime" : "2024-11-02T15:27:00Z",
                "authorName" : "Henry",
                "pictureUrl" : null,
                "text" : "I hate mornings."
            }
        ]
    },
    getters: {},
    mutations: {
        addPosts(state, posts) {
            state.posts = state.posts.concat(posts)
        },
        setLikes(state, amount) {
            state.posts.forEach(e => e.likes = amount)
        },
        increaseLikes(state, amount, index) {
            state.posts[index].likes += 1
        }
    },
    actions: {
        addPosts(context, posts) {
            context.commit("addPosts", posts)
        },
        initStore(context, url) {
        }
    },
    modules: {}
})


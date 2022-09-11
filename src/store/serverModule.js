import axios from "axios"
export default {
    actions: {
        async fetchForm(ctx, [firstname, lastname, tel, adress, city, payment, price]) {
            const res = await axios.post("http://localhost:3001/userData/", {
                date: new Date(),
                firstname: firstname,
                lastname: lastname,
                tel: tel,
                adress: adress,
                city: city,
                payment: payment,
                price: price + " $"
            })
        },
        async fetchReviews(ctx, [id, nickname, reviews]) {
            const res = await axios.post("http://localhost:3001/ReviewsData/", {
                idProduct: id,
                date: new Date(),
                name: nickname,
                reviews: reviews
            })
            ctx.commit('addReviews', res.data)
        },
        async loadReviews(ctx) {
            const res = await axios.get("http://localhost:3001/ReviewsData/")
            ctx.commit('loadReviewsList', res.data)
        }
    },
    mutations: {
        addReviews(state, data) {
            state.ReviewsArr.push(data)
        },
        loadReviewsList(state, list) {
            state.ReviewsArr = list
        }
    },
    state: {
        ReviewsArr: []
    },
    getters: {
        getReviews(state) {
            return state.ReviewsArr;
        },
    }
}
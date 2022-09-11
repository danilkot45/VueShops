export default {
    actions: {
        addBasketId(ctx, [id, count, title, price, img]) {
            let listBasketId = localStorage.getItem("BasketWithCard")
            let arrBasket = []
            if (listBasketId) {
                arrBasket = JSON.parse(listBasketId)
            } else {
                arrBasket.push({ id: id, count: 0, title: title, price: price, image: img })
            }
            let arrBasketEl = arrBasket.find((a) => a.id === id);
            if (arrBasketEl) {
                arrBasketEl.count += count
            } else {
                arrBasket.push({ id: id, count: count, title: title, price: price, image: img })
            }

            localStorage.setItem("BasketWithCard", JSON.stringify(arrBasket))
            ctx.commit("addCard", arrBasket)
        },
        allCount(ctx) {
            let allCount = 0
            try {
                for (let i = 0; i < JSON.parse(localStorage.getItem("BasketWithCard")).length; i++) {
                    allCount += JSON.parse(localStorage.getItem("BasketWithCard"))[i].count;
                }
                ctx.commit("Count", allCount)
            } catch (e) {
                allCount = 0
                ctx.commit("Count", allCount)
            }
        },
        fetchBasket(ctx) {
            let basket = JSON.parse(localStorage.getItem("BasketWithCard"))
            ctx.commit("addCard", basket)
        }
    },
    mutations: {
        addCard(state, addToBasketId) {
            state.basketId = addToBasketId
        },
        Count(state, counter) {
            state.count = counter
        }
    },
    state: {
        basketId: [],
        count: 0
    },
    getters: {
        showBasket(state) {
            return state.basketId
        }
    }

}
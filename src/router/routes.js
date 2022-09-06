import VueRouter from "vue-router";
import Home from "../pages/HomePage.vue"
import About from "../pages/AboutPage"
import Category from "../pages/CategoryPage"
import News from "../pages/NewsPage"
import Error from "../pages/Error404Page"
import DetailProduct from '../pages/DetailProduct'
import Description from '../components/DescriptionPage.vue'
import ChatacteristicPage from '../components/ChatacteristicPage.vue'
import Reviews from '../components/ReviewsPage.vue'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/category',
            component: Category
        },
        {
            path: '/news',
            component: News,
        },
        {
            path: '/about',
            component: About,
        },
        {
            path: '/product/:id',
            component: DetailProduct,
            children: [
                {
                    path: "characteristic",
                    component: ChatacteristicPage
                },
                {
                    path: "description",
                    component: Description
                },
                {
                    path: "reviews",
                    component: Reviews

                },
            ],
        },
        {
            path: '*',
            component: Error
        }
    ]
})
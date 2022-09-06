import ColorDirective from '../directive/Vcolor'
export default {
    install: (Vue) => {
        Vue.directive('color', ColorDirective)
    }
}
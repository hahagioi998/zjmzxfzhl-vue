import ErrorPlugin from './errorPlugin'
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import Cookies from 'js-cookie'

import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'

import '@/styles/index.scss' // global css
import '@/components/FormGenerator/styles/index.scss';
import FormMaking from 'form-making'
import 'form-making/dist/FormMaking.css'
import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control
import {formatDictText, getDicts} from '@/utils/util'

import permission from "./directive/permission/permission";

//Vue.use(ErrorPlugin)

// import FormMaking from 'form-making-advanced'
// import 'form-making-advanced/dist/FormMaking.css'

// 开发环境若需要走mock挡板，将注释去掉即可 development-开发 production-生产
// import {mockXHR} from '../mock'
if (process.env.NODE_ENV === 'development') {
    // mockXHR()
}

let size = Cookies.get('size') || 'mini';
Vue.use(VueClipboard)
Vue.use(ElementUI, {locale, size})
Vue.use(FormMaking)
Vue.directive('permission', permission)

Vue.config.productionTip = false
Vue.prototype.getDicts = getDicts
Vue.prototype.formatDictText = formatDictText

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

import Vue from 'vue'
import Router from 'vue-router'
import home from './components/home.vue'

const about = resolve => {
    require.ensure(['./components/about.vue'], () => {
        resolve(require('./components/about.vue'))
    })
}

const projects = resolve => {
    require.ensure(['./components/projects.vue'], () => {
        resolve(require('./components/projects.vue'))
    })
}

const contact = resolve => {
    require.ensure(['./components/contact.vue'], () => {
        resolve(require('./components/contact.vue'))
    })
}

const sport = resolve => {
    require.ensure(['./components/sports.vue'], () => {
        resolve(require('./components/sports.vue'))
    })
}

const skills = resolve => {
    require.ensure(['./components/skills.vue'], () => {
        resolve(require('./components/skills.vue'))
    })
}

Vue.use(Router)

const routes = [
    {path: '/home', component: home},
    {path: '/about', component: about},
    {path: '/projects', component: projects},
    {path: '/sport', component: sport},
    {path: '/skills', component: skills},
    {path: '/contact', component: contact},
    {path: '*', redirect: '/home'}
]

export default new Router({ mode: 'history', routes })

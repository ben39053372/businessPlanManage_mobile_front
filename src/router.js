import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Approval from './views/Approval.vue'
import Supervisor from './views/Supervisor.vue'
import ApprovalUpdate from './views/ApprovalUpdate.vue'
import ApprovalChange from './views/ApprovalChange.vue'
import SupervisorTips from './views/SupervisorTips.vue'
import HistoryMessage from './views/HistoryMesseage.vue'
import store from '../src/vuex/store'

Vue.use(Router)

 
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/approval',
      name: 'approval',
      component: Approval
    },
    {
      path: '/supervisor',
      name: 'supervisor',
      component: Supervisor
    },{
      path: '/approvalUpdate/:planDep/:month/:title',
      name: '/approvalUpdate',
      component: ApprovalUpdate
    },{
      path: '/approvalChange/:id/:title',
      name: 'change',
      component: ApprovalChange
    },{
      path: '/supervisorTips/:id',
      name:'Tips',
      component: SupervisorTips
    },{
      path: '/historyMessage',
      name: 'historyMessage',
      component: HistoryMessage
    }
  ]
})
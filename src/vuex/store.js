import Vue from "vue"
import Vuex from "vuex"
import axios from 'axios'

Vue.use(Vuex)
//const baseurl = 'http://rap2api.taobao.org/app/mock/227201/api'
export default new Vuex.Store({

  state: {
    //工號
    userInfoCode:"gz00804",
    //token
    token:"",
    //isLogin
    isLogin:false,

    moredetail:[],
    baseurl: 'http://rap2api.taobao.org/app/mock/227201/api',
    baseurl1: 'http://172.30.215.254:8080/',
    baseurl2: 'http://172.30.210.229:8080/',
    baseurl3: 'http://172.30.215.96:8080/',
    supervisorList: [],
    approvalUpdate: [],
    approvalChange: [],
    //变更事项
    changedList: [],
    //Chart Data
    MonthChartData: [],
    //Chart Data
    totalChartData: [],
    //Chart Data
    departmentChartData: [],

    flowChart: [],

    //UI用
    chartState: 0,
    approvalState: 0,
    supervisorState: 0,
  },
  mutations: {
    //UI用
    setChartState(state, nextState) {
      state.chartState = nextState;
    },
    setApprovalState(state, nextState) {
      state.approvalState = nextState
    },
    setApprovalUpdateList(state, nextState) {
      state.approvalUpdate = nextState
    },
    setApprovalChangeList(state, nextState) {
      state.approvalChange = nextState
    },
    setSupervisorState(state, nextState) {
      state.supervisorState = nextState
    },
    setSupervisorList(state, nextState) {
      state.supervisorList = nextState
    },
    setMonthChartData(state, nextstate) {
      console.log('setMonthChartData')
      state.MonthChartData = nextstate
      console.log(state.MonthChartData[0])
    },
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading
      console.log('loading')
    },
    setFlowChart(state,nextState){
      console.log('setFlowChart')
      state.flowChart = nextState
      console.log(state.flowChart)
    },
    setMoreDetail(state,nextState){
      state.moredetail = nextState
    },
    setChange(state,nextState){
      state.changedList = nextState
    }
  },
  actions: {},
  getters: {
    //use Chart State map Chart Data to Chart
    getChartData(state) {
      switch (state.chartState) {
        case 0:
          return state.MonthChartData;
        case 1:
          return state.totalChartData;
        case 2:
          return state.departmentChartData;
      }
    },
    getHomeData(state) {
      switch (state.chartState) {
        case 0:
          return state.monthData;
        case 1:
          return state.totalData;
        case 2:
          return state.departmentData;
      }
    },
    getApprovalUpdateList(state) {
      switch (state.approvalState) {
        case 0:
          return state.approvalUpdate.filter(update => update.state == 0)
        case 1:
          return state.approvalUpdate.filter(update => update.state == 1)
        case 2:
          return state.approvalUpdate.filter(update => update.state == 2)
      }
    },
    getApprovalChangeList(state) {
      switch (state.approvalState) {
        case 0:
          return state.approvalChange.filter(change => change.state == 0)
        case 1:
          return state.approvalChange.filter(change => change.state == 1)
        case 2:
          return state.approvalChange.filter(change => change.state == 2)
      }
    },
    getSupervisorList(state) {
      switch (state.supervisorState) {
        case 0:
          return state.supervisorList.filter(change => change.state == 0)
        case 1:
          return state.supervisorList.filter(change => change.state == 1)
        case 2:
          return state.supervisorList.filter(change => change.state == 2)
        case 3:
          return state.supervisorList.filter(change => change.state == 3)
        case 4:
          return state.supervisorList.filter(change => change.state == 4)
      }this.$vux.loading.hide()
    }
  }
})

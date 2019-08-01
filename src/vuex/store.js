import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    supervisorList:[
      {title:'自動駕駛示範運行計劃',date:'2018/04/10',status:'院長臨時交辦',state:0},
      {title:'自動駕駛示範運行計劃',date:'2018/04/10',status:'院長臨時交辦',state:1},
      {title:'自動駕駛示範運行計劃',date:'2018/04/10',status:'院長臨時交辦',state:2},
    ],
    approvalUpdate: [
      { title: '信息與數字化部3月份進展更新待辦', link: '/approvalUpdate', state: 0 },
      { title: '信息與數字化部3月份進展更新跟蹤', link: '/approvalUpdate', state: 1 },
      { title: '信息與數字化部3月份進展更新已辦', link: '/approvalUpdate', state: 2 },
    ],

    approvalChange: [
      { title: '項目管理系統計畫變更待辦', link: '/approvalChange', state: 0 },
      { title: '項目管理系統計畫變更跟蹤', link: '/approvalChange', state: 1 },
      { title: '項目管理系統計畫變更已辦', link: '/approvalChange', state: 2 }
    ],

    //變更事項
    changedList: [
      { title: '更改事項', after: "xxxx", before: "yyyy" },
      { title: '更改事項2', after: "xxxxxx", before: "yyyyyy" }
    ],
    //Chart Data
    MouthChartData: [
      { year: "1", sales: 385 },
      { year: "2日", sales: 483 },
      { year: "3日", sales: 585 },
      { year: "4日", sales: 188 },
      { year: "5日", sales: 282 },
      { year: "6日", sales: 789 },
      { year: "7日", sales: 385 },
      { year: "8日", sales: 483 },
      { year: "9日", sales: 585 },
      { year: "10日", sales: 385 },


    ],

    //Chart Data
    totalChartData: [
      { year: "1月", sales: 385 },
      { year: "2月", sales: 585 },
      { year: "3月", sales: 483 },
      { year: "4月", sales: 2821 },
      { year: "5月", sales: 88 },
      { year: "6月", sales: 789 },
    ],

    //Chart Data
    departmentChartData: [
      { year: "1月", sales: 385 },
      { year: "2月", sales: 483 },
      { year: "3月", sales: 585 },
      { year: "4月", sales: 188 },
      { year: "5月", sales: 282 },
      { year: "6月", sales: 789 },
    ],

    //產品開發
    productNum: 110,

    //技術創新
    skillCreat: 20,

    //經營管理
    manage: 50,

    //待辦列表

    //跟蹤列表

    //已辦列表



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
    setSupervisorState(state, nextState) {
      state.supervisorState = nextState
    }
  },
  actions: {

  },
  getters: {
    //use Chart State map Chart Data to Chart
    getChartData(state) {
      switch (state.chartState) {
        case 0:
          return state.MouthChartData;
        case 1:
          return state.totalChartData;
        case 2:
          return state.departmentChartData;
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
          return state.approvalChange.filter(change => change.state == 0)
        case 1:
          return state.approvalChange.filter(change => change.state == 1)
        case 2:
          return state.approvalChange.filter(change => change.state == 2)
      }
    }
  }
  })
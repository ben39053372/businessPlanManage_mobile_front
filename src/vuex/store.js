import Vue from "vue"
import Vuex from "vuex"
import axios from 'axios'

Vue.use(Vuex)
//const baseurl = 'http://rap2api.taobao.org/app/mock/227201/api'
const store =  new Vuex.Store({

  state: {
    isLoading: true,
    baseurl: 'http://rap2api.taobao.org/app/mock/227201/api',
    supervisorList: [
      { "title": "自动驾驶示范运行计划", "date": "2018/04/10", "status": "院长临时交办", "state": 0 },
      { "title": "自动驾驶示范运行计划", "date": "2018/04/10", "status": "院长临时交办", "state": 1 },
      { "title": "自动驾驶示范运行计划", "date": "2018/04/10", "status": "院长临时交办", "state": 2 },
    ],
    approvalUpdate: [
      { "title": "信息与数字化部3月份进展更新待办", "link": "/approvalUpdate/1", "state": 0 },
      { "title": "信息与数字化部3月份进展更新跟踪", "link": "/approvalUpdate/2", "state": 1 },
      { "title": "信息与数字化部3月份进展更新已办", "link": "/approvalUpdate/3", "state": 2 },

    ],
    approvalChange: [
      { "title": "项目管理系统计画变更待办", "link": "/approvalChange/1", "state": 0 },
      { "title": "项目管理系统计画变更跟踪", "link": "/approvalChange/2", "state": 1 },
      { "title": "项目管理系统计画变更已办", "link": "/approvalChange/3", "state": 2 },
    ],
    //变更事项
    changedList: [
      { "title": "更改事项", "after": "xxxx", "before": "yyyy" },
      { "title": "更改事项2", "after": "xxxxxx", "before": "yyyyyy" }
    ],
    //Chart Data
    MonthChartData: [],
    //Chart Data
    totalChartData: [],
    //Chart Data
    departmentChartData: [],

    flowChart: [
      { "name": "流程一", "isDone": true, "lineDone": true, "inline_desc": "123", "date": "1999/09/09" },
      { "name": "流程二", "isDone": true, "lineDone": false, "inline_desc": "123", "date": "1999/09/09", "tip": "進行中" },
      { "name": "流程三", "isDone": false, "lineDone": false, "inline_desc": "123", "date": "1999/09/09" },
      { "name": "流程四", "isDone": false, "lineDone": false, "inline_desc": "123", "date": "1999/09/09" },
      { "name": "完成", "isDone": false, "lineDone": false, "date": "1999/09/09" },
    ],

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
    },
    setSupervisorList(state, nextState) {
      state.supervisorList = nextState
    },
    setMonthChartData(state, nextstate) {
      console.log('setMonthChartData')
      state.MonthChartData = nextstate
      console.log(state.MonthChartData[0])
    },
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
      console.log('loading')
    }
  },
  actions: {

    //督办事项分页查询
    updateSupervisorList({ commit }) {
      
      axios.get(this.state.baseurl + '/superviseManageApp/findSuperviseManage', {
        params: {
          page: 1,
          size: 10
        }
      })
        .then((res) => {
          var json = res.data.data
          console.log('updateSupervisorList', res.data.data)
          var dataList = []
          for (var i = 0; i < json.length; i++) {
            var data = json[i].rows
            dataList = dataList.concat({
              'title': data.problemDsc,
              'date': data.createTime,
              'status': data.newWorkProgress +'/'+ data.workProgress,
              'state': data.problemStatus,
              'id': data.id,
              'link': '/supervisorTips/' + data.id
            })
          }
          console.log(dataList)
          //mutation the state
          commit('setSupervisorList', dataList)
        })
        .catch((err) => (
          console.log(err)
        ))
    },

    //根据id查询审核督办事项
    updateSupervisorListById(id) {
      axios.get(this.state.baseurl + '/app/superviseManageApp', {
        params: {
          id: id
        }
      })
    },

    //添加指示意见
    sendIndicateMsg(id) {
      let data = {
        "id": 467,
        "dutyPerson": [
          {
            "label": "刘明月",
            "value": "gz04026"
          }
        ],
        "windowPerson": [
          {
            "label": "李智慧",
            "value": "gz04853"
          },
          {
            "label": "刘明月",
            "value": "gz04026"
          }
        ],
        "problemNo": "YB-20190725-0002",
        "auditMsg": "发送GV富商大贾讽德诵功"
      }
      axios.post(this.state.baseurl + '/superviseManageApp/saveIndicateMsg?id=' + id, {
        data
      })
        .then(res => {
          console.log(res)
        })
    },

    //计划变更审批查看  
    updateApprovalChange(id) {
      axios.get(this.state.baseurl + '/app/changePlan/auditPlan', {
        params: {
          id
        }
      })
        .then(res => {
          console.log(res)
        })
    },

    //计划变更审批通过
    passChangePlan(msg, id) {
      axios.get(this.state.baseurl + '/app/changePlan/auditPlanYes', {
        params: {
          "auditMsg": msg,
          "planChangeId": id
        }
      })
        .then(res => {
          console.log(res)
        })
    },

    //计划变更审批不通过
    noPassChangePlan(msg, id) {
      axios.get(this.state.baseurl + '/app/changePlan/auditPlanNo', {
        params: {
          "auditMsg": msg,
          "planChangeId": id
        }
      })
        .then(res => {
          console.log(res)
        })
    },
  },
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
      }
    }
  }
})


export default store
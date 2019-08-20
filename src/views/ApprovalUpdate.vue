<template>
  <div>
    <x-header :left-options="{backText: ''}">进展更新</x-header>

    <div class="paper">
      <card>
        <h2 slot="content">{{$route.params.title}}</h2>
      </card>
    </div>

    <!-- 进展消息 -->
    <div class="paper">
      <card>
        <h4 slot="header">进展消息</h4>
        <img slot="content" width="100%" :src="this.imgSrc" />
      </card>
    </div>

    <!-- 流程节点 -->
    <FlowChart />

    <!-- 审批意见 -->
    <div class="paper">
      <card>
        <h4 slot="header">审批意见</h4>
        <div slot="content">
          <x-textarea class="input" v-model="msg" placeholder="请输入。。。" :max="30"></x-textarea>
          <flexbox>
            <flexbox-item>
              <x-button type="primary" @click.native="pass">通过</x-button>
            </flexbox-item>
            <flexbox-item>
              <x-button type="warn" @click.native="dontpass">拒绝</x-button>
            </flexbox-item>
          </flexbox>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import {
  Card,
  Flexbox,
  FlexboxItem,
  XButton,
  Group,
  GroupTitle,
  XTextarea,
  XHeader
} from "vux";
import axios from "axios";
import FlowChart from "../components/FlowChart";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    Flexbox,
    Card,
    FlexboxItem,
    XButton,
    Group,
    GroupTitle,
    XTextarea,
    FlowChart,
    XHeader
  },
  data() {
    return {
      msg: "",
      imgSrc: "https://f11.baidu.com/it/u=2550844653,2528503954&fm=72"
    };
  },
  mounted() {
    this.fetchDataByPlanDeptAndMonth();
  },
  methods: {
    fetchDataByPlanDeptAndMonth() {
      this.$vux.loading.show({
        text: "Loading"
      });
      console.log(typeof(this.$route.params.planDep))
      console.log(typeof(this.$route.params.month))
      axios
        .post("http://172.30.215.96:8080/api/app/progressReportApp/getFlowDetailAndFileUrl", {
          planDeptValue: this.$route.params.planDep,
          month: parseInt(this.$route.params.month) 
        })
        .then(res => {
          console.log(res.data.data[0])
          var json = res.data.data[0];
          //console.log(json);
          //圖片連結
          this.imgSrc = json.fileUrl;
          var flowData = json.resultList;
          //console.log(flowData);
          var data = [];
          for (var i = 0; i < flowData.length; i++) {
            //不是最後一點
            if (i != flowData.length - 1) {
              //是綠
              if (flowData[i].flowColor == "green") {
                //下一點是紅色
                if (flowData[i + 1].flowColor == "red") {
                  data = data.concat({
                    name: flowData[i].operator,
                    isDone: true,
                    lineDone: false,
                    inline_desc: flowData[i].operation,
                    date: flowData[i].time
                  });
                }
                //下一點不是紅色
                else {
                  data = data.concat({
                    name: flowData[i].operator,
                    isDone: true,
                    lineDone: true,
                    inline_desc: flowData[i].operation,
                    date: flowData[i].time
                  });
                }
              }
              //是紅
              else {
                data = data.concat({
                  name: flowData[i].operator,
                  isDone: false,
                  lineDone: false,
                  inline_desc: flowData[i].operation,
                  date: flowData[i].time
                });
              }
            }
            //最後一點
            if (i == flowData.length - 1) {
              if (flowData[i].flowColor == "green") {
                data = data.concat({
                  name: flowData[i].operator,
                  isDone: true,
                  lineDone: true,
                  inline_desc: flowData[i].operation,
                  date: flowData[i].time
                });
              } else {
                data = data.concat({
                  name: flowData[i].operator,
                  isDone: false,
                  lineDone: false,
                  inline_desc: flowData[i].operation,
                  date: flowData[i].time
                });
              }
            }
          }
          this.setFlowChart(data);
          this.$vux.loading.hide();
        })
        .catch(err=>{
          this.$vux.loading.hide()
          this.$vux.toast.show()
        });
    },
    pass() {
      axios
        .post("http://172.30.215.96:8080/api/app/progressReportApp/progressPorterApproval", {
          status: 1,
          type: 1,
          planDeptValue: this.$route.params.planDep,
          //msg: this.msg
        })
        .then(res => {
          //console.log(this.$route.params.planDep, this.msg);
          //console.log(res);
          this.$vux.alert.show({
            title: "审批通过",
            content: "已发出"
          });
        });
    },
    dontpass() {
      axios
        .post('http://172.30.215.96:8080/api/app/progressReportApp/progressPorterApproval', {
          status: 0,
          type: 1,
          planDeptValue: this.$route.params.planDep,
          //msg: this.msg
        })
        .then(res => {
          //console.log(this.$route.params.planDep, this.msg);
          //console.log(res);
          this.$vux.alert.show({
            title: "审批拒绝",
            content: "已发出"
          });
        });
    },
    ...mapMutations(["setFlowChart"])
  },
  computed: {
    ...mapState(["baseurl"])
  }
};
</script>

<style lang="less" scoped>
p {
  text-align: left;
  padding: 0 10px;
}
h3 {
  margin: 10px;
  text-align: center;
  font-size: 15px;
}
h2 {
  margin: 14px;
  font-size: 18px;
}
</style>
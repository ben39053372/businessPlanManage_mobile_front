<template>
  <div>
    <x-header :left-options="{backText: ''}">进展更新</x-header>

    <div class='paper'>
      <card>
        <h2 slot='content'>{{$route.params.title}}</h2>
      </card>
      
    </div>

    <!-- 进展消息 -->
    <div class="paper">
      <card>
        <h4 slot="header">进展消息</h4>
        <img
          slot="content"
          
          width="100%"
          :src="this.imgSrc"
        />
      </card>
    </div>

    <!-- 流程节点 -->
    <FlowChart />

    <!-- 审批意见 -->
    <div class="paper">
      <card>
        <h4 slot="header">审批意见</h4>
        <div slot="content">
          <x-textarea class="input" placeholder="请输入。。。" :max="30"></x-textarea>
          <flexbox>
            <flexbox-item>
              <x-button type="primary">通过</x-button>
            </flexbox-item>
            <flexbox-item>
              <x-button type="warn">拒绝</x-button>
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
import axios from 'axios'
import FlowChart from "../components/FlowChart";
import { mapState } from 'vuex';
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
  data(){
    return {
      imgSrc:'https://f11.baidu.com/it/u=2550844653,2528503954&fm=72'
    }
  },
  mounted(){
    this.fetchDataByPlanDeptAndMonth()
  },
  methods:{
    fetchDataByPlanDeptAndMonth(){
      axios.post(this.baseurl+'/app/progressReportApp/getFlowDetailAndFileUrl',{
        planDeptValue: this.$route.params.planDep,
        month: this.$route.params.month
      })
        .then(res=>{
          console.log(res.data.data)
        })
    }
  },
  computed:{
    ...mapState(['baseurl'])
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
h2{
  margin: 14px;
  font-size:18px;
}
.update-photo {
  
}
</style>
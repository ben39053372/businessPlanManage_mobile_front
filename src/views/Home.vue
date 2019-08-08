<template>
  <div class="home">
    <div style="padding: 10px 25px;">
      <h3>经营计划完成概况</h3>
      <button-tab v-model="chartState">
        <button-tab-item>当月统计</button-tab-item>
        <button-tab-item selected>累计统计</button-tab-item>
        <button-tab-item>部门完成率</button-tab-item>
      </button-tab>
    </div>

    <!-- 圖表 -->
    <VChart />
    <!--<MonthVchart />-->

    <!-- 節點完成率 -->
    <div class="paper">
      <card :header="{title: '節點完成率'}" style="text-align:left;">
        <div slot="content" class="card-demo-flex card-demo-content01">
          <div class="vux-1px-r">
            <span>{{productNum}}%</span>
            <br />
            <p>产品开发</p>
          </div>
          <div class="vux-1px-r">
            <span>{{skillCreat}}%</span>
            <br />
            <p>技术创新</p>
          </div>
          <div class="vux-1px-r">
            <span>{{manage}}%</span>
            <br />
            <p>经营管理</p>
          </div>
        </div>
      </card>
      <grid class="grid" :show-lr-borders="false" :show-vertical-dividers="true">
        <grid-item label="经营月报" class="grid">
          <img slot="icon" src="../assets/icon/barchart.png" />
        </grid-item>
        <grid-item label="督办月报" class="grid">
          <img slot="icon" src="../assets/icon/unorderedlist.png" />
        </grid-item>
      </grid>
    </div>
  </div>
</template>

<script>
import {
  ButtonTab,
  ButtonTabItem,
  Card,
  Grid,
  GridItem,
  Group,
  Divider,
  ViewBox
} from "vux";
import VChart from "../components/VChart";
import MonthVchart from '../components/MonthVchart'
import { mapState, mapGetters, mapMutations } from "vuex";
import axios from 'axios';
var thismonth = new Date().getMonth();
export default {
  name: "home",
  components: {
    ButtonTab,
    ButtonTabItem,
    Card,
    Grid,
    GridItem,
    Divider,
    Group,
    ViewBox,
    VChart,
    MonthVchart
  },
  mounted(){
    this.fetchData();
  },
  methods:{
    fetchData(){
      console.log(this.thismonth+1)
      axios.post(this.baseurl + '/app/portal/getALLCompletionData',{
        "startMonth":"1",
        "endMonth": this.thismonth+1,
        "type": "1",
        "depName" : "全部"
      })
        .then(res=>{
          var json = res.data.data
          console.log(json)

          //節點完成率
          this.productNum=json.nodeCompletion[0].completeProportion
          this.skillCreat=json.nodeCompletion[1].completeProportion
          this.manage=json.nodeCompletion[2].completeProportion
        })
        .catch(err=>console.log(err))
    }
  },
  data() {
    return {
      productNum:0,
      skillCreat:0,
      manage:0,
      thismonth,
      MounthChartData:[]
    };
  },
  computed: {
    ...mapGetters(["getHomeData"]),
    //...mapState(['productNum','skillCreat','manage']),
    ...mapState(["baseurl"]),
    chartState: {
      get() {
        return this.$store.state.chartState;
      },
      set(nextState) {
        this.$store.commit("setChartState", nextState);
      }
    }
  }
};
</script>

<style scoped lang="less">
@import "~vux/src/styles/1px.less";

.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex span {
  color: #f74c31;
}
h3 {
  margin: 5px;
  text-align: center;
}

.grid {
  padding: 5px;
  background: #fff;
}

p {
  margin: 5px 0px;
}
</style>

<template>
  <div class="home">
    <div style="padding: 10px 25px;">
      <h3>經營計畫完成概況</h3>
      <button-tab v-model='chartState'>
        <button-tab-item >當月統計</button-tab-item>
        <button-tab-item selected>累計統計</button-tab-item>
        <button-tab-item >部門完成率</button-tab-item>
      </button-tab>
    </div>
    <VChart />
    <card :header="{title: '節點完成率'}" style="text-align:left;">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-r">
          <span>{{productNum}}</span>
          <br />
          <p>產品開發</p>
        </div>
        <div class="vux-1px-r">
          <span>{{skillCreat}}</span>
          <br />
          <p>技術創新</p>
        </div>
        <div class="vux-1px-r">
          <span>{{manage}}</span>
          <br />
          <p>經營管理</p>
        </div>
      </div>
    </card>
    <grid class="grid" :show-lr-borders='false' :show-vertical-dividers='false  '>
      <grid-item label="經營月報" class="grid">
        <img slot="icon" src="../assets/demo/grid_icon.png" />
      </grid-item>
      <grid-item label="重點項目" class="grid">
        <img slot="icon" src="../assets/demo/grid_icon.png" />
      </grid-item>
    </grid>
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
import { mapState } from 'vuex';
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
    VChart
  },
  data(){
    return {
    }
  },
  computed:{
    ...mapState(['productNum','skillCreat','manage']),
    chartState:{
      get(){
        return this.$store.state.chartState
      },
      set(nextState){
        this.$store.commit('setChartState',nextState)
      }
    }
  },
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

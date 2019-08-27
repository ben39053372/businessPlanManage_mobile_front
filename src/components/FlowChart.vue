<template>
  <div class="paper">
    <card>
      <h4 slot="header">流程节点</h4>

      <!--小流程圖-->
      <flow slot="content" v-if="!showContent001">
        <template v-for="(i, index) in flowChart">
          <flow-state :state="index + 1" :is-done="i.isDone" :key="'a1'+index"></flow-state>
          <flow-line
            v-if="index != (flowChart.length - 1)"
            :is-done="i.lineDone"
            :tip="i.tip ? i.tip : null"
            :key="'a2'+index"
          ></flow-line>
        </template>
      </flow>

      <!-- 大流程圖 -->
      <template slot="content" v-if="showContent001" id="box">
        <card id="scroll-box">
          <flow slot="content" style="padding: 50px 15px;float:left;" orientation="vertical">
            <template v-for="(i, index) in flowChart">
              <flow-state :state="index + 1" :title="(i.name)" :is-done="i.isDone" :key="'b1'+index">
                <cell
                  class="cell-padding"
                  slot="title"
                  :title="(i.name)"
                  :inline-desc="(i.inline_desc)"
                >
                  <span style="padding:0 30px;">{{i.date}}</span>
                </cell>
              </flow-state>
              <flow-line
                v-if="index != (flowChart.length - 1)"
                :is-done="i.lineDone"
                :tip="i.tip ? i.tip : null"
                :key="'b2'+index"
                line-span='70px'
              ></flow-line>
            </template>
          </flow>
        </card>
      </template>
      
      <div slot="content" style="text-align:center">
        <div v-if="showContent001" style="margin:auto 0">
          <x-icon type="ios-arrow-up" size="30" @click.native="showContent001 = !showContent001"></x-icon>
        </div>
        <div v-else style="margin:auto 0">
          <x-icon type="ios-arrow-down" size="30" @click.native="showContent001 = !showContent001"></x-icon>
        </div>
      </div>
     
    </card>
  </div>
</template>

<script>
import { Card, Flow, FlowState, FlowLine, Cell, Grid, Divider } from "vux";
import { mapState } from "vuex";
import { METHODS } from 'http';
export default {
  data() {
    return {
      showContent001: true
    };
  },
  mounted(){
    //console.log('flowchartMount')
  },
  components: {
    Card,
    Flow,
    FlowState,
    FlowLine,
    Cell,
    Grid,
    Divider
  },
  computed: {
    ...mapState(["flowChart"])
  },
};
</script>

<style lang="less" scoped>
.divider {
  margin: 8px;
  padding: 5px;
}
.flow {
  padding: 20px 10px;
}
.cell-padding {
  padding: 0;
}
</style>
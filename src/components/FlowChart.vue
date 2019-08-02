<template>
  <div>
    <!--
    <cell
      title="流程节点"
      :border-intent="false"
      :arrow-direction="showContent001 ? 'up' : 'down'"
      @click.native="showContent001 = !showContent001"
    ></cell>
    -->
    <divider class="divider">流程节点</divider>
    <flow class="flow" v-if="showContent001==false">

      <flow-state state="1" is-done></flow-state>
      <flow-line is-done></flow-line>

      <flow-state state="2" is-done>
        <span slot="title"></span>
      </flow-state>
      <flow-line tip="进行中"></flow-line>
      <flow-state state="3"></flow-state>
      <flow-line></flow-line>

      <flow-state state="4"></flow-state>
      <flow-line></flow-line>
      <flow-state state="5"></flow-state>
      <flow-line></flow-line>
      <flow-state state="6"></flow-state>
      <flow-line></flow-line>
      <flow-state state="7"></flow-state>
      <flow-line></flow-line>
      <flow-state state="8"></flow-state>
      <flow-line></flow-line>
      <flow-state state="9"></flow-state>
      <flow-line></flow-line>
      <flow-state state="10"></flow-state>
      <flow-line></flow-line>
      <flow-state state="11"></flow-state>
      <flow-line></flow-line>
      <flow-state state="12"></flow-state>
      <flow-line></flow-line>
      <flow-state state="13"></flow-state>
      <flow-line></flow-line>
      <flow-state state="14"></flow-state>


    </flow>

    <template v-if="showContent001" id="box">
      <card id="scroll-box">
        <flow
          orientation="vertical"
          style="height:250px;padding: 20px 70px;float:left;"
          slot="content"
        >
          <flow-state state="1" title="流程一" is-done>
            <cell class="cell-padding" slot="title" title="张三" inline-desc="234">
              <span style="padding:0 30px;">'2019-03-10 22:10:10'</span>
            </cell>
          </flow-state>
          <flow-line is-done></flow-line>

          <flow-state state="2" title="流程二" is-done>
            <cell class="cell-padding" slot="title" title="流程二" inline-desc="234">
              <!--date-->
            </cell>
          </flow-state>
          <flow-line tip="进行中"></flow-line>

          <flow-state state="3" title="流程三">
            <cell class="cell-padding" slot="title" title="流程三" inline-desc="234">
              <!--date-->
            </cell>
          </flow-state>
          <flow-line></flow-line>

          <flow-state state="4" title="完成">
            <cell class="cell-padding" slot="title" title="完成" inline-desc="234"></cell>
          </flow-state>
        </flow>
      </card>
    </template>
    <div style='text-align:center'>
      <div v-if="showContent001" style="margin:auto 0">
        <x-icon type="ios-arrow-up" size="30" @click.native="showContent001 = !showContent001"></x-icon>
      </div>
      <div v-else style="margin:auto 0">
        <x-icon type="ios-arrow-down" size="30" @click.native="showContent001 = !showContent001"></x-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { Card, Flow, FlowState, FlowLine, Cell, Grid, Divider } from "vux";
export default {
  data() {
    return {
      showContent001: false,
      flowTitle
    };
  },
  components: {
    Card,
    Flow,
    FlowState,
    FlowLine,
    Cell,
    Grid,
    Divider
  }
};
</script>

<style lang="less" scoped>
.divider {
  margin: 8px;
  padding: 5px;
}
.flow {
  padding: 5px 10px;
}
.cell-padding {
  padding: 0;
}
</style>
<template>
  <div class="Supervisor">
    <tab v-model="index">
      <tab-item v-for="(item,key) in list1" :key="key">{{item}}</tab-item>
    </tab>
    <group gutter='0'>
      <cell :border-intent="false" link='/supervisorTips'>
        <img
          slot="icon"
          width="40"
          style="display:block;margin-right:5px;"
          src="../assets/logo.png"
        />
        <cell-box slot='inline-desc' style='float:left' align-items='left'>
            <!--name-->
            自動駕駛示範運行計劃<br>
            <!--date-->
            2018/04/10<br>
            <!--status-->
            院長臨時交辦<br>
        </cell-box>
      </cell>
    </group>
  </div>
</template>

<script>
import { Tab, TabItem, Group, Cell, CellBox } from "vux";
export default {
  components: {
    Tab,
    TabItem,
    Group,
    Cell,
    CellBox
  },
  data() {
    return {
      list1: ["正常推進", "關閉", "取消"],
      demo1: "待辦",
      index: 0
    };
  }
};
</script>

<style lang="less" scoped>
.group-margin{
  margin-top:0;

}
</style>
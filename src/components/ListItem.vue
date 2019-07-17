<template>
  <group gutter="0" style="height:100%">
    <div class="paper">
      <divider>進展更新</divider>
      <cell
        class="cell"
        title="信息與數字化部3月份進展更新"
        link="/approvalUpdate"
        is-link
        :border-intent="true"
      />
      <cell
        class="cell"
        title="信息與數字化部3月份進展更新"
        link="/approvalUpdate"
        is-link
        :border-intent="true"
      />
    </div>

    <div class="paper">
      <divider>計畫變更</divider>
      <cell class="cell" title="項目管理系統計畫變更" link="/approvalChange" is-link :border-intent="false" />
      <cell class="cell" title="項目管理系統計畫變更" link="/approvalChange" is-link :border-intent="false" />
    </div>
  </group>
</template>

<script>
import { Cell, CellBox, Group, Grid, GridItem, Divider } from "vux";
export default {
  name: "ListItem",
  components: {
    Cell,
    CellBox,
    Group,
    Grid,
    GridItem,
    Divider
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.cell {
  background: #fff;
}
.paper {
  background: #eeeeee;
  padding: 7px;
}
.grid-center {
  display: block;
  text-align: center;
  color: #666;
  text-decoration: none;
}
.content001 {
  padding: 0;
}
.sub-item {
  color: #888;
}
.slide {
  padding: 0 20px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1) -0.1s;
}
.animate {
  max-height: 9999px;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
  transition-delay: 0s;
}
</style>

<template>
  <group gutter="0" style="height:100%">
    <div class="paper">
      <divider>进展更新</divider>
      <cell
        :key="update.id"
        v-for="update in getApprovalUpdateList"
        class="cell"
        :title="update.title"
        :link="update.link"
        is-link
        :border-intent="true"
      />
    </div>

    <div class="paper">
      <divider>计画变更</divider>
      <cell
        :key="change.id"
        v-for="change in getApprovalChangeList"
        class="cell"
        :title="change.title"
        :link="change.link"
        is-link
        :border-intent="false"
      />
    </div>
  </group>
</template>

<script>
import { Cell, CellBox, Group, Grid, GridItem, Divider } from "vux";
import { mapState, mapGetters } from "vuex";
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
  },
  computed: {
    ...mapState(["approvalUpdate", "approvalChange"]),
    ...mapGetters(["getApprovalUpdateList",'getApprovalChangeList'])
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

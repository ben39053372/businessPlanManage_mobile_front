<template>
  <group gutter="0" style="height:100%">
    <div class="paper">
      <card>
        <h4 slot="header">进展更新</h4>
        <cell
          slot="content"
          :key="update.id"
          v-for="update in getApprovalUpdateList"
          class="cell"
          :title="update.title"
          :link="update.link"
          is-link
          :border-intent="true"
        />
      </card>
    </div>

    <div class="paper">
      <card>
        <h4 slot="header">计画变更</h4>
        <cell
          slot="content"
          :key="change.id"
          v-for="change in getApprovalChangeList"
          class="cell"
          :title="change.title"
          :link="change.link"
          is-link
          :border-intent="false"
        />
      </card>
    </div>
  </group>
</template>

<script>
import { Card, Cell, CellBox, Group, Grid, GridItem, Divider } from "vux";
import { mapState, mapGetters } from "vuex";
export default {
  name: "ListItem",
  components: {
    Card,
    Cell,
    CellBox,
    Group,
    Grid,
    GridItem,
    Divider
  },
  mounted(){
    this.mount();
  },
  methods:{
    mount(){
      console.log('mounted approval')
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["approvalUpdate", "approvalChange"]),
    ...mapGetters(["getApprovalUpdateList", "getApprovalChangeList"])
  }
};
</script>

<style scoped>

.cell {
  background: #fff;
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

<template>
  <div class="Supervisor">
    <tab v-model="supervisorState">
      <tab-item v-for="(item,key) in list1" :key="key">{{item}}</tab-item>
    </tab>
    <div class="paper">
      <card>
        <cell
          slot="content"
          v-for="list in getSupervisorList"
          :key="list.id"
          :border-intent="false"
          :link="list.link" 
        >
          <img
            slot="icon"
            width="40"
            style="display:block;margin-right:5px;"
            src="../assets/logo.png"
          />
          <cell-box slot="inline-desc" style="float:left" align-items="left">
            <!--name-->
            {{list.title}}
            <br />
            <!--date-->
            {{list.date}}
            <br />
            <!--status-->
            {{list.status}}
            <br />
          </cell-box>
        </cell>
      </card>
    </div>
  </div>
</template>

<script>
import { Card, Tab, TabItem, Group, Cell, CellBox } from "vux";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  components: {
    Card,
    Tab,
    TabItem,
    Group,
    Cell,
    CellBox
  },
  mounted(){
    this.updateSupervisorList();
  },
  data() {
    return {
      list1: ["正常推进","延期", "取消", "关闭","预关闭"],
      demo1: "待办",
      index: 0
    };
  },
  methods:{
    ...mapActions(['updateSupervisorList'])
  },
  computed: {
    ...mapState(["supervisorList"]),
    supervisorState: {
      get() {
        return this.$store.state.supervisorState;
      },
      set(nextState) {
        this.$store.commit("setSupervisorState", nextState);
      }
    },
    ...mapGetters(["getSupervisorList"])
  }
};
</script>

<style lang="less" scoped>
.group-margin {
  margin-top: 0;
}
p{
  margin: 0;
}
</style>
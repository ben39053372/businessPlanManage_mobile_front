<template>
  <div class="Supervisor">
    <tab v-model="supervisorState">
      <tab-item v-for="(item,key) in list1" :key="key">{{item}}</tab-item>
    </tab>
    <group gutter='0'>
      <cell v-for='list in getSupervisorList' :key='list.id' :border-intent="false" link='/supervisorTips'>
        <img
          slot="icon"
          width="40"
          style="display:block;margin-right:5px;"
          src="../assets/logo.png"
        />
        <cell-box  slot='inline-desc' style='float:left' align-items='left'>
            <!--name-->
            {{list.title}}<br>
            <!--date-->
            {{list.date}}<br>
            <!--status-->
            {{list.status}}<br>
        </cell-box>
      </cell>
    </group>
  </div>
</template>

<script>
import { Tab, TabItem, Group, Cell, CellBox } from "vux";
import { mapState, mapGetters } from 'vuex';
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
  },
  computed:{
    ...mapState(['supervisorList']),
    supervisorState:{
      get(){
        return this.$store.state.supervisorState
      },
      set(nextState){
        this.$store.commit('setSupervisorState',nextState)
      }
    },
    ...mapGetters(['getSupervisorList'])
  }
};
</script>

<style lang="less" scoped>
.group-margin{
  margin-top:0;

}
</style>
<template>
  <div class="Supervisor">
    <sticky>
      <tab v-model="supervisorState">
        <tab-item v-for="(item,key) in list1" :key="key">{{item}}({{count[key]}})</tab-item>
      </tab>
    </sticky>
    <div class="paper">
      <card>
        <cell
          slot="content"
          v-for="list in getSupervisorList"
          :key="list.id"
          :border-intent="false"
          :link="list.link"
          style="padding:7px;"
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
import axios from "axios";
import { Card, Tab, TabItem, Group, Cell, CellBox, Sticky } from "vux";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {
    Card,
    Tab,
    TabItem,
    Group,
    Cell,
    CellBox,
    Sticky
  },
  mounted() {
    this.updateSupervisorList();
  },
  data() {
    return {
      list1: ["正常推进", "延期", "取消", "关闭", "预关闭"],
      demo1: "待办",
      index: 0,
      count: [0, 0, 0, 0, 0]
    };
  },
  methods: {
    //...mapActions(['updateSupervisorList']),
    ...mapMutations(["setSupervisorList"]),
    //督办事项分页查询
    updateSupervisorList() {
      this.$vux.loading.show({
        text: "Loading"
      });
      axios
        .get(this.baseurl + "/superviseManageApp/findSuperviseManage", {
          params: {
            page: 1,
            size: 10
          }
        })
        .then(res => {
          var json = res.data.data;
          var dataList = [];
          for (var i = 0; i < json.length; i++) {
            var data = json[i].rows;
            dataList = dataList.concat({
              title: data.problemDsc,
              date: data.createTime,
              status: data.newWorkProgress + "/" + data.workProgress,
              state: data.problemStatus,
              id: data.id,
              link: "/supervisorTips/" + data.id
            });
          }
          for (var i = 0; i < dataList.length; i++) {
            this.count[dataList[i].state] = this.count[dataList[i].state] + 1;
          }
          this.setSupervisorList(dataList);
          this.$vux.loading.hide();
        })
        .catch(err => console.log(err));
    }
  },
  computed: {
    ...mapState(["supervisorList", "baseurl"]),
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
p {
  margin: 0;
}
</style>
<template>
  <group gutter="0" style="height:100%">
    <div class="paper">
      <card>
        <h4 slot="header" class="subTitle">进展更新</h4>
        <cell
          slot="content"
          style="padding:14px 5px"
          :key="update.id"
          v-for="update in getApprovalUpdateList"
          class="cell"
          :title="update.title"
          :link="update.link"
          is-link
          :border-intent="false"
        />
      </card>
    </div>

    <div class="paper">
      <card style="padding:0px">
        <h4 slot="header" class="subTitle">计划变更</h4>
        <cell
          style="padding:14px 5px"
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
import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
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
  mounted() {
    this.updateApprovalList();
  },
  methods: {
    ...mapMutations(["setApprovalUpdateList", "setApprovalChangeList"]),
    //進展更新列表
    updateApprovalList() {
      this.$vux.loading.show({
        text: "Loading"
      });
      axios
        .get("http://172.30.215.95:8080/api/app/changePlan/auditAndPlan")
        .then(res => {
          console.log(res);
          var json = res.data.data;
          console.log(json);
          var data = [];
          //待辦
          for (var i = 0; i < json.audit.auditComList.length; i++) {
            data = data.concat({
              title: json.audit.auditComList[i].tital,
              link:
                "/approvalUpdate/" +
                json.audit.auditComList[i].planDep +
                "/" +
                json.audit.auditComList[i].month +
                "/" +
                json.audit.auditComList[i].tital,
              state: 0
            });
          }
          //跟蹤
          for (var i = 0; i < json.audit.auditFollowList.length; i++) {
            data = data.concat({
              title: json.audit.auditFollowList[i].tital,
              link:
                "/approvalUpdate/" +
                json.audit.auditFollowList[i].planDep +
                "/" +
                json.audit.auditFollowList[i].month +
                "/" +
                json.audit.auditFollowList[i].tital,
              state: 1
            });
          }
          //已辦
          for (var i = 0; i < json.audit.auditFinList.length; i++) {
            data = data.concat({
              title: json.audit.auditFinList[i].tital,
              link:
                "/approvalUpdate/" +
                json.audit.auditFinList[i].planDep +
                "/" +
                json.audit.auditFinList[i].month +
                "/" +
                json.audit.auditFinList[i].tital,
              state: 2
            });
          }
          console.log("ApprovalUpdate", data);
          this.setApprovalUpdateList(data);
          var data2 = [];
          //待辦
          if (json.plan.planComList != null) {
            for (var i = 0; i < json.plan.planComList.length; i++) {
              data2 = data2.concat({
                title: json.plan.planComList[i].changeItem,
                link:
                  "/approvalChange/" +
                  + json.plan.planComList[i].id+
                  "/" +
                  json.plan.planComList[i].changeItem,
                state: 0
              });
            }
          }

          //跟蹤
          if (json.plan.planFollowList != null) {
            for (var i = 0; i < json.plan.planFollowList.length; i++) {
              data2 = data2.concat({
                title: json.plan.planFollowList[i].changeItem,
                link:
                  "/approvalChange/" +
                  + json.plan.planFollowList[i].id +
                  '/'+
                  json.plan.planFollowList[i].changeItem,
                state: 1
              });
            }
          }

          //已辦
          if (json.plan.planFinishList != null) {
            for (var i = 0; i < json.plan.planFinishList.length; i++) {
              data2 = data2.concat({
                title: json.plan.planFinishList[i].changeItem,
                link:
                  "/approvalChange" +
                  + json.plan.planFinishList[i].id +
                  '/'+
                  json.plan.planFinishList[i].changeItem,
                state: 2
              });
            }
          }

          console.log("ApprovalChange", data2);
          this.setApprovalChangeList(data2);
          this.$vux.loading.hide();
        })
        .catch(err => console.log(err));
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["approvalUpdate", "approvalChange", "baseurl"]),
    ...mapGetters(["getApprovalUpdateList", "getApprovalChangeList"])
  }
};
</script>

<style scoped>
.cell {
  background: #fff;
  padding: 0px 10px;
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
.subTitle {
  margin: 5px 5px;
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

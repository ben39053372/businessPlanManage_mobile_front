<template>
  <div>
    <x-header :left-options="{backText: ''}">项目管理系统计画变更</x-header>

    <!--
    <div class="paper">
      <card>
        <h2 slot="content">{{$route.params.title}}</h2>
      </card>
    </div>
    -->

    <!-- 变更内容 -->
    <Changed />

    <!-- 更多详情 -->
    <MoreDetail />

    <!-- 流程节点 -->
    <FlowChart />

    <!-- 审批意见 -->
    <div class="paper">
      <card>
        <h4 slot="header">审批意见</h4>
        <div slot="content">
          <x-textarea v-model="msg" class="input" placeholder="请输入。。。" :max="30"></x-textarea>
          <flexbox>
            <flexbox-item>
              <x-button type="primary" @click.native="pass">通过</x-button>
            </flexbox-item>
            <flexbox-item>
              <x-button type="warn" @click.native="dontpass">拒绝</x-button>
            </flexbox-item>
          </flexbox>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import {
  Card,
  Flexbox,
  FlexboxItem,
  XButton,
  Group,
  GroupTitle,
  XTextarea,
  XHeader
} from "vux";
import FlowChart from "../components/FlowChart";
import MoreDetail from "../components/MoreDetail";
import Changed from "../components/Changed";
import { mapState, mapMutations } from "vuex";
import axios from "axios";
var etoc = {
  applicationCode: "申请单号",
  applyDept: "申请单位",
  relevanceDept: "关联单位",
  influenceTargetVlaue: "影响年度经营目标",
  changeItem: "变更事项",
  businessType: "所属领域",
  changeReason: "变更原因",
  changeBasis: "变更依据",
  dirtDesc: "工作方向",
  instituteWork: "院重要实施事项",
  instituteTarget: "院年度目标/指标",
  supllyDepName: "数据提供单位",
  planDep: "统筹单位",
  keyMeasures: "重点举措",
  yearTarget: "年度目标",
  actionPlan: "行动计划",
  deliverables: "交付物及完成标识",
  finishTime: "完成时间",
  responsibleUnitName: "责任单位",
  responsiblePerson: "责任人",
  groupFilingVlaue: "需要到集团备案",
  finishGroupFilingVlaue: "是否完成集团备案",
  remark: "其他影响说明"
};

export default {
  components: {
    Card,
    Flexbox,
    FlexboxItem,
    XButton,
    Group,
    GroupTitle,
    XTextarea,
    FlowChart,
    MoreDetail,
    XHeader,
    Changed
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    ...mapMutations(["setMoreDetail", "setChange"]),
    showDetail() {
      if (this.moreDetail == true) {
        this.moreDetail = false;
      } else {
        this.moreDetail = true;
      }
    },

    fetchData() {
      this.$vux.loading.show({
        text: "Loading"
      });
      console.log(this.$route.params.id);
      axios
        .get(
          "http://rap2api.taobao.org/app/mock/227201/businessplanmanage/api/app/changePlan",
          {
            params: {
              id: this.$route.params.id
            }
          }
        )
        .then(res => {
          this.$vux.loading.show({
            text: "Loading"
          });
          const json = res.data.data;
          //console.log(json)
          const resultList = json.planChangeDetail;
          var dept = "";
          for (var i = 0; i < resultList.relevanceDept.length; i++) {
            dept = dept.concat(resultList.relevanceDept[i].dept) + "/";
          }
          var data = [
            { title: "申请单号", content: resultList.applicationCode },
            { title: "申请单位", content: resultList.applyDept },
            { title: "关联单位", content: dept },
            {
              title: "影响年度经营目标",
              content: resultList.influenceTargetVlaue
            },
            { title: "变更事项", content: resultList.changeItem },
            { title: "所属领域", content: resultList.businessType },
            { title: "变更原因", content: resultList.changeReason },
            { title: "变更依据", content: resultList.changeBasis },
            { title: "工作方向", content: resultList.dirtDesc },
            { title: "院重要实施事项", content: resultList.instituteWork },
            { title: "院年度目标/指标", content: resultList.instituteTarget },
            { title: "数据提供单位", content: resultList.supllyDepName },
            { title: "统筹单位", content: resultList.planDep },
            { title: "需要到集团备案", content: resultList.groupFilingVlaue },
            {
              title: "是否完成集团备案",
              content: resultList.finishGroupFilingVlaue
            },
            { title: "其他影响说明", content: resultList.remark }
          ];
          var change = [];
          var oldJsonData = resultList.oldJsonData;
          var newJsonData = resultList.jsonData;
          newJsonData = JSON.parse(newJsonData);
          oldJsonData = JSON.parse(oldJsonData);
          var oldJsonDataList = Object.keys(oldJsonData);
          for (var i = 0; i < oldJsonDataList.length; i++) {
            if (
              typeof newJsonData[oldJsonDataList[i]] !=
              "undefined" /** && newJsonData[oldJsonDataList[i]] != oldJsonData[oldJsonDataList[i]]*/
            ) {
              change = change.concat({
                title: etoc[oldJsonDataList[i]],
                after: newJsonData[oldJsonDataList[i]],
                before: oldJsonData[oldJsonDataList[i]]
              });
            }
          }
          this.setMoreDetail(data);
          this.setChange(change);
          this.$vux.loading.hide();
        });
    },
    pass() {
      axios
        .post(this.baseurl + "/app/changePlan/auditPlanYes", {
          auditMsg: this.msg,
          planChangeId: this.$route.params.id
        })
        .then(
          this.$vux.alert.show({
            title: "审批通过",
            content: "已发出"
          })
        );
    },
    dontpass() {
      axios
        .post(this.baseurl + "/app/changePlan/auditPlanNo", {
          auditMsg: this.msg,
          planChangeId: this.$route.params.id
        })
        .then(
          this.$vux.alert.show({
            title: "审批拒绝",
            content: "已发出"
          })
        );
    }
  },
  data() {
    return {
      mouth: 3,
      msg: ""
    };
  },
  computed: {
    ...mapState(["baseurl"])
  }
};
</script>

<style lang="less" scoped>
p {
  text-align: left;
  padding: 0 10px;
}
h3 {
  margin: 10px;
}
h2 {
  margin: 14px;
  font-size: 18px;
}
</style>
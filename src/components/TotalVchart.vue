<template>
  <v-chart  prevent-render syncY="true" @on-render="fetchData"></v-chart>
</template>

<script>
import {
  VChart,
  VLine,
  VArea,
  VPie,
  VPoint,
  VScale,
  VBar,
  VAxis,
  VGuide,
  VTooltip,
  VLegend,
  Scroller
} from "vux";
import axios from "axios";
import { mapState, mapGetters } from "vuex";
import { async, delay } from "q";

const data = [];
export default {
  components: {
    VChart,
    VLine,
    VArea,
    VPie,
    VBar,
    VPoint,
    VScale,
    VAxis,
    VGuide,
    VTooltip,
    VLegend,
    Scroller
  },
  methods: {
    fetchData({ chart }) {
      this.$vux.loading.show({
        text: "Loading"
      });
      var thismonth = new Date().getMonth();
      //console.log(thismonth + 1);
      axios
        .post("http://172.30.215.96:8080/api/app/portal/getALLCompletionData", {
          startMonth: "1",
          endMonth: thismonth + 1,
          type: "2",
          depName: "全部"
        })
        .then(res => {
          //console.log(res)
          var json = res.data.data;
          //console.log('json',json);

          //节点完成率
          //console.log('节点完成率')
          this.productNum = json[1].nodeCompletion[0].completeProportion;
          this.skillCreat = json[1].nodeCompletion[1].completeProportion;
          this.manage = json[1].nodeCompletion[2].completeProportion;
          //当月统计
          //console.log('当月统计')
          var data = [];
          for (var i = 1; i <= 12; i++) {
            data = data.concat({
              name: "计划完成数",
              time: i + "月",
              num1: json[2].planCompletion[1][i + "月份"],
              "计划完成率": json[2].planCompletion[2][i + "月份"]
            });
          }
          for (var i = 1; i <= 12; i++) {
            data = data.concat({
              name: "计划完成缌数",
              time: i + "月",
              num1: json[2].planCompletion[0][i + "月份"],
              "计划完成率": json[2].planCompletion[2][i + "月份"]
            });
          }
          for (var i = 1; i <= 12; i++) {
            data = data.concat({
              name: "计划完成率",
              time: i + "月",
              "计划完成率": json[2].planCompletion[2][i + "月份"]
            });
          }
          //console.log(data);
          this.data = data;
        })
        .then(() => {
          chart.source(this.data, {
            release: {
              min: 1990,
              max: 2010
            }
          });
          //画棒
          chart
            .interval()
            .position("time*num1")
            .color("name")
            .adjust({
              type: "dodge",
              marginRatio: 0.05
            });
          //画线
          chart
            .line()
            .position("time*计划完成率")
            .color("#facc14");
          //chart.axis("num3", false);
          chart.legend("计划完成率");
          chart.render();
          //console.log("render");
          this.$vux.loading.hide()
        })
        .catch(err => {
          //console.log(err)
          this.$vux.loading.hide()
          this.$vux.toast.show()
        });
    },
  },
  computed: {
    ...mapState(["baseurl"])
  }
};
</script>

<style>
</style>


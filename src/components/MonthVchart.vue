<template>
  <v-chart id="1" prevent-render syncY="true" @on-render="fetchData"></v-chart>
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
      console.log(thismonth + 1);
      axios
        .post(this.baseurl + "/app/portal/getALLCompletionData", {
          startMonth: "1",
          endMonth: this.thismonth + 1,
          type: "1",
          depName: "全部"
        })
        .then(res => {
          var json = res.data.data;
          console.log(json);

          //節點完成率
          this.productNum = json.nodeCompletion[0].completeProportion;
          this.skillCreat = json.nodeCompletion[1].completeProportion;
          this.manage = json.nodeCompletion[2].completeProportion;
          //當月統計
          var data = [];
          for (var i = 1; i <= 12; i++) {
            data = data.concat({
              name: "計畫完成數",
              time: i + "月",
              num1: json.planCompletion[1][i + "月份"],
              num3: json.planCompletion[2][i + "月份"]
            });
          }
          for (var i = 1; i <= 12; i++) {
            data = data.concat({
              name: "計畫完成緦數",
              time: i + "月",
              num1: json.planCompletion[0][i + "月份"],
              num3: json.planCompletion[2][i + "月份"]
            });
          }
          for (var i = 1; i <= 12; i++) {
            data = data.concat({
              name: "計畫完成率",
              time: i + "月",
              num3: json.planCompletion[2][i + "月份"]
            });
          }
          console.log(data);
          this.data = data;
        })
        .then(() => {
          for (var i = 0; i < data.length; i++) {
            console.log(data[i]);
          }
          chart.source(this.data, {
            release: {
              min: 1990,
              max: 2010
            }
          });
          //畫棒
          chart
            .interval()
            .position("time*num1")
            .color("name")
            .adjust({
              type: "dodge",
              marginRatio: 0.05
            });
          //畫線
          chart
            .line()
            .position("time*num3")
            .color("#facc14");
          //chart.axis("num3", false);
          chart.legend("num3");
          chart.render();
          console.log("render");
          this.$vux.loading.hide()
        })
        .catch(err => console.log(err));
    }
  },
  computed: {
    ...mapState(["baseurl"])
  }
};
</script>

<style>
</style>


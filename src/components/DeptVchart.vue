<template>
  <v-chart prevent-render syncY="true" @on-render="fetchData"></v-chart>
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
        .post(
          "http://172.30.210.229:8080/api/app/portal/getALLCompletionData",
          {
            startMonth: "1",
            endMonth: thismonth + 1,
            type: "1",
            depName: "全部"
          }
        )
        .then(res => {
          var json = res.data.data;
          console.log(json);
          var data = [];
          for (var i = 0; i < 7; i++) {
            data = data.concat({
              name: json[3].departmenList[i].depName,
              value: parseInt(json[3].departmenList[i].depCompletion),
              const: 100
            });
          }
          this.data = data;
          //console.log(this.data);
        })
        .then(() => {
          var data = this.data;
          //console.log(this.data)
          chart.source(this.data);
          chart.coord({
            transposed: true
          });
          chart.axis(false);
          chart.tooltip(false);
          chart
            .interval()
            .position("name*const")
            .color("#d9e4eb")
            .size(10)
            .animate(false);
          chart
            .interval()
            .position("name*value")
            .size(10);

          // 绘制文本
          data.map(function(obj) {
            chart.guide().text({
              position: [obj.name, "min"],
              content: obj.name,
              style: {
                textAlign: "start",
                textBaseline: "bottom"
              },
              offsetY: -8
            });
            chart.guide().text({
              position: [obj.name, "max"],
              content: obj.value,
              style: {
                textAlign: "end",
                textBaseline: "bottom"
              },
              offsetY: -8
            });
          });
          chart.render();
          this.$vux.loading.hide();
        })
        .catch(err => {
          this.$vux.loading.hide();
          this.$vux.toast.show();
          console.log(err);
        });
    }
  },
  computed: {
    ...mapState(["baseurl"])
  }
};
</script>

<style scoped>
canvas {
  width: 200%;
}
</style>


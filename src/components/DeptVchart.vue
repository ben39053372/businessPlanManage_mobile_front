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
      console.log(thismonth + 1);
      axios
        .post("http://172.30.210.229:8080/api/app/portal/getALLCompletionData", {
          startMonth: "1",
          endMonth: thismonth + 1,
          type: "1",
          depName: "全部"
        })
        .then(res => {
          var json = res.data.data;
          console.log(json);
          var data = [];
          for (var i = 0; i < 5; i++) {
            data = data.concat({
              name: json[3].departmenList[i].depName,
              value: parseInt(json[3].departmenList[i].depCompletion)
            });
          }
          this.data = data;
        })
        .then(() => {
          for (var i = 0; i < data.length; i++) {
            console.log(data[i]);
          }
          chart.source(this.data);
          chart.legend(false);
          data.map(function(obj) {
            chart.guide().text({
              top:true,
              position: [name, value],
              content: obj.value,
              style: {
                textBaseline: "bottom",
                textAlign: "center"
              },
              offsetY: 0
            });
          });

          //畫棒
          chart
            .interval()
            .position("name*value")
            .color("name");
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


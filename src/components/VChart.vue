<template>
  <v-chart ref="demo" :data="getChartData">
    <v-bar colors='rgba(49, 179, 240, 0.507)'/>
    <v-line />
    <v-tooltip :show-item-marker="false" />
  </v-chart>
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
  VLegend
} from "vux";
import { mapState, Store, mapGetters } from "vuex";
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
    VLegend
  },
  computed: {
    ...mapGetters(["getChartData"])
  },
  data() {
    return {};
  }
};
</script>
<template >
  <div>
    <template v-if="chartState==0"> <MonthVchart/> </template>
    <template v-if="chartState==1"> <TotalVchart/> </template>
    <template v-if="chartState==2"> <DeptVchart/> </template>
  </div>
</template>

<script>
import MonthVchart from "./MonthVchart";
import TotalVchart from "./TotalVchart";
import DeptVchart from "./DeptVchart";
import axios from "axios";
import { mapState, mapGetters } from "vuex";
import { async, delay } from "q";

const data = [];
export default {
  components: {
    MonthVchart,
    TotalVchart,
    DeptVchart
  },
  computed: {
    ...mapState(["chartState"])
  }
};
</script>

<style>
</style>


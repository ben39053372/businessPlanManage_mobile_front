<template>
  <div class="paper">
    <card>
      <cell slot="content" v-for="(item) in data" :key="item.id" :link='item.fileUrl'>
        <p slot="title" style="font-size:20px">{{item.fileName}}</p>

      </cell>
    </card>
  </div>
</template>

<script>
import { Card, Cell } from "vux";
import axios from "axios";
const thisyear = new Date().getFullYear();
export default {
  components: {
    Card,
    Cell
  },
  data() {
    return {
      data: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$vux.loading.show({
        text: "Loading"
      });
      console.log("111");
      axios
        .post(
          "http://172.30.215.96:8080/api/app/portal/getBusinessMonthReports",
          {
            year: thisyear,
            type: 0
          }
        )
        .then(res => {
          var json = res.data.data;
          console.log(res);
          this.data = json;
          this.$vux.loading.hide();
        })
        .catch(err => {
          this.$vux.loading.hide();
          this.$vux.toast.show();
        });
    }
  }
};
</script>

<style scoped>
</style>
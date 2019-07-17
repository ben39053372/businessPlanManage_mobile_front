<template>
  <div class="Update">
    <tab v-model="index">
      <tab-item v-for="(item,key) in list1" :key="key">{{item}}</tab-item>
    </tab>
    <ListItem />
  </div>
</template>

<script>
import { Tab, TabItem } from "vux";
import ListItem from "../components/ListItem.vue";

export default {
  components: {
    Tab,
    TabItem,
    ListItem,
  },
  data() {
    return {
      list1: ["待辦", "跟蹤", "已辦"],
      demo1: "待辦",
      index: 0
    };
  }
};
</script>

<style scope>

</style>



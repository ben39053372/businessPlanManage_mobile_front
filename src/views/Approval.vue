<template>
  <div class="Update">
    <tab v-model="approvalState">
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
    ListItem
  },
  data() {
    return {
      list1: ["待辦", "跟蹤", "已辦"]
    };
  },
  computed: {
    approvalState: {
      get() {
        return this.$store.state.approvalState;
      },
      set(nextState) {
        this.$store.commit("setApprovalState", nextState);
      }
    }
  }
};
</script>



<template>
  <div class="Update">
    <tab v-model="approvalState">
      <tab-item v-for="(item,key) in list1" :key="key">{{item}}</tab-item>
    </tab>
    <!-- Approval ListItem -->
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
      list1: ["待办", "跟踪", "已办"]
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



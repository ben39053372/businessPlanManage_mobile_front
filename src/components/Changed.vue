<template>
  <div>
    <cell
      style="background:#FFF;"
      is-link
      :border-intent="false"
      :arrow-direction="showContent001 ? 'up' : 'down'"
      @click.native="showContent001 = !showContent001"
    >
      <span slot="title" class="title">项目变更</span>
    </cell>
    <group
      v-if="showContent001"
      gutter="0"
      style="padding-left:15px;background-color:rgb(131, 177, 238);"
    >
      <cell v-for="changelist in changedList" :key='changelist.key' :title='changelist.title' align-items="flex-start" >
        <p>
          <s>{{changelist.before}}</s>
        </p>
        <p class="correct">{{changelist.after}}</p>
      </cell>
    </group>
  </div>
</template>

<script>
import { Cell, Group } from "vux";
import { mapState } from 'vuex';
export default {
  name:"index",
  components: {
    Cell,
    Group
  },
  data() {
    return {
      showContent001: false
    };
  },
  computed: {
    ...mapState(['changedList'])
  },
};
</script>

<style lang="less" scoped>
s {
  background: rgba(255, 0, 0, 0.4);
}
p {
  margin: 10px;
  color: #000;
  font-size: 23px;
}
.correct {
  background: rgba(127, 255, 0, 0.4);
}
.title {
  font-weight: bold;
  color: rgb(21, 66, 139);
  font-size: 16px;
}
</style>
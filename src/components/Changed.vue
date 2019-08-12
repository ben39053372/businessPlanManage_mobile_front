<template>
  <div class='paper'>
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
      style="padding-left:10px;background-color:rgba(4,190,2,0.2);"
    >

      <cell v-for="changelist in changedList" :key='changelist.key'  align-items="flex-start" style='padding:5px;'>
        <p slot='title' style='word-break:keep-all;margin:0;text-align:left;font-size:18px'>{{changelist.title}}</p>
        <p style='font-size:18px;color:#999;text-align:left'>
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
      showContent001: true
    };
  },
  computed: {
    ...mapState(['changedList'])
  },
};
</script>

<style lang="less" scoped>

p {
  margin: 10px;
  color: #000;
  font-size: 23px;
}
.correct {
  font-size: 18px;
  color:#0000ff;
  text-align:left;
}
.title {
  font-weight: bold;
  color: #04BE02;
  font-size: 16px;
}
</style>
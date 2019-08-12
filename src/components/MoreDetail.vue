<template>
  <div class="paper">
    <cell
      style="background:#FFF;"
      is-link
      :border-intent="true"
      :arrow-direction="showContent001 ? 'up' : 'down'"
      @click.native="showContent001 = !showContent001"
    >
      <span slot="title" class="title">更多详情</span>
    </cell>
    <group
      v-if="showContent001"
      gutter="0"
      style="padding-left:10px;background-color:rgba(4,190,2,0.2);"
    >
      <cell v-for='(i,index) in moredetail' :title="(i.title)+':'" :border-intent="false" :key='index'>
        {{i.content}}
      </cell>

    </group>
  </div>
</template>

<script>
import { Cell, Group } from "vux";
import { mapState } from 'vuex';
export default {
  components: {
    Cell,
    Group
  },
  data() {
    return {
      showContent001: false,
    };
  },
  computed:{
    ...mapState(['moredetail'])
  },
};
</script>

<style lang="less" scoped>
.title {
  font-weight: bold;
  color: #04be02;
  font-size: 16px;
}
</style>
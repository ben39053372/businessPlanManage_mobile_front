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
      style="padding-left:15px;background-color:#04BE02;"
    >
      <cell title="申请单号：" :border-intent="false">JY-2019-001号</cell>
      <cell title="申请单位：" :border-intent="false">整车集成部</cell>
      <cell title="变更事项：" :border-intent="false" value="项目管理系统管理计画变更事宜0328"></cell>
      <cell title="变更原因：" :border-intent="false">包括背景，必要性，可行性</cell>
      <cell title="重点举措：" :border-intent="false">重点举措消息</cell>
      <cell title="年度目标：" :border-intent="false">年度目标内容</cell>
      <cell title="影响年度经营目标：" :border-intent="false">是</cell>
      <cell title="是否对集团有影响：" :border-intent="false">是</cell>
    </group>
  </div>
</template>

<script>
import { Cell, Group } from "vux";
export default {
  components: {
    Cell,
    Group
  },
  data() {
    return {
      showContent001: false
    };
  }
};
</script>

<style lang="less" scoped>
.title {
  font-weight: bold;
  color: #04be02;
  font-size: 16px;
}
</style>
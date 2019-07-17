<template>
  <div>
    <cell
      style="background:#FFF;margin-top:10px;"
      is-link
      :border-intent="true"
      :arrow-direction="showContent001 ? 'up' : 'down'"
      @click.native="showContent001 = !showContent001"
    >
      <span slot="title" class="title">更多詳情</span>
    </cell>
    <group v-if="showContent001" gutter="0" style="padding-left:15px;background-color:rgb(131, 177, 238)" >
      <cell title="申請單號：" :border-intent="false">JY-2019-001號</cell>
      <cell title="申請單位：" :border-intent="false">整車集成部</cell>
      <cell
        title="變更事項："
        :border-intent="false"
        value="項目管理系統管理計畫變更事宜0328"
      ></cell>
      <cell title="變更原因：" :border-intent="false">包括背景，必要性，可行性</cell>
      <cell title="重點舉措：" :border-intent="false">重點舉措消息</cell>
      <cell title="年度目標：" :border-intent="false">年度目標內容</cell>
      <cell title="影響年度經營目標：" :border-intent="false">是</cell>
      <cell title="是否對集團有影響：" :border-intent="false">是</cell>
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
  color: rgb(21, 66, 139);
  font-size: 16px;
}
</style>
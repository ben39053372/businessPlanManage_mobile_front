<template>
  <div>
    <x-header :left-options="{backText: ''}">进展更新</x-header>
    
    <!-- 进展消息 -->
    <group title="进展消息" gutter='0'>
      <img height="60" width="100%" src='../assets/6429eb68a3028f4bdb8218804af24457.jpg'/>
    </group>

    <!-- 流程节点 -->
    <FlowChart />

    <!-- 审批意见 -->
    <group style="margin=0">
      <group-title slot="title" style="text-align:left">审批意见</group-title>
      <x-textarea class="input" placeholder="请输入。。。" :max='30'></x-textarea>
    </group>
    
    <!-- 通過拒絕-->
    <flexbox>
      <flexbox-item>
        <x-button type="primary">通过</x-button>
      </flexbox-item>
      <flexbox-item>
        <x-button type="warn">拒绝</x-button>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, XButton, Group, GroupTitle, XTextarea, XHeader } from "vux";
import FlowChart from "../components/FlowChart";
export default {
  components: {
    Flexbox,
    FlexboxItem,
    XButton,
    Group,
    GroupTitle,
    XTextarea,
    FlowChart,
    XHeader
  },
};
</script>

<style lang="less" scoped>
p {
  text-align: left;
  padding: 0 10px;
}
h3 {
  margin: 10px;
  text-align: center;
  font-size: 15px;
}
.update-photo {
  height: 200px;
}
</style>
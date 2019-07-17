<template>
  <div>
    <x-header :left-options="{backText: ''}">進展更新</x-header>
    
    <!-- 進展消息 -->
    <group title="進展消息" gutter='0'>
      <img height="60" width="100%" src='../assets/6429eb68a3028f4bdb8218804af24457.jpg'/>
    </group>


    <!-- 流程節點 -->
    <FlowChart />

    <!-- 審批意見 -->
    <group style="margin=0">
      <group-title slot="title" style="text-align:left">審批意見</group-title>
      <x-textarea class="input" placeholder="请输入。。。" :max='30'></x-textarea>
    </group>
    <flexbox>
      <flexbox-item>
        <x-button type="primary">通過</x-button>
      </flexbox-item>
      <flexbox-item>
        <x-button type="warn">拒絕</x-button>
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
  data() {
    return {
      mouth: 3
    };
  }
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
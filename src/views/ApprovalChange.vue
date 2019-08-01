<template>
  <div>
    <x-header :left-options="{backText: ''}">项目管理系统计画变更</x-header>
    <!-- 流程节点 -->
    <FlowChart />

    <!-- 变更内容 -->
    <Changed/>

    <!-- 更多详情 -->
    <MoreDetail/>

    <!-- 审批意见 -->
    <div slot='bottom'>
      <group style="margin=0">
        <group-title slot="title">审批意见</group-title>
        <x-textarea class="input" placeholder="请输入。。。" :max='30'></x-textarea>
      </group>
      <flexbox>
        <flexbox-item>
          <x-button type="primary">通过</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="warn">拒绝</x-button>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, XButton, Group, GroupTitle, XTextarea, XHeader } from "vux";
import FlowChart from "../components/FlowChart";
import MoreDetail from "../components/MoreDetail";
import Changed from '../components/Changed'
export default {
  components: {
    Flexbox,
    FlexboxItem,
    XButton,
    Group,
    GroupTitle,
    XTextarea,
    FlowChart,
    MoreDetail,
    XHeader,
    Changed
  },
  methods: {
    showDetail() {
      if (this.moreDetail == true) {
        this.moreDetail = false;
      } else {
        this.moreDetail = true;
      }
    }
  },
  data() {
    return {
      mouth: 3,
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
}
.update-photo {
  height: 200px;
}
</style>
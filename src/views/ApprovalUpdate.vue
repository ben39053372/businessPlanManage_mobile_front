<template>
  <div>
    <x-header :left-options="{backText: ''}">进展更新</x-header>

    <!-- 进展消息 -->
    <div class="paper">
      <card>
        <h4 slot="header">进展消息</h4>
        <img
          slot="content"
          height="60"
          width="100%"
          src="../assets/6429eb68a3028f4bdb8218804af24457.jpg"
        />
      </card>
    </div>

    <!-- 流程节点 -->
    <FlowChart />

    <!-- 审批意见 -->
    <div class="paper">
      <card>
        <h4 slot="header">审批意见</h4>
        <div slot="content">
          <x-textarea class="input" placeholder="请输入。。。" :max="30"></x-textarea>
          <flexbox>
            <flexbox-item>
              <x-button type="primary">通过</x-button>
            </flexbox-item>
            <flexbox-item>
              <x-button type="warn">拒绝</x-button>
            </flexbox-item>
          </flexbox>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import {
  Card,
  Flexbox,
  FlexboxItem,
  XButton,
  Group,
  GroupTitle,
  XTextarea,
  XHeader
} from "vux";
import FlowChart from "../components/FlowChart";
export default {
  components: {
    Flexbox,
    Card,
    FlexboxItem,
    XButton,
    Group,
    GroupTitle,
    XTextarea,
    FlowChart,
    XHeader
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
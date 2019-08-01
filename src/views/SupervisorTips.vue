<template>
  <div>
    <h3>督办事项提示</h3>
    <ul>
      <li>督辨事项</li>
      <li>问题来源： 院督办公会</li>
      <li>交办时间： 2019/4/25</li>
      <li>问题描</li>
      <li>会议指示：</li>
      <li>责任单位： </li>
      <li>责任人</li>
      <li>最新进展： </li>
      <li>预计完成时间： </li>
    </ul>
    <group title="指示意见">
      <x-textarea class="textarea" name="description" placeholder></x-textarea>
    </group>
    <flexbox>
      <flexbox-item>
        <x-button type="primary">通过</x-button>
      </flexbox-item>
      <flexbox-item>
        <x-button type="primary" disabled>拒绝</x-button>
      </flexbox-item>
      <flexbox-item>
        <x-button type="primary" link='/historyMessage'>历史意见</x-button>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Group, XTextarea, Flexbox, FlexboxItem, XButton } from "vux";
export default {
  components: {
    Group,
    XTextarea,
    Flexbox,
    FlexboxItem,
    XButton
  }
};
</script>

<style lang="less" scoped>
h3 {
  text-align: center;
}
ul {
  padding-left: 15px;
}
li {
  margin: 10px;
  list-style-type: none;
}
</style>
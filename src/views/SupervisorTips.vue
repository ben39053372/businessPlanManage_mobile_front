<template>
  <div>
    <h3>督辦事項提示</h3>
    <ul>
      <li>督辨事項</li>
      <li>問題來源： 院督辦公會</li>
      <li>交辦時間： 2019/4/25</li>
      <li>問題描</li>
      <li>會議指示：</li>
      <li>責任單位： </li>
      <li>責任人</li>
      <li>最新進展： </li>
      <li>預計完成時間： </li>
    </ul>
    <group title="指示意見">
      <x-textarea class="textarea" name="description" placeholder></x-textarea>
    </group>
    <flexbox>
      <flexbox-item>
        <x-button type="primary">通過</x-button>
      </flexbox-item>
      <flexbox-item>
        <x-button type="primary" disabled>拒絕</x-button>
      </flexbox-item>
      <flexbox-item>
        <x-button type="primary" link='/historyMessage'>歷史意見</x-button>
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
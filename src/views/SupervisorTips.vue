<template>
  <div>
    <h3>督办事项提示</h3>
    <div class="paper">
      <ul v-for="(item,index) in supervisorTips" :key="index">
        <li>{{item.title}}: {{item.content}}</li>
      </ul>
    </div>

    <div class='paper'>
      <card>
        <h4 slot="header">指示意见</h4>
        <x-textarea class="textarea" name="description" placeholder="請輸入..." slot="content"></x-textarea>
        <flexbox slot="content">
          <flexbox-item>
            <x-button type="primary">通过</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button type="primary" disabled>拒绝</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button type="primary" link="/historyMessage">历史意见</x-button>
          </flexbox-item>
        </flexbox>
      </card>
    </div>
  </div>
</template>

<script>
import { Card, Group, XTextarea, Flexbox, FlexboxItem, XButton } from "vux";
import { mapState } from "vuex";
export default {
  components: {
    Card,
    Group,
    XTextarea,
    Flexbox,
    FlexboxItem,
    XButton
  },
  computed: {
    ...mapState(["supervisorTips"])
  }
};
</script>

<style lang="less" scoped>
h3 {
  text-align: center;
}
ul {
  margin:0;
  padding-left: 15px;
  background: #FFF;
}
.paper {
  background: #eeeeee;
  padding:10px;
}
li {
  padding: 10px;
  list-style-type: none;
}
</style>
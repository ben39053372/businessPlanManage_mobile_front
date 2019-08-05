<template>
  <div id="app" style="height:95%;">
    <view-box>
      <router-view />
    </view-box>
    <tabbar v-model='index'>
      <tabbar-item link="/approval">
        <img slot="icon" src='../src/assets/icon/piechart.png' />
        <span slot="label">审批待办</span>
      </tabbar-item>
      <tabbar-item selected link="/">
        <img slot="icon" src="../src/assets/icon/user.png" />
        <span slot="label">经营概况</span>
      </tabbar-item>
      <tabbar-item link="/supervisor">
        <img slot="icon" src="../src/assets/icon/file-exception.png" />
        <span slot="label">督办事项</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem, GroupTitle, XHeader, ViewBox } from "vux";
export default {
  components: {
    Tabbar,
    TabbarItem,
    GroupTitle,
    ViewBox,
  },
  data(){
    return {
      index: 0
    }
  }
};
</script>

<style>
h4 {
  margin: 10px;
  color: #04BE02;
}
.paper {
  background: #eeeeee;
  padding:8px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  margin: 0;
  background: #efefef;
}
</style>

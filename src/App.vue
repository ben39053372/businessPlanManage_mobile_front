<template>
  <div id="app" style="height:95%;">
    <view-box>
      <router-view />
    </view-box>
    <tabbar v-model='index'>
      <tabbar-item link="/approval_todo">
        <img slot="icon" src="../src/assets/demo/icon_nav_button.png" />
        <span slot="label">審批待辦</span>
      </tabbar-item>
      <tabbar-item selected link="/">
        <img slot="icon" src="../src/assets/demo/icon_nav_msg.png" />
        <span slot="label">經營概況</span>
      </tabbar-item>
      <tabbar-item link="/supervisor_item">
        <img slot="icon" src="../src/assets/demo/icon_nav_article.png" />
        <span slot="label">督辦事項</span>
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
    ViewBox
  },
  data(){
    return {
      index: 0
    }
  }
};
</script>

<style>
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

<template>
  <div>
    <group gutter="0">
      <img
        width="60"
        class="img"
        src="../assets/logo.png"
      />
      <span align-items="flex-start">name</span>
      <span style="float:right">2018/04/10</span>
      <br><span>加快臨時交辦</span>
    </group>
  </div>
</template>

<script>
import { Group, Cell, CellBox } from "vux";
export default {
  components: {
    Group,
    Cell,
    CellBox
  }
};
</script>

<style lang="less" scoped>
.title {
  margin: 0;
}
.card-padding {
  padding: 15px;
}
.img {

  margin-right: 5px;
  float: left;
}

span {

  margin:5px;
  padding:10px
}
</style>
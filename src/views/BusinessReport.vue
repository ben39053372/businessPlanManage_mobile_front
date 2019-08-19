<template>
  <div class="paper">
    <card>
      <cell slot="content">
        <p slot="title">標題</p>
        <p>內容</p>
      </cell>
    </card>
  </div>
</template>

<script>
import { Card, Cell } from "vux";
export default {
  components: {
    Card,
    Cell
  }
};
</script>

<style scoped>
</style>
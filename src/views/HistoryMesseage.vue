<template>
  <group gutter="0" style="height:100%">
    <div class="paper">
      <card>
        <cell slot="content" :key="msg.id" v-for="msg in messageList" style='padding:16px'>
          <div slot="title"><p style='font-size:18px'>{{msg.auditPerson}}</p><p style='font-size:15px;'>{{msg.auditOperation}}</p></div>
          <p style="font-size:16px;word-break:break-all;">{{msg.auditTime}}</p>
          <p slot="inline-desc" style="width:150px">{{msg.auditMsg}}</p>
        </cell>
      </card>
    </div>
  </group>
</template>

<script>
import { Card, Group, Cell, CellBox } from "vux";
import { mapState } from "vuex";
import axios from "axios";
export default {
  components: {
    Group,
    Cell,
    CellBox,
    Card
  },
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      messageList: []
    };
  },
  methods: {
    fetchData() {
      this.$vux.loading.show({
        text: "Loading"
      });
      axios
        .get(this.baseurl + "/app/superviseManageApp/findSuperviseIndicate")
        .then(res => {
          var json = res.data.data;
          for (var i = 0; i < json.length; i++) {
            this.messageList = this.messageList.concat(json[i]);
          }
          //console.log("messageList:", this.messageList);
          this.$vux.loading.hide()
        });
    }
  },
  computed: {
    ...mapState(["baseurl"])
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
  margin: 5px;
  padding: 10px;
  width: 50px;
}
</style>
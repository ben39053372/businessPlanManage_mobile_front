<template>
  <div>
    <h3>督办事项提示</h3>
    <div class="paper">
      <ul>
        <li v-for="(item,index) in data" :key="index">
          <span style="color:#777">{{item.title}}</span>
          :
          <span style="font-size:18px">{{item.content}}</span>
        </li>
      </ul>
    </div>

    <div class="paper">
      <card>
        <h4 slot="header">指示意见</h4>
        <x-textarea
          class="textarea"
          name="description"
          placeholder="請輸入..."
          slot="content"
          v-model="msg"
        ></x-textarea>
        <flexbox slot="content">
          <flexbox-item>
            <x-button type="primary" @click.native="sendData">通过</x-button>
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
import axios from "axios";
const data = [];
export default {
  components: {
    Card,
    Group,
    XTextarea,
    Flexbox,
    FlexboxItem,
    XButton
  },
  data() {
    return {
      data,
      msg: "",
      dutyPerson: "",
      windowPerson: "",
      problemNo: ""
    };
  },
  mounted() {
    this.getDataById();
  },
  computed: {
    ...mapState(["baseurl"])
  },
  methods: {
    sendData() {
      console.log("sendData");
      this.$vux.loading.show({
        text: "Loading"
      });
      axios
        .post(
          this.baseurl +
            "/superviseManageApp/saveIndicateMsg?id=" +
            this.$route.params.id,
          {
            dutyPerson: this.dutyPerson,
            windowPerson: this.windowPerson,
            problemNo: this.problemNo,
            auditMsg: this.msg
          }
        )
        .then(res => {
          console.log(res)
          this.$vux.loading.hide()
        })
        .catch(err => console.log(err));
      this.$vux.alert.show({
        title: this.msg,
        content: "成功發送!"
      });
    },
    getDataById() {
      this.$vux.loading.show({
        text: "Loading"
      });
      axios
        .get(this.baseurl + "/app/superviseManageApp", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(res => {
          console.log(res.data.data);
          var json = res.data.data;
          var dutyPerson = "";
          for (var i = 0; i < json.dutyPerson.length; i++) {
            dutyPerson += json.dutyPerson[i].label + json.dutyPerson[i].value;
            if (i == json.dutyPerson.length - 1) {
              dutyPerson += "/";
            }
          }
          var windowPerson = "";
          for (var i = 0; i < json.windowPerson.length; i++) {
            dutyPerson +=
              json.windowPerson[i].label + json.windowPerson[i].value;
            if (i == json.windowPerson.length - 1 && i != 0) {
              windowPerson += "/";
            }
          }
          console.log("dutyPerson", dutyPerson);
          this.data = [
            { title: "问题来源", content: json.problemSource },
            { title: "交办时间", content: json.assignTime },
            { title: "问题/任务描述", content: json.problemDsc },
            { title: "会议指示", content: json.meetingIndicate },
            { title: "责任单位", content: json.dutyDept },
            { title: "责任人", content: dutyPerson },
            { title: "窗口人", content: windowPerson },
            { title: "推进计划", content: json.newAdvancePlan },
            { title: "最近工作进展", content: json.newWorkProgress }
          ];
          this.dutyPerson = json.dutyPerson;
          this.windowPerson = json.windowPerson;
          this.problemNo = json.problemNo;
          console.log("data:", this.data);
          this.$vux.loading.hide();
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="less" scoped>
h3 {
  text-align: center;
}
ul {
  margin: 0;
  padding-left: 15px;
  padding: 20px;
  background: #fff;
}
.paper {
  background: #eeeeee;
  padding: 10px;
}
li {
  padding: 10px;
  list-style-type: none;
}
</style>
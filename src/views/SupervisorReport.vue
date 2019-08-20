<template>
  <div class="paper">
    <card>
      <cell slot="content" v-for='(item) in data' :key='item.id'>
        <p slot="title" style='font-size:20px'>{{item.fileName}}</p>
        <p>上傳人: {{item.uploadAuthor}}</p>
        <p>檔案大小: {{item.fileSize}}</p>
        <p>上傳時間: {{item.uploadDate}}</p>
        
      </cell>
    </card>
  </div>
</template>

<script>
import { Card, Cell } from "vux";
import axios from 'axios'
const thisyear = new Date().getFullYear()
export default {
  components: {
    Card,
    Cell
  },
  data(){
    return{
      data:[]
    }
  },
  mounted(){
    this.fetchData()
  },
  methods:{
    fetchData(){
      console.log('111')
      axios.post('http://172.30.210.229:8080/api/app/portal/getBusinessMonthReports',{
        "year":thisyear,
        "type":1
      })
        .then(res=>{
          var json = res.data.data
          console.log(json)
          this.data = json
        });
    }
  }
};
</script>

<style scoped>
</style>
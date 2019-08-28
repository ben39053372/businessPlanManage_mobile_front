# manufact_v2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### web structure
App
 |-Home : 门户
    |--VChart
      |--DeptVchart : 部门完成率
      |--MonthVChart : 当月统计
      |--TotalVchart : 累积统计
    |--BusinessReport : 经营月报
    |--supervisorReport : 督办月报
 |-supervisor : 督办事项
    |--supervisorTips : 督办事项提示
      |--HistoryMessage : 历史意见
 |-Approval : 审批待办
    |--(listItem)
      |--ApprovalUpdate : 进展更新
        |--(flowChart) : 流程节点
      |--ApprovalChange : 计划变更
        |--(changed) : 项目变更
        |--(moreDetail) : 更多详情
        |--(flowCahrt) : 流程节点






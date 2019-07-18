<template>
  <div>
      <h2>表单三个组件</h2>
      <h3>开关组件</h3>
      <mt-switch v-model="val1">开关</mt-switch>
      <button @click="handleSwitch">读取值</button>
      <h3>单选框</h3>
      <mt-radio
       title="单选框列表"
       v-model="val2"
       :options="['选项a','选项b','选项c']">
      </mt-radio>
      <button @click="handleRadio">选中了一个</button>
      <h3>复选框列表</h3>
      <mt-checklist
       title="复选框列表"
       v-model="val3"
       :options="['选项A','选项B','选项C']">
      </mt-checklist>
      <button @click="handleCheck">读取</button>
  </div>
</template>
<script>
export default {
   data(){
     return {
       val1:false,
       val2:"",
       val3:[],
     }
   },
   methods: {
     handleCheck(){
       console.log(this.val3);
     },
     handleRadio(){
       console.log(this.val2);
     },
     handleSwitch(){
       console.log("输出开关值:"+this.val1);
     }
   },
}
</script>


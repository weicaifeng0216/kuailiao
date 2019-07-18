<template>
  <div clss="messagebox02">
  <h1>交互式提示框</h1>
  <button @click="openAlert">警告确认</button>
  <button @click="openConfirm">提示确认</button>
  <button @click="openPrompt">输入确认</button>
  </div>
</template>
<script>
export default {
  data(){
    return {}
  },
  methods: {
    openAlert(){
      //交互提示消息
      this.$messagebox({
        title:"消息",        //标题
        message:"执行操作成功"//内容
      });
    },
    openConfirm(){
      //确认提示框:确认 取消
      this.$messagebox({
        title:"消息",
        message:"是否删除指定数据",
        showConfirmButton:true,
        showCancelButton:true
      }).then(action=>{
        console.log(action);
      });
      //then回调函数
    },
    openPrompt(){
       this.$messagebox({
         title:"消息",
         message:"输入数据",
         showConfirmButton:true,
         showInput:true,//显示输入框
         inputValue:"",//默认value
         inputType:"text",//文本
         inputPlaceholder:"请输入年龄"
       }).then(action=>{
          console.log(action);
       });
    }
  },
}
</script>
<style>

</style>


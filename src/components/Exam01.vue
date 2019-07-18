<template>
  <div class="exam01">
    <h1>mint-ui组件库第一个组件 </h1>
    <h1>简短提示消息Toast</h1>
    <button @click="openToast">显示提示消息</button>
  </div>  
</template>
<script>
export default {
  data(){
    return {}
  },
  methods: {
    //点击按钮显示提示消息 42
    openToast(){
      //console.log(123); 33
      this.$toast({
        message:"操作成功",
        position:"middle",
        className:"mytip",
        duration:1500,
        iconClass:"iconfont icon-shenfenzheng"
      });
    }
  },
}
</script>
<style>
  .mytip{
    background:#fff !important;
    color:red !important;
    font-size:19px !important;
  }
</style>



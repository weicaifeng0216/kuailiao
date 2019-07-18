<template>
  <div>
    <h3>ExamContainer.vue</h3>
    <h4>完成按钮点击事件</h4>
    <div class="nav">
     <mt-button @click.prevent="active='tab1'">面板一</mt-button>
     <mt-button @click.prevent="active='tab2'">面板二</mt-button>
     <mt-button @click.prevent="active='tab3'">面板三</mt-button>
    </div>
    <hr>
    <div class="nav">
     <mt-button v-for="(item,index) in list" @click="setActive(index)"
     :class="[idx == index?'active':'']" :key="index">{{item}}</mt-button>
    </div>
 
    <div class="page-tab-container">
      <!--父面板-->
     <mt-tab-container class="page-tabbar-tab-container" v-model="active">
       <!--子面板-->
      <mt-tab-container-item id="tab1">
        <mt-cell v-for="n in 10" title="tab-containter 1" ></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
        <mt-cell v-for="n in 5" title="tab-containter 2" ></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab3">
      <mt-cell v-for="n in 6" title="tab-containter 3" ></mt-cell>
      </mt-tab-container-item>      

    </mt-tab-container>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      active:"tab1",
      list:["美食","购物","休闲"],
      idx:-1, //当前选中下标
              //-1初始值,不出现
    }
  },
  methods: {
    setActive(index){
      //保存点击当前元素下标
      this.idx = index;
      var n = ++index;
      this.active = "tab"+n
    }
  },
}
</script>
<style scoped>
 .active{
   background-color:blue ;
 }
</style>


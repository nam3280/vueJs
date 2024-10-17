<script>
  export default{
    data(){
      return{
        number : 0,
      };
    },
    methods: {
      incresement(){
        this.number++;
      },
      onkeyupHandler1(){
          console.log("enter누름1");
      },
    },
  }
</script>
<template>
  <input type="text" @keyup="($event) => onkeyupHandler($event)">
  <input type="text" @keyup.enter="onkeyupHandler1">
  <!-- 뷰의 반응성 시스템(동적) -->
  <!-- number가 증가할 때 number 부분만 렌더링이 되어 화면이 깜빡거리지 않는다. -->
  <h1 v-once>{{ number }}</h1>
  <button type="button" @click="incresement">증가</button>
</template>
<style>
</style>
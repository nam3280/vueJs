<script>
  export default{
    data(){
      return{
        fruits: ['banana', 'apple', 'orange'], //체크 true, 미체크 : false
        gender: ['male', 'female'],
      };
    },
    methods: {
      printData(){
        console.log(`과일 : ${this.fruits}`);
        console.log(`성별 : ${this.gender}`);
      },
    },
  }
</script>
<template>
  <form id="loginForm1">
    <input type="checkbox" id="fruits" v-model="fruits" value="banana">바나나
    <input type="checkbox" id="fruits" v-model="fruits" value="apple">사과
    <input type="checkbox" id="fruits" v-model="fruits" value="orange">오렌지
    <input type="radio" id="gender" v-model="gender" value="male">남자
    <input type="radio" id="gender" v-model="gender" value="female">여자
    <button type="button" @click="printData">선택</button>
  </form>
</template>
<style>
</style>
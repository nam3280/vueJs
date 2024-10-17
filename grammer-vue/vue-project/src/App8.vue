<script>
  export default{
    data(){
      return{
        coffee: ['아메리카노', '카페라떼', '바닐라라떼'],
      };
    },
    methods: {
      printData(){
        console.log(`커피 : ${this.coffee}`);
      },
    },
  }
</script>
<template>
  <form>
    <select v-model="coffee">
      <option value="아메리카노">아메리카노</option>
      <option value="카페라떼">카페라떼</option>
      <option value="바닐라라떼">바닐라라떼</option>
    </select>
    <button type="button" @click="printData">선택</button>
  </form>
</template>
<style>
</style>
<script>
  export default{
    data(){
      return{
        uid : '',
        upwd : '',
        message : '',
      };
    },
    methods: {
      login(){
        console.log(`id:${this.uid}`);
        console.log(`pwd:${this.upwd}`);
      },
      printData(){
      console.log(`message:${this.message}`);
      },
    },
  }
</script>
<template>
  <form id="loginForm1">
    <label for="uid">ID : <input type="text" id="uid" v-model="uid"/></label>
    <label for="upwd">PWD : <input type="password" id="upwd" v-model="upwd"/></label>
    <textarea v-model="message"></textarea>
    <button type="button" @click="printData">print</button>
  </form>
</template>
<style>
</style>
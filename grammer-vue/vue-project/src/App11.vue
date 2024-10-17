<script>
  export default{
    data(){
      return{
        lastName : 'Nam',
        firstName : 'Yunho',
      };
    },
    computed: {
      fullName(){
        console.log('cmputed fullName');
        return `${this.lastName} ${this.firstName}`;
      }
    },
  }
</script>
<template>
  <h1>{{ fullName }}</h1>
</template>
<style>
</style>
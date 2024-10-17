<script>
  export default{
    data(){
      return{
        inputStr:'',
      };
    },
    watch:{
      inputStr(newValue, oldValue){
        console.log(`oldValue = ${oldValue}`);
        console.log(`newValue = ${newValue}`);
      }
    }
  }
</script>
<template>
  <input type="text" v-model="inputStr" />
</template>
<style>
</style>
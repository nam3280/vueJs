<script>
  export default{
    methods: {
      onkeyupHandler(event){
        if(event.keyCode == 13){
          alert("enter누름");
        }
      },
      onkeyupHandler1(){
          console.log("enter누름1");
      },
      clear(){
          console.log("alt enter누름");
      },
    },
  }
</script>
<template>
  <input type="text" @keyup="($event) => onkeyupHandler($event)">
  <input type="text" @keyup.enter="onkeyupHandler1">
  <input type="text" @keyup.alt.enter="clear">
</template>
<style>
</style>
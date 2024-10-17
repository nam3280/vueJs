<script>
  export default{
    data(){
      return{
        message:[],
      };
    },
    methods: {
      onChangeHandler(event){
        this.message = event.target.value;
        console.log(this.message);
      },

      onSubmitHandler(e){
        e.preventDefault(); //별도의 폼 전송 처리
        console.log('Onsubmit Handler!');
      },
    },
  }
</script>
<template>
    <!-- @ == v-on -->
     <form @submit="onSubmitHandler">
      <button type="submit">submit</button>
     </form>

    <input type="text" @input="onChangeHandler($event)"/>
</template>
<style>
</style>
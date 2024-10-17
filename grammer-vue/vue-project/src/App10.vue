<script>
  export default{
    data(){
      return{
        message:"",
      };
    },
    methods: {
      onChangeHandler(event){
        this.message = `${event.target.value}`;
        
        console.log(this.message);
      },

      onSubmitHandler(e){
        e.preventDefault(); //별도의 폼 전송 처리
        console.log('keyup');
      },
    },
  }
</script>
<template>
    <!-- @ == v-on -->
    <select @change="onChangeHandler($event)">
      <option value="0">선택하세요</option>
      <option value="1000">바나나</option>
      <option value="500">딸기</option>
      <option value="300">오렌지</option>
    </select>
    <h5>개당 {{message}}원</h5>

    <input type="text" @keyup="onSubmitHandler">
</template>
<style>
</style>
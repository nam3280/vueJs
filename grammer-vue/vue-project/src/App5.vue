<script>
  export default{
    data(){
      return{
        name : '신세계',
        gender : 'male',
        age : 20,
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
  <!-- v-memo 배열에 담긴 객체들만 값이 변경된다. -->
  <div v-memo="[name, gender, age]">
    <p>이름 : {{ name }}</p>
    <p>성별 : {{ gender }}</p>
    <p>나이 : {{ age }}</p>
  </div>
  <button type="button" @click="name = '수정'">이름 변경</button>
  <button type="button" @click="gender = 'female'">성별 변경</button>
  <button type="button" @click="age = 22">나이 변경</button>
</template>
<style>
</style>
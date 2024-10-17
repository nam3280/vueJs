<script>
  export default{
    //vue 옵션 형태
    data : function(){
      return {
        user:{
          name : 'ssg',
          company : 'ssg.com',
          gender : 'male',
          age : 30,
        },
      };
    },

    // js형태
    // data() {
    //   return {};
    // }
  }
</script>
<template>
  <!-- {{}} : mustach syntax -->
  <!-- <p>내 이름은 {{ name }}이다.</p>
  <p>나이는 {{ age }}살 입니다.</p> -->

  <!-- <div v-pre>{{ message }}</div>  -->

  <h1 v-show="condition">user 객체 출력</h1>
  <ul>
    <li v-for="(value, key, index) in user" :key="index">
        인덱스 : {{ index + 1 }}, 키 : {{ key }}, 값 : {{ value }}
    </li>
  </ul>
</template>
<style>
  .blue-color{
    color : blue;
  }
</style>
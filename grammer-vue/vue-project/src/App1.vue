<script>
  export default{
    //vue 옵션 형태
    data : function(){
      return {
        //name, age => 변수, 데이터, 데이터 속성
        // name : 'ssg',
        // age : 20,

        // className : 'blue-color',

        // visible : true,
        // unvisible : false,

        fruits : ['apple','banana','pear','orange'],
        condition : true,
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

  <h1 v-show="condition">fruits 데이터의 반복 결과 출력</h1>
  <ul>
    <li v-for="(fruit, index) in fruits" :key="index">
        인덱스 : {{ index }}, 값 : {{ fruit }}
    </li>
  </ul>
</template>
<style>
  .blue-color{
    color : blue;
  }
</style>
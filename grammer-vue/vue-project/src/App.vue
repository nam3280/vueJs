<script>
  export default{
    data(){
      return{
        array:[0,1,2],
        obj:{name:'yunho'},
      };
    },
    watch:{
      arr:{
        handler(newValue, oldValue){
          console.log(`oldValue : ${oldValue}`);
          console.log(`newValue : ${newValue}`);
        },
        deep : true,
      },
      obj : {
        handler(newValue, oldValue){
          console.log(`oldValue : ${JSON.stringify(oldValue)}`);
          console.log(`newValue : ${JSON.stringify(newValue)}`);
        },
        deep:true,
      },
    }
  }
</script>
<template>
  <!-- <h1 style="color:green; font-style:italic">{{ array }}</h1> -->
  <h1>{{ array }}</h1>
  <h1>{{ obj }}</h1>
  <h2>{{ array }}</h2>
  <h2>{{ obj }}</h2>
  <button type="button" @click="array.push(3)">배열값 추가</button>
  <button type="button" @click="obj.company = 'ssg.com'">객체 속성 추가</button>
</template>
<style scoped>
  /* css 경로 */
  @import './assets/main.css';

  h1{
    color : red;
    font-style : italic;
  }
</style>
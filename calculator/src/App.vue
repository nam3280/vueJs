<script>
  export default{
    data(){
      return {
        output: null, //화면에 표시되어 사용자에게 보여지는 값
        prev: null, //이전에 입력된 값
        cur: null,  //현재 입력된 값
        operator: null, //연산자
        operationActions:{  //사칙연산을 수행하는 함수를 각각 객체로 정의한다.
          '+':(n1, n2) => n1 + n2,
          '-':(n1, n2) => n1 - n2,
          '*':(n1, n2) => n1 * n2,
          '/':(n1, n2) => n1 / n2,
        }
      }  
    },
    methods :{
      clear(){  //초기화 로직
        this.output = null;
        this.prev = null;
        this.cur = null;
        this.operator = null;
      },

      calculate(number){ //연산 흐름 제어
        if(!this.cur && !this.prev){
          alert('숫자를 먼저 입력하세요. ');
          return;
        }

        if(this.operator !== '' && !this.cur){
          alert('사칙연산 기호를 연달아 누를 수 없습니다.');
          return;
        }

        if(number === '=' && this.prev === this.cur)
          return;

        this.cur = Number(this.cur);

        if(this.operator != null){
          //operationActions로 switch 리팩토링 -> 객체의 각 속성은 함수를 값으로 가지는 메서드
          this.prev = this.operationActions[this.operator](this.prev, this.cur);

          //등호면 결과 연산 렌더링
          if(number === '='){
            this.output = this.prev;
            this.operator = null;
            this.cur = this.prev;
          } 
          else {
            this.output = null;
            this.operator = number;
            this.cur = null;
          }
        }
        else {
          this.output = null;
          this.operator = number;
          this.prev = this.cur;
          this.cur = null;
        }
      },
      
      userInput(number){
        //사용자가 입력한 숫자(실제로는 문자열) 저장
        this.cur = this.cur === null? number:(this.cur+=number);
        
        //입력한 값이 출력칸(output) 표시되도록 output 데이터에 저장
        this.output = this.cur;
      },
      
      operation(e){
        const number = e.currentTarget.value;

        if(number === 'C')
          this.clear();
        else if(['+','-','*','/','='].includes(number))
          this.calculate(number);
        else
          this.userInput(number);
      },
    },
  }
</script>

<template>
  <div class="calculator">
    <form name="forms">
      <input v-model="output" type="text" name="output" readonly />
      <input type="button" class="clear" value="C" @click="operation" />
      <input type="button" class="operator" value="/" @click="operation"/>
      <input type="button" value="1" @click="operation"/>
      <input type="button" value="2" @click="operation"/>
      <input type="button" value="3" @click="operation"/>
      <input type="button" class="operator" value="*" @click="operation"/>
      <input type="button" value="4" @click="operation"/>
      <input type="button" value="5" @click="operation"/>
      <input type="button" value="6" @click="operation"/>
      <input type="button" class="operator" value="+" @click="operation"/>
      <input type="button" value="7" @click="operation"/>
      <input type="button" value="8" @click="operation"/>
      <input type="button" value="9" @click="operation"/>
      <input type="button" class="operator" value="-" @click="operation"/>
      <input type="button" class="dot" value="." @click="operation"/>
      <input type="button" value="0" @click="operation"/>
      <input type="button" class="operator result" value="=" @click="operation"/>
    </form>
  </div>
</template>
<style scoped>
    @import './assets/style.css';
</style>

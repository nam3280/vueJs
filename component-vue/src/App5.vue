<script>
    import FirstChild from './components/FirstChild.vue';
    //provide 속성의 키를 Symbol값으로 사용하여 데이터 주입
    import {message, reversedMessage} from '@/keys.js';

    export default{
        components:{
            FirstChild,
        },
        provide(){
            return {
                [message] : this.message,
                [reversedMessage] : this.reversedMessage,
            }
        },
        data(){
            return{
                message:'abc',
            };
        },

        computed : {
            reversedMessage(){
                return this.message.split('').reverse().join('');
            },
        },
    }
</script>

<template>
    <!-- <h1 ref="dom1">h1태그이다.</h1> :age : 컴포넌트 사용자 정의 속성을 v-bind(:) -->
    <FirstChild/>
</template>

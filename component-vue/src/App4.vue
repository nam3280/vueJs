<script>
    import UserProfile from './components/UserProfile.vue';
    export default{
        components:{
            UserProfile,
        },
        methods:{
            printHello(name, age){
                alert(`${name}, ${age}`);
            }
        },
    }
</script>

<template>
    <!-- <h1 ref="dom1">h1태그이다.</h1> :age : 컴포넌트 사용자 정의 속성을 v-bind(:) -->
    <UserProfile @print-hello="(name,age)=>printHello(name,age)"/>
</template>

<script>
import FirstChild from './components/FirstChild.vue';

    export default{
        components:{
            FirstChild,
        },
        beforeCreate(){
            console.log('beforeCreate');
        },
        created(){
            setTimeout(()=>{
                this.visible = false;   //컴포넌트가 생성된 후 3초뒤에 visible 데이터 값을 false로 바꾼다.
            },3000)
        },
        beforeMount(){
            console.log('beforeMount');
        },
        mounted(){
            console.log('mounted');
        },
        beforeUpdate(){
            console.log('beforeUpdate');
        },
        beforeUnmount(){
            console.log('beforeUnmount');
        },
        updated(){
            console.log('updated');
        },
        unmounted(){
            console.log('unmounted');
        },

    }
</script>

<template>
    <FirstChild v-if="visible"/>
</template>

<style>

</style>

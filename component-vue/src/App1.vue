<script>
import FirstChild from './components/FirstChild.vue';
import LocalChild from './components/LocalChild.vue';
import SecondChild from './components/SecondChild.vue';
import ThirdChild from './components/ThirdChild.vue';

//Local component 등록
export default {
    components:{
        LocalChild,
    },
}
</script>

<template>
    <FirstChild/>
    <SecondChild/>
    <ThirdChild/>
    <LocalChild/>
</template>

<style>
    h1{
        color : red;
    }

    p{
        color : red;
    }
</style>

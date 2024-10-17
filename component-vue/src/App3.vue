<script>
import FirstChild from './components/FirstChild.vue';
    export default{
        components:{
            FirstChild,
        },
        mounted(){
            // const dom1 = this.$refs.dom1;
            // const text = dom1.innerText;
            // console.log(text);

            const childNum = this.$refs.child.number;
            const childDoubleNum = this.$refs.child.doubleNum;
            console.log('메서드 호출 전' + childNum);
            console.log('메서드 호출 전' + childDoubleNum);
            setTimeout(() => {
                this.$refs.child.increment();
                console.log('메서드 호출 전' + childNum);
                console.log('메서드 호출 전' + childDoubleNum);
            },1000);
        },
    }
</script>

<template>
    <!-- <h1 ref="dom1">h1태그이다.</h1> -->
     <FirstChild ref="child"/>
</template>

<style>

</style>

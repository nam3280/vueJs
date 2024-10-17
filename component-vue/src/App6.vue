<script>
    import RefChild from './components/RefChild.vue';
    export default{
        components:{
            RefChild,
        },
        computed :{
            numOddEven(){
                return this.parentNum % 2 === 0 ? '짝수' : '홀수';
            },
        },
        methods:{
            getParentNum(){
                return this.parentNum;
            },
        },
        mounted(){
            console.log(this.$refs.childRef.childNum);
            console.log(this.$refs.childRef.childNumOddAdd);
            console.log(this.$refs.childRef.getChildNum());
        },
        data(){
            return{
                parentNum : 10,
            };
        },
    }
</script>

<template>
    <!-- <h1 ref="dom1">h1태그이다.</h1> :age : 컴포넌트 사용자 정의 속성을 v-bind(:) -->
    <RefChild ref="childRef"/>
</template>

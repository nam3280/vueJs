<script>
    
    import CustomButton from './components/CustomButton.vue';
    import DefaultLayout from './components/DefaultLayout.vue';
    import DynamicLayout from './components/DynamicLayout.vue';
    export default{
        components : {
            CustomButton,
            DefaultLayout,
            DynamicLayout,
        },
        data(){
            return{
                dynamicName : 'header',
                dynamicName1 : 'main',
                dynamicName2 : 'footer',
            };
        },
    }
</script>
<template>
    <CustomButton>로그인</CustomButton>
    <DefaultLayout>
        <template v-slot:header>
            <header>
                <h1>Header</h1>
            </header>
        </template>
        <template v-slot:main>
            <main>
                <h1>Main</h1>
            </main>
        </template>
        <template v-slot:footer>
            <footer>
                <h1>Footer</h1>
            </footer>
        </template>
    </DefaultLayout>
    <DynamicLayout>
        <template #[dynamicName]>
            <h2>동적 슬롯 연습</h2>
        </template>
        <template #[dynamicName1]>
            <h2>동적 슬롯 연습22</h2>
        </template>
        <template #[dynamicName2]>
            <h2>동적 슬롯 연습33</h2>
        </template>
    </DynamicLayout>
</template>

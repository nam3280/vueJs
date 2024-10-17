<script>
    import {message, reversedMessage} from '@/keys.js';
    export default{
        inject : {
            customMessage : {
                from : message, //import로 불러온 Symbol값
                default : 'default hi',
            },

            customReversedMessage : {
                from : reversedMessage,
                default : 'default hello',
            },
        },
    }
</script>
<template>
    <h1>{{customMessage}}</h1>
    <h1>{{customReversedMessage}}</h1>
</template>
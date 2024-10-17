<script>
export default {
  props: {
    productList: {
      type: Array,
    },
  },
};
</script>
<template>
  <h1>상품 정보</h1>
  <ul>
    <li v-for="(product, index) in productList" :key="index" >
      <a href="#" @click="$emit('select', product)">{{ product.name }}</a>
    </li>
  </ul>
</template>
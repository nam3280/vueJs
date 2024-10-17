<script>
export default {
  props: {
    selectProduct: {
      type: Object,
    },
  },
};
</script>
<template>
  
  <ul v-if="selectProduct">
    <h1>상품 상세 정보</h1>
    <li>
      <p>이름 : {{ selectProduct.name }}</p>
      <p>가격 : {{ selectProduct.price }}</p>
      <p>수량 : {{ selectProduct.amount }}</p>
    </li>
  </ul>
</template>
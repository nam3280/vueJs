<script>
import ProductDetail from './components/ProductDetail.vue';
import ProductList from './components/ProductList.vue';

  export default{
    components : {
      ProductList,
      ProductDetail,    
    },
    data(){
      return{
        productList : [
          { name : 'apple', 
            price : 1000, 
            amount : 10},
          { name : 'banana', 
            price : 100, 
            amount : 1},
          { name : 'orange', 
            price : 500, 
            amount : 5},
        ],
        selectProduct : null,
      };
    },
    methods:{
      select(product) {
        this.selectProduct = product;
      }
    },
  }
</script>
<template>
    <ProductList :productList="productList" @select="select" />
    <ProductDetail :selectProduct="selectProduct" />
</template>

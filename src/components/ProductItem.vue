<template>
  <div class="product-container">
    <img :src="img" alt="boot" />
    <div class="product-info">
      <div class="product-info__header">
        <h3>{{ header }}</h3>
        <div class="product-info__price">${{ price }}</div>
      </div>
      <div class="product-color">{{ color }}</div>
      <div class="product-quantity">Quantity: {{ quanity }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',

  props: ['header', 'color', 'quanity', 'img', 'price'],
};
</script>

<style scoped lang="scss">
@import '../scss/_mixins.scss';

* {
  box-sizing: border-box;
}

.product-container {
  margin: 10px 15px 0px;
  padding-bottom: 10px;
  width: 270px;
  display: flex;
  border-bottom: 1px solid rgba(151, 151, 151, 0.2);
}

.product-info {
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.product-info__header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3,
  .product-info__price {
    margin: 0;
    @include connectFont('Helvetica', 300, 12px, #6a6a6b);
  }

  .product-info__price {
    margin-left: 90px;
  }
}

.product-color,
.product-quantity {
  @include connectFont('Helvetica', 400, 10px, #2b2525);
}

.product-color {
  margin-top: 7px;
}

.product-quantity {
  margin-top: 1px;
}
</style>

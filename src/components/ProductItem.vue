<template>
  <div class="product-container">
    <img src="../assets/boot.svg" alt="boot">
    <div class="product-info">
      <div class="product-info__header">
        <h3>The Chelsea Boot</h3>
        <div class="product-info__price">$235</div>
      </div>
      <div class="product-color">Black</div>
      <div class="product-quantity">Quantity: 1</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem'
}
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
    @include connectFont('Helvetica', 400, 12px, #777879);
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

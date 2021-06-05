<template>
  <div class="summary-container">
    <header>
      <h2>Order Summary</h2>
      <button>edit order</button>
    </header>
    <div class="items"></div>
    <div class="price">
      <div class="price__subtotal-content">
        <h3>Subtotal</h3>
        <div class="price__subtotal-value">$398</div>
      </div>
      <div class="price__shipping-content">
        <h3>Shipping</h3>
        <div class="price__shipping-value">Free</div>
      </div>
      <div class="price__taxes-content">
        <h3>Taxes</h3>
        <div class="price__taxes-value">$12.12</div>
      </div>
      <div class="price__total-content">
        <h3>Total</h3>
        <div class="price__total-value">$410.12</div>
      </div>
    </div>
    <div class="privacy-politic">
      All purchases are subject to our Terms and Conditions.
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderSummary'
}
</script>

<style scoped lang="scss">
@import '../scss/_mixins.scss';

.summary-container {
  width: 300px;
  display: flex;
  flex-direction: column;
  background: rgba(230, 233, 240, 0.5);
}

header {
  margin: 24px 12px 0;
  display: flex;
  justify-content: space-between;

  h2 {
    @include connectFont('Helvetica', 300, 16px, #5a1094);
  }

  button {
    text-decoration: underline;
    background: none;
    border: none;
    @include connectFont('Helvetica', 300, 12px, #979797);

    &:hover {
      cursor: pointer;
      color: #5a1094;
    }
  }
}

.price {
  margin: 0 15px;
}
.price__subtotal-content,
.price__shipping-content,
.price__taxes-content,
.price__total-content {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3,
  div {
    margin: 10px 0 0;
    @include connectFont('Helvetica', 400, 12px, #777879);
  }
}

.price__total-content {
  margin-top: 13px;
  h3,
  div {
    color: #431C5D;
  }
}

.price__taxes-content {
  padding-bottom: 10px;
  border-bottom: 1px solid #E3E3E3
}

.privacy-politic {
  margin: 216px 20px 15px 35px;
  @include connectFont('Helvetica', 300, 10px, #9C9C9C);
}
</style>

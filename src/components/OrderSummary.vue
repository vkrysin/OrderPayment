<template>
  <div class="summary-container">
    <header>
      <h2>Order Summary</h2>
      <!-- <button>edit order</button> -->
    </header>
    <div class="items">
      <product-item
        header="The Chelsea Boot"
        price="235"
        color="Black"
        quanity="1"
        :img="bootImg"
      />
      <product-item
        header="The Twill Snap Backpack"
        price="65"
        color="Reverse Denim + Brown leather"
        quanity="1"
        :img="backpackImg"
      />
      <product-item
        header="The Twill Snap Backpack"
        price="65"
        color="Reverse Denim + Brown leather"
        quanity="1"
        :img="bugImg"
      />
    </div>
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
import ProductItem from './ProductItem.vue';
import bootImg from '../assets/boot.svg';
import backpackImg from '../assets/backpack.svg';
import bugImg from '../assets/bug.svg';

export default {
  name: 'OrderSummary',
  data() {
    return {
      bootImg: bootImg,
      backpackImg: backpackImg,
      bugImg: bugImg,
    };
  },
  components: {
    ProductItem,
  },
};
</script>

<style scoped lang="scss">
@import '../scss/_mixins.scss';

.summary-container {
  width: 300px;
  display: flex;
  flex-direction: column;
  background: rgb(251, 251, 251, 0.5);
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
    text-underline-offset: 2px;
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
    color: #431c5d;
  }
}

.price__taxes-content {
  padding-bottom: 10px;
  border-bottom: 1px solid #e3e3e3;
}

.privacy-politic {
  margin: 216px 20px 15px 35px;
  @include connectFont('Helvetica', 300, 10px, #9c9c9c);
}
</style>

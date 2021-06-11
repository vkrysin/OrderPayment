<template>
  <div class="shipping-container">
    <header>
      <div class="title">Shipping Info</div>
    </header>
    <div class="receipient">
      <div class="receipient__header">Receipient</div>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        ref="fullName"
        v-model="fullName"
        @change="validateFullName"
        @focus="hideError"
        @blur="validateFullName"
      />
      <div class="error-text display-none" ref="fullNameError">
        Enter full name
      </div>
      <div class="receipient__phone">
        <input
          type="text"
          id="phone"
          name="phoneNumber"
          placeholder="Daytime Phone"
          ref="phoneNumber"
          v-model="phoneNumber"
          @change="validatePhone"
          @focus="hideError"
          @blur="validatePhone"
        />
        <label for="phone">For delivery questions only</label>
      </div>
      <div class="error-text display-none" ref="phoneNumberError">
        Invalid phone number
      </div>
    </div>
    <div class="address">
      <div class="address__header">Address</div>
      <input
        type="text"
        name="street"
        placeholder="Street Address"
        v-model="address.street"
      />
      <input
        type="text"
        name="street-additional-info"
        placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
        v-model="address.directionalInfo"
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        v-model="address.city"
      />
      <div class="address__country">
        <select name="countries" v-model="address.country">
          <option value="Country" selected>Country</option>
        </select>
        <input type="text" name="zip" placeholder="ZIP" v-model="address.zip" />
      </div>
    </div>
    <button
      class="continue-btn disabled"
      type="button"
      ref="btn-submit"
      @click="sendData"
      disabled
    >
      Continue
    </button>
  </div>
</template>

<script>
import { Validate } from '../common/validate.service';
import countries from '../../static/countries.json';
import { mapMutations } from 'vuex';

export default {
  name: 'ShippingInfo',
  data() {
    return {
      fullName: '',
      phoneNumber: '',
      address: {
        street: '',
        // Apt, Suite, Bldg, Gate Code
        directionalInfo: '',
        city: '',
        country: 'Country',
        zip: '',
      },
    };
  },

  emits: ['shippingCompleted'],

  mounted() {
    this.addCountriesToSelect();
    this.$el.addEventListener('change', this.isFormCompleted);
  },

  methods: {
    ...mapMutations(['setShippingAddress']),

    hideError(event) {
      event.target.classList.remove('input-invalid');
      this.$refs[`${event.target.name}Error`].style.display = 'none';
    },

    validateFullName() {
      if (!Validate.isFullName(this.$data.fullName)) {
        this.$refs.fullNameError.style.display = 'block';
        this.$refs.fullName.classList.add('input-invalid');
        return false;
      }
      return true;
    },

    validatePhone() {
      if (!Validate.isPhoneNumber(this.$data.phoneNumber)) {
        this.$refs.phoneNumberError.style.display = 'block';
        this.$refs.phoneNumber.classList.add('input-invalid');
        return false;
      }
      return true;
    },

    addCountriesToSelect() {
      const countrySelect = this.$el.querySelector('select[name=countries]');

      for (const item of countries) {
        let option = document.createElement('option');
        option.value = item.name;
        option.textContent = item.name;
        option.classList.add('option-text');

        countrySelect.appendChild(option);
      }
    },

    isFormCompleted() {
      // check that inputs has a value
      const inputs = this.$el.querySelectorAll('input');
      for (const item of inputs) {
        if (item.value == '') {
          this.$refs['btn-submit'].classList.add('disabled');
          return;
        }
      }
      // check that select has a value - Country is default
      const select = this.$el.querySelector('select');
      if (select.value == 'Country') {
        this.$refs['btn-submit'].classList.add('disabled');
        return;
      }

      if (!this.validateFullName() || !this.validatePhone()) {
        this.$refs['btn-submit'].classList.add('disabled');
        return;
      }

      this.$refs['btn-submit'].classList.remove('disabled');
      this.$refs['btn-submit'].disabled = false;
    },

    sendData() {
      const formData = {
        fullName: this.fullName,
        phoneNumber: this.phoneNumber,
        address: {
          street: this.address.street,
          // Apt, Suite, Bldg, Gate Code
          directionalInfo: this.address.directionalInfo,
          city: this.address.city,
          country: this.address.country,
          zip: this.address.zip,
        },
      };

      this.setShippingAddress(formData);
      this.$emit('shippingCompleted');
    },
  },
};
</script>

<style scoped lang="scss">
@import '../scss/_mixins.scss';

* {
  box-sizing: border-box;
}

.display-none {
  display: none;
}

.shipping-container {
  margin-top: 20px;
  margin-left: 40px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

input,
select {
  margin-top: 5px;
  width: 320px;
  height: 40px;
  border: 1px solid #dedcdc;
  border-radius: 5px;
  text-indent: 15px;
  @include connectFont('Helvetica', 300, 16px, #6b6b6b);
}

.receipient,
.address {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

header {
  display: flex;

  .title {
    @include connectFont('Helvetica', 300, 26px, #5a1094);
  }
}

.receipient {
  margin-top: 20px;
}

.receipient__header,
.address__header {
  @include connectFont('Helvetica', 300, 16px, #5a1094);
}

.receipient__phone {
  margin-top: 10px;
  display: flex;
  align-items: center;

  input {
    width: 180px;
  }

  label {
    margin-left: 10px;
    width: 81px;
    text-align: left;
    @include connectFont('Helvetica', 300, 13px, #777879);
  }
}

.address {
  margin-top: 10px;

  input[name='street'],
  input[name='street-additional-info'] {
    margin-top: 10px;
  }

  input[name='city'] {
    margin-top: 20px;
    background: url('../assets/gunsight.svg') no-repeat 292px 9px;
  }
}

.address__country {
  margin-top: 20px;
  display: flex;

  select {
    width: 180px;
    appearance: none;
    background: url('../assets/bottom-arrow.svg') no-repeat 153px 16px;
  }

  input {
    margin-left: 20px;
    width: 120px;
  }
}

.continue-btn {
  margin-top: 20px;
  width: 180px;
  height: 45px;
  background: rgba(90, 16, 148, 0.8);
  border: none;
  border-radius: 5px;
  @include connectFont('Helvetica', 300, 16px, #fff);

  &:not(.disabled):hover {
    background: rgba(90, 16, 148, 0.75);
    box-shadow: 0 5px 15px rgba(black, 0.1);
  }

  &:not(.disabled):active {
    border: 1px solid black;
  }
}

.disabled {
  background: rgb(155, 154, 154);
}
</style>

<style lang="scss">
@import '../scss/_mixins.scss';

.option-text {
  @include connectFont('Helvetica', 300, 16px, #000000);
}
</style>

<template>
  <div class="shipping-container">
    <header>
      <div class="title">Billing Information</div>
      <button>Same as shipping</button>
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
      <input type="text" name="street" placeholder="Street Address" />
      <input
        type="text"
        name="street-additional-info"
        placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
      />
      <input type="text" name="city" placeholder="City" />
      <div class="address__country">
        <select name="countries">
          <option value="Country" disabled selected hidden>Country</option>
          <option value="3213121">1</option>
          <option value="2">2</option>
        </select>
        <input type="text" name="zip" placeholder="ZIP" />
      </div>
    </div>
    <button class="continue" type="button">Continue</button>
  </div>
</template>

<script>
import { Validate } from '../common/validate.service';
import countries from '../../static/countries.json';

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
        country: '',
        zip: ''
      }
    };
  },
  mounted() {
    let countrySelect = document.querySelector('select[name=countries]');

    for (const item of countries) {
      let option = document.createElement('option');
      option.value = item.name;
      option.textContent = item.name;
      option.classList.add('option-text');

      countrySelect.appendChild(option);
    }
  },
  methods: {
    hideError(event) {
      event.target.classList.remove('input-invalid');
      this.$refs[`${event.target.name}Error`].style.display = 'none';
    },

    validateFullName() {
      if (!Validate.isFullName(this.$data.fullName)) {
        this.$refs.fullNameError.style.display = 'block';
        this.$refs.fullName.classList.add('input-invalid');
      }
    },

    validatePhone() {
      if (!Validate.isPhoneNumber(this.$data.phoneNumber)) {
        this.$refs.phoneNumberError.style.display = 'block';
        this.$refs.phoneNumber.classList.add('input-invalid');
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import '../scss/_mixins.scss';

* {
  box-sizing: border-box;
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

  button {
    margin-left: 26px;
    text-decoration: underline;
    text-underline-offset: 2px;
    background: none;
    border: none;
    @include connectFont('Helvetica', 300, 12px, rgba(90, 16, 148, 0.95));

    &:hover {
      cursor: pointer;
      color: rgba(90, 16, 148, 0.9);
      box-shadow: 0 5px 15px rgba(black, 0.1);
    }

    &:active {
      color: rgba(90, 16, 148, 0.8);
    }
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

button[class='continue'] {
  margin-top: 20px;
  width: 180px;
  height: 45px;
  background: rgba(90, 16, 148, 0.8);
  border: none;
  border-radius: 5px;
  @include connectFont('Helvetica', 300, 16px, #fff);

  &:hover {
    background: rgba(90, 16, 148, 0.75);
    box-shadow: 0 5px 15px rgba(black, 0.1);
  }

  &:active {
    border: 1px solid black;
  }
}
</style>

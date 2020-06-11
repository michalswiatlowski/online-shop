<template>
  <div>
    <form class="form" @submit.prevent="submit">
      <h2 class="form-title">Utwórz nowy produkt</h2>
      <label for="name">Nazwa:</label>
      <input class="form-field" id="name" type="text" name="name" v-model="name" placeholder="Nazwa" required />
      <label for="category">Kategoria:</label>
      <select class="form-field" id="category" type="text" name="category" v-model="category" >
        <option disabled selected>Wybierz kategorię</option>
        <option value="Torebka">Torebka</option>
        <option value="Biżuteria">Biżuteria</option>
      </select>
      <div v-if="errors" class="error-message">{{ errors }}</div>
      <div>
        <button class="btn-submit left">Utwórz</button>
        <button class="btn-cancel left" @click.prevent="goBack">Anuluj</button>
      </div>
    </form>
  </div>
</template>

<script>
import ProductService from '../../ProductService';

export default {
  data() {
    return {
      name: '',
      price: '',
      description: '',
      category: 'Wybierz kategorię',
      availability: false,
      pictures: [],
      position: 1,
      promotion: false,
      isShow: false,
      additionalInfo: {
        isAvailable: false,
        text: '',
        backgroundColor: '#42f542',
        textColor: '#000000',
      },
      errors: null,
    };
  },
  methods: {
    submit() {
      if (this.name && (this.category !== 'Wybierz kategorię')) {
        this.errors = null;
        const newProduct = {
          name: this.name,
          seoTitle: this.name,
          price: this.price,
          description: this.description,
          category: this.category,
          availability: this.availability,
          pictures: [],
          position: this.position,
          promotion: this.promotion,
          isShow: this.isShow,
          additionalInfo: this.additionalInfo,
        };

        ProductService.insertProduct(newProduct).then((res) => {
          const id = res.data.id;
          const message = res.data.message;
          this.$router.push({ name: 'editProduct', params: { message: message, id: id } });
        });
      } else {
        this.errors = 'Uzupełnij pola';
      }
    },
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style>
.form {
  width: 90%;
  margin: 20px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.form-title {
  border-bottom: 1px solid var(--grey);
  margin-bottom: 10px;
}

.form-field {
  height: 30px;
  padding-left: 0.4rem;
  margin: 5px 5px 10px 5px;
}

.form label {
  font-weight: 700;
}

.btn-submit,
.btn-cancel,
.btn-warning {
  display: inline-block;
  border-radius: 4px;
  padding: 4px 8px;
  margin: 5px;
  font-weight: 700;
}

.btn-submit {
  border: 1px solid green;
  color: green;
  transition: 0.3s;
}

.btn-submit:hover {
  background-color: lightgreen;
}

.btn-cancel {
  border: 1px solid red;
  color: red;
  transition: 0.3s;
}

.btn-cancel:hover {
  background-color: pink;
}

.btn-warning {
  border: 1px solid orange;
  color: orange;
  transition: 0.3s;
}

.btn-warning:hover {
  background-color: lightyellow;
}

.error-message {
  padding: 4px 8px;
  margin: 5px 0;
  background-color: pink;
  color: red;
  font-weight: 700;
}
</style>

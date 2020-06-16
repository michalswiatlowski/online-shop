<template>
  <div>
    <div v-if="loadError" class="error-container">
      <p class="error-message">{{ loadError }}</p>
      <button class="btn-cancel left" @click.prevent="goBack">Powrót</button>
    </div>
    <form v-else class="form" @submit.prevent="">
      <h2 class="form-title">{{ loadedProduct.name }}<span class="text-light"> - edycja</span></h2>

      <div class="text-heavy">Aktywność na stronie:</div>
      <label class="flex-label text-light" for="isShow">
        <input
          class="form-field"
          id="isShow"
          type="checkbox"
          v-model="loadedProduct.isShow"
          :checked="loadedProduct.isShow"
        />
        {{ loadedProduct.isShow ? 'Aktywny' : 'Nieaktywny' }}
      </label>
      <div class="text-heavy">Dostępna od ręki:</div>
      <label class="flex-label text-light" for="availability">
        <input
          class="form-field"
          id="availability"
          type="checkbox"
          v-model="loadedProduct.availability"
          :checked="loadedProduct.availability"
        />
        {{ loadedProduct.availability ? 'Dostępna' : 'Na zamówienie' }}
      </label>
      <label for="name">Nazwa:</label>
      <input
        class="form-field"
        id="name"
        type="text"
        name="name"
        v-model="loadedProduct.name"
        placeholder="Nazwa"
        required
      />
      <label for="fiendlyURL">Przyjazny URL:</label>
      <input
        class="form-field"
        id="fiendlyURL"
        type="text"
        name="fiendlyURL"
        v-model="loadedProduct.seoTitle"
        placeholder="Nazwa"
        required
      />
      <label for="category">Kategoria:</label>
      <select class="form-field" id="category" type="text" name="category" v-model="loadedProduct.category">
        <option disabled selected>Wybierz kategorię</option>
        <option value="Torebka">Torebka</option>
        <option value="Biżuteria">Biżuteria</option>
      </select>
      <label for="price">Cena:</label>
      <input
        class="form-field"
        id="price"
        type="number"
        step="0.01"
        min="0"
        name="price"
        v-model="loadedProduct.price"
        placeholder="Cena"
        required
      />
      <label for="description">Opis:</label>
      <textarea
        class="form-textarea"
        name="description"
        id="description"
        v-model="loadedProduct.description"
      ></textarea>
      <label for="position">Pozycja:</label>
      <input
        class="form-field"
        id="position"
        type="number"
        step="1"
        min="1"
        name="price"
        v-model="loadedProduct.position"
        required
      />
      <div class="text-heavy">Promocja:</div>
      <label class="flex-label text-light" for="promotion">
        <input
          class="form-field"
          id="promotion"
          type="checkbox"
          v-model="loadedProduct.promotion"
          :checked="loadedProduct.promotion"
        />
        {{ loadedProduct.promotion ? 'Włączona' : 'Wyłączona' }}
      </label>
      <div class="text-heavy">Akcja marketingowa:</div>
      <div class="flex-label">
        <label class="flex-label text-light" for="additionalInfoAvailability">
          <input
            class="form-field"
            id="additionalInfoAvailability"
            type="checkbox"
            v-model="actionPreview.isAvailable"
            :checked="actionPreview.isAvailable"
          />
          {{ actionPreview.isAvailable ? 'Włączona' : 'Wyłączona' }}
        </label>
        <div class="form-field__color text-light">
          <input class="form-field input-color" type="color" v-model="actionPreview.backgroundColor" />- Tło,
          <input class="form-field input-color" type="color" v-model="actionPreview.textColor" />- Tekst
        </div>
        <label for="additionalInfoTitle">
          <input
            class="form-field preview center"
            id="additionalInfoTitle"
            type="text"
            name="additionalInfoTitle"
            v-model="actionPreview.text"
            :style="{ backgroundColor: actionPreview.backgroundColor, color: actionPreview.textColor }"
            placeholder="Nazwa akcji"
            autocomplete="off"
          />
        </label>
      </div>

      <div v-if="errors" class="error-message">{{ errors }}</div>
      <div v-if="message" class="update-message">{{ message }}</div>
      <div>
        <button class="btn-submit left" @click.prevent="updateProduct">Aktualizuj</button>
        <router-link class="btn-warning left" tag="button" to="/dashboard/products">Powrót</router-link>
        <button class="btn-cancel left" @click.prevent="deleteProduct">Usuń</button>
      </div>
    </form>
  </div>
</template>

<script>
import ProductService from '../../ProductService';

export default {
  data() {
    return {
      product: '',
      errors: null,
      loadError: null,
      message: '',
      route: this.$route.params.id,
    };
  },
  computed: {
    loadedProduct() {
      return this.product ? this.product[0] : false;
    },
    actionPreview() {
      return this.loadedProduct ? this.loadedProduct.additionalInfo : {};
    },
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    deleteProduct() {
      const response = prompt('Na pewno chcesz usunąć pozycje?');
      if (response) {
        ProductService.deleteProduct(this.loadedProduct._id).then((res) => {
          const message = res.data.message;
          this.$router.push({ name: 'showProducts', params: { message: message } });
        });
      }
    },
    updateProduct() {
      const editedProduct = this.loadedProduct;
      console.log(editedProduct);
      ProductService.editProduct(editedProduct).then((res) => {
        const message = res.data.message;
        this.message = message;
      });
    },
  },
  watch: {
    '$route.params.id': async function() {
      try {
        this.product = await ProductService.getProduct(this.$route.params.id);
      } catch (err) {
        this.loadError = err.message;
      }
    },
  },
  async created() {
    try {
      this.product = await ProductService.getProduct(this.route);
    } catch (err) {
      this.loadError = err.message;
    }
  },
};
</script>

<style>
.error-container {
  text-align: center;
}

.update-message {
  background-color: lightgreen;
  color: green;
  padding: 4px 8px;
  margin: 5px 0 10px 0;
}

.form .text-light {
  font-size: 0.9em;
  font-weight: 400;
  font-style: italic;
}

.text-heavy {
  font-weight: 700;
}

.flex-label {
  display: flex;
  align-items: center;
  align-self: flex-start;
  flex-wrap: wrap;
}

.form-field__color {
  margin: 0 10px;
  display: flex;
  align-items: center;
}

.input-color {
  border: none;
  padding: 0;
  background-color: transparent;
}

.preview {
  border: none;
  border-radius: 10px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
}

.form-textarea {
  height: 50px;
  padding-left: 0.4rem;
  margin: 5px 0 10px 5px;
  resize: vertical;
}
</style>

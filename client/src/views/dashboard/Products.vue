<template>
  <div class="wrapper">
    <div v-if="message" class="error-message">{{ message }}</div>
    <div class="panel">
      <div class="panel__header">
        <h2 class="panel-title">Produkty</h2>
        <router-link tag="button" :to="{ path: $route.fullPath + '/new' }" class="button-add">
          <span class="icon-add"></span>
          Dodaj
        </router-link>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Zdjęcie</th>
            <th>Nazwa</th>
            <th>Kategoria</th>
            <th>Cena</th>
            <th>Pozycja</th>
            <th>Aktywny</th>
            <th>Dostępność</th>
            <th>Promocja</th>
            <th>Dodatkowy tekst - aktywność</th>
            <th>Dodatkowy tekst</th>
            <th>Utworzony</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <td>
              <img
                src="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                width="30"
                alt="miniaturka zdjęcia"
              />
            </td>
            <td class="link">
              <router-link :to="{ path: $route.fullPath + '/' + product._id }">{{ product.name }}</router-link>
            </td>
            <td>{{ product.category }}</td>
            <td class="right">{{ product.price }}</td>
            <td class="center">{{ product.position }}</td>
            <td class="center"><input type="checkbox" name="" id="" :checked="product.isShow" @click.prevent /></td>
            <td class="center">
              <input type="checkbox" name="" id="" :checked="product.availability" @click.prevent />
            </td>
            <td class="center"><input type="checkbox" name="" id="" :checked="product.promotion" @click.prevent /></td>
            <td class="center">
              <input type="checkbox" name="" id="" :checked="product.additionalInfo.isAvailable" @click.prevent />
            </td>
            <td>
              <div
                v-if="product.additionalInfo.text"
                class="rounded-rectangle"
                :style="{
                  backgroundColor: product.additionalInfo.backgroundColor,
                  color: product.additionalInfo.textColor,
                }"
              >
                {{ product.additionalInfo.text }}
              </div>
            </td>
            <td>{{ product.createdAt }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ProductService from '../../ProductService';

export default {
  data() {
    return {
      path: this.$route.fullPath,
      products: [],
      error: '',
      numbers: 12,
      message: this.$route.params.message,
    };
  },
  async created() {
    try {
      this.products = await ProductService.getProducts();
    } catch (err) {
      this.error = err.message;
    }
  },
};
</script>

<style>
.link,
.filter {
  color: var(--altColor);
  text-decoration-line: underline;
}

.right {
  text-align: right;
}

.center {
  text-align: center;
}

.rounded-rectangle {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90%;
  border-radius: 4px;
}

.button-add {
  display: flex;
  font-size: 0.8rem;
  color: var(--grey);
  background-color: var(--white);
  padding: 4px 8px;
  border: 1px solid var(--lightgrey);
  border-radius: 4px;
}

.icon-add {
  position: relative;
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  background-color: rgba(14, 192, 32, 0.8);
  border-radius: 50%;
  margin-right: 3px;
}

.icon-add::before,
.icon-add::after {
  content: '';
  position: absolute;
  width: 0.52rem;
  height: 1.7px;
  border-radius: 1px;
  background-color: var(--white);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.icon-add::after {
  transform: translate(-50%, -50%) rotate(90deg);
}

.table {
  width: calc(100% - 20px);
  margin: 10px;
  border: 2px solid var(--grey);
  background-color: var(--white);
  border-spacing: 0;
}

th,
td {
  padding: 3px 7px;
}

th {
  font-size: 0.8rem;
  background-color: var(--white);
  border-bottom: 1px solid var(--grey);
  color: var(--black);
  height: 40px;
}

tr:nth-child(odd) {
  background-color: #fff;
}

tr:nth-child(even) {
  background-color: var(--white);
}

tbody tr:hover {
  background-color: rgb(186, 255, 147);
}

td {
  font-size: 0.7rem;
  height: 35px;
}
</style>

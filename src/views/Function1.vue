<template>
  <v-container rounded class="red text-center mt-10">
    <v-row justify="center">
      <v-col cols="12" md="12">
        <v-container rounded class="primary">
          <h2>Function 1</h2>
          <v-col>
            <v-list-item v-for="n in finalProduct" :key="n.name">
              <v-list-item-content>
                <v-list-item-title class="mt-5 mb-1 text-center">
                  Name : {{ n.name }} Weight : {{ n.weight }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import states from "../assets/exam-data.json";

export default {
  name: "Function1",
  components: {},
  data() {
    return {
      finalProduct: [],
    };
  },
  mounted() {
    this.calWeight();
  },
  methods: {
    calWeight() {
      const product = states.filter((item) => item.is_editable_price === false);
      for (let index = 0; index < product.length; index++) {
        //this.finalProduct.push(product[index].name)
        let sum = 0;
        for (let j = 0; j < product[index].products.length; j++) {
          sum += product[index].products[j].weight;
        }
        const test = {};
        test.name = product[index].name;
        test.weight = sum;
        this.finalProduct.push(test);
      }
    },
  },
  computed: {},
};
</script>

<style></style>

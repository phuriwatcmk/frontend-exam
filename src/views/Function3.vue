<template>
  <v-container rounded class="red text-center mt-10">
    <v-row justify="center">
      <v-col cols="12" md="12">
        <v-container rounded class="primary">
          <h2>Function 3</h2>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Function3",
  components: {},
  data() {
    return {
      testCase: [10, 10, 9],
    };
  },
  mounted() {
    console.log(this.findSecoundValueInArr([]));
    console.log(this.findSecoundValueInArr([1]));
    console.log(this.findSecoundValueInArr([1, 2, 3]));
    console.log(this.findSecoundValueInArr([1, 1]));
    console.log(this.findSecoundValueInArr([1, 2, 3, 4, 5, 6]));
    console.log(this.findSecoundValueInArr([1, 5, 3, 2, 5, 10]));
    console.log(this.findSecoundValueInArr([100, 5, 3, 2, 99]));
    console.log(this.findSecoundValueInArr([35, 5, 3, 2, 5, 100]));
    console.log(this.findSecoundValueInArr([1, 5, 101, 2, 5, 10]));
    console.log(this.findSecoundValueInArr([10, 10, 9]));
  },
  methods: {
    findSecoundValueInArr(testCase) {
      let arr = testCase;
      // console.log(arr);

      // base case
      if (arr.length === 0) {
        return null;
      }
      if (arr.length === 1) {
        return arr[0];
      }
      if (arr.length > 1) {
        let val1 = 0;
        let val2 = 0;
        for (let index = 0; index < arr.length; index++) {
          if (arr[index] > val1) {
            val2 = val1;
            val1 = arr[index];
          } else if (arr[index] != val1 && arr[index] > val2) {
            val2 = arr[index];
          }
        }
        return val2;
      }
    },
  },
  computed: {},
};
</script>

<style></style>

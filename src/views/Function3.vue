<template>
  <v-container rounded class="red text-center mt-10">
    <v-row justify="center">
      <v-col cols="12" md="12">
        <v-container rounded class="primary">
          <h2>Function 3</h2>
          <v-col>
            <v-list-item v-for="(n, index) in testCase" :key="n.id">
              <v-list-item-content>
                <v-list-item-title class="mt-5 mb-1 text-center">
                  Case {{ index + 1 }}: {{ n }}
                </v-list-item-title>
                <div class="text--subtitle">
                  Ans : {{ ans[index] == null ? "null" : ans[index] }}
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-col>
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
      testCase: [
        "[]",
        "[1]",
        "[1,2,3]",
        "[1,1]",
        "[1,2,3,4,5,6]",
        "[1,5,3,2,5,10]",
        "[100,5,3,2,99]",
        "[35,5,3,2,5,100]",
        "[1,5,101,2,5,10]",
        "[10,10,9]",
      ],
      ans: [],
    };
  },
  mounted() {
    this.findSecoundValueInArr(this.testCase);
  },
  methods: {
    findSecoundValueInArr(testCase) {
      let arr = testCase;
      //console.log(arr);
      for (let i = 0; i < arr.length; i++) {
        const element = JSON.parse(arr[i]);
        //console.log(element);

        // base case
        if (element.length === 0) {
          this.ans.push(null);
          // console.log(null);
        }
        if (element.length === 1) {
          this.ans.push(element[0]);
          // console.log(element[0]);
        }
        if (element.length > 1) {
          let val1 = 0;
          let val2 = 0;
          //console.log(element);
          for (let index = 0; index < element.length; index++) {
            if (element[index] >= val1) {
              val2 = val1;
              val1 = element[index];
              //console.log(val2);
            } else if (
              val1 == val2 ||
              (element[index] != val1 && element[index] > val2)
            ) {
              val2 = element[index];
              // console.log(val2);
            }
          }
          this.ans.push(val2);
        }
      }
    },
  },
  computed: {},
};
</script>

<style></style>

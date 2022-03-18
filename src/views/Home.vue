<template>
  <v-row justify="center">
    <v-col cols="4" md="4">
      <v-container rounded class="">
        <v-container rounded class="primary">
          <h2 class="text-center menucolor--text">Test form and validation</h2>
          <FormSub v-on:handle-submit="showResult"></FormSub>
          <v-row class="d-block" v-if="this.result.length !== 0">
            <v-col>
              <h3>Result:</h3>
            </v-col>
            <v-col class="py-0">
              <p>First Name: {{ this.result[0].fname }}</p>
            </v-col>
            <v-col class="py-0">
              <p>Last Name: {{ this.result[0].lname }}</p>
            </v-col>
            <v-col class="py-0">
              <p>Email: {{ this.result[0].email }}</p>
            </v-col>
            <v-col class="py-0">
              <p>Gender: {{ this.result[0].gender }}</p>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import FormSub from "@/components/FormSubmit.vue";
export default {
  name: "Home",
  components: {
    FormSub,
  },
  data() {
    return {
      result: [],
    };
  },
  mounted() {
    // console.log(this.result.lenght);
  },
  methods: {
    showResult(result) {
      this.result = result;
      console.log(this.result.length);
      console.log(this.result);
    },
  },
  computed: {},
};
</script>

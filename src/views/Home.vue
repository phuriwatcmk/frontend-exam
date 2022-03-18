<template>
  <v-row justify="center">
    <v-col cols="8" md="8">
      <v-container rounded class="mt-10">
        <v-container rounded class="primary">
          <h2 class="text-center">Test from and validation</h2>
          <FormSub v-on:handle-submit="showResult"></FormSub>
          <v-row class="d-block" v-if="this.result.length !== 0">
            <v-col>
              <h3>Result:</h3>
            </v-col>
            <v-col>
              <h3>First Name: {{ this.result[0].fname }}</h3>
            </v-col>
            <v-col>
              <h3>Last Name: {{ this.result[0].lname }}</h3>
            </v-col>
            <v-col>
              <h3>Email: {{ this.result[0].email }}</h3>
            </v-col>
            <v-col>
              <h3>Gender: {{ this.result[0].gender }}</h3>
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

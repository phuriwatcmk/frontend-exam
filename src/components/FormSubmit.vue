<template>
  <v-row class="text-right" justify="center">
    <v-col cols="12" md="12">
      <v-form
        ref="form"
        lazy-validation
        @submit.prevent="handleSubmit"
        class="mt-5"
      >
        <v-row class="align-center mt-0">
          <v-col cols="4">
            <h3 class="mt-1">First name</h3>
          </v-col>

          <v-col cols="7" class="mt-5 pb-0">
            <v-text-field
              v-model="form.firstname"
              class="test"
              label="Please fill First name"
              solo
              dense
              filled
              elevation="0"
              required
              :rules="[rules.required, rules.thaiEng]"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="align-center mt-0">
          <v-col cols="4">
            <h3 class="mt-1">Last name</h3>
          </v-col>
          <v-col cols="7" class="mt-5 pb-0">
            <v-text-field
              v-model="form.lastname"
              label="Please fill Last name"
              :rules="[rules.required, rules.thaiEng]"
              dense
              filled
              solo
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="align-center mt-0">
          <v-col cols="4">
            <h3 class="mt-1">E-mail</h3>
          </v-col>
          <v-col cols="7" class="mt-5 pb-0">
            <v-text-field
              type="email"
              v-model="form.email"
              label="Please fill E-mail"
              :rules="[rules.required, rules.email]"
              solo
              filled
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="align-center mt-0">
          <v-col cols="4" class="pb-0">
            <h3>Password</h3>
          </v-col>
          <v-col cols="7" class="mt-5 pb-0">
            <v-text-field
              type="password"
              v-model="form.password"
              :rules="[rules.required]"
              label="Please fill password"
              solo
              filled
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="align-center mt-0">
          <v-col cols="4" class="pb-0">
            <h3>Verify Password</h3>
          </v-col>
          <v-col cols="7" class="mt-5 pb-0">
            <v-text-field
              type="password"
              v-model="form.VFYpassword"
              :rules="[rules.required, rules.password]"
              label="Please fill verify password"
              solo
              filled
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="align-start">
          <v-col cols="4" class="pb-0 mt-0">
            <h3 class="mt-2">Gender</h3>
          </v-col>
          <v-col cols="7" class="pb-0">
            <v-autocomplete
              v-model="form.gender"
              :items="items"
              :rules="[rules.required]"
              dense
              solo
              placeholder="Please select gender"
            ></v-autocomplete>
          </v-col>
        </v-row>
        <v-row class="mb-5">
          <v-col cols="4"> </v-col>
          <v-col cols="2">
            <v-btn color="success" type="submit"> Submit </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      isFormValid: false,
      form: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        VFYpassword: "",
        gender: "",
      },
      items: ["Male", "Female"],
      subForm: [],
    };
  },
  methods: {
    handleSubmit() {
      //if validate
      if (this.$refs.form.validate()) {
        this.isFormValid = true;
      }
      //console.log(this.isFormValid);
      if (this.isFormValid) {
        //console.log("gogo");
        let submitedForm = {
          fname: this.form.firstname,
          lname: this.form.lastname,
          email: this.form.email,
          password: this.form.password,
          twopassword: this.form.VFYpassword,
          gender: this.form.gender,
        };
        this.subForm.pop();
        this.subForm.push(submitedForm);
        this.$emit("handle-submit", this.subForm);
        this.isFormValid = true;
      }
    },
  },
  computed: {
    rules() {
      return {
        empty: (v) => !!v || "Please fill out this field.",
        required: (v) => !!v || "Please fill out this field.",
        email: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        password: (v) => v === this.form.password || "Password must match",
        thaiEng: (v) =>
          /^[a-zA-Zก-ฮะ-์\s]+$/.test(v) ||
          "must be characters in thai language and english language only",
      };
    },
  },
};
</script>
<style></style>

<template>
  <v-row class="text-right" justify="center">
    <v-col cols="12" md="6">
      <v-form
        ref="form"
        lazy-validation
        v-model="isFormValid"
        @submit.prevent="handleSubmit"
        class="mt-5"
      >
        <v-row>
          <v-col cols="4">
            <h3>First name</h3>
          </v-col>

          <v-col cols="6" class="pb-0">
            <v-text-field
              v-model="form.firstname"
              label="Please fill First name"
              solo
              required
              :rules="[rules.required]"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <h3>Last name</h3>
          </v-col>
          <v-col cols="6" class="pb-0">
            <v-text-field
              v-model="form.lastname"
              label="Please fill Last name"
              :rules="[rules.required]"
              solo
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <h3>E-mail</h3>
          </v-col>
          <v-col cols="6" class="pb-0">
            <v-text-field
              type="email"
              v-model="form.email"
              label="Please fill E-mail"
              :rules="[rules.required, rules.email]"
              solo
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" class="pb-0">
            <h3>Password</h3>
          </v-col>
          <v-col cols="6" class="pb-0">
            <v-text-field
              type="password"
              v-model="form.password"
              :rules="[rules.required]"
              label="Please fill password"
              solo
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" class="pb-0">
            <h3>Verify Password</h3>
          </v-col>
          <v-col cols="6" class="pb-0">
            <v-text-field
              type="password"
              v-model="form.VFYpassword"
              :rules="[rules.required, rules.password]"
              label="Please fill verify password"
              solo
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" class="pb-0">
            <h3>Gender</h3>
          </v-col>
          <v-col cols="6" class="pb-0">
            <v-autocomplete
              v-model="form.gender"
              :items="items"
              :rules="[rules.required]"
              dense
              filled
              solo
              placeholder="Please select gender"
            ></v-autocomplete>
          </v-col>
        </v-row>
        <v-row class="mb-5">
          <v-col cols="4"> </v-col>
          <v-col cols="2">
            <v-btn :disabled="!isFormValid" color="success" type="submit"
              >Submit</v-btn
            >
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
      console.log("check from component");
      this.$refs.form.validate();
      if (this.isFormValid) {
        console.log("gogo");
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
      };
    },
  },
};
</script>

<style></style>

<template>
  <v-container rounded class="text-center mt-10">
    <v-row justify="center">
      <v-col cols="8" md="4">
        <v-container rounded class="primary">
          <h2>Test from and validation</h2>
          <v-form ref="form" class="mt-5">
            <v-row>
              <v-col cols="4">
                <h3>First name</h3>
              </v-col>

              <v-col cols="6">
                <v-text-field label="Please fill First name" solo></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="4">
                <h3>Last name</h3>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Please fill Last name" solo></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <h3>E-mail</h3>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Please fill E-mail" solo></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <h3>Password</h3>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Please fill password" solo></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <h3>Verify Password</h3>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Please fill verify password" solo></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <h3>Gender</h3>
              </v-col>
              <v-col cols="6">
                <v-autocomplete
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
                <v-btn color="success">Submit</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

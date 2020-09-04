<template>
  <Layout>
    <v-form ref="form" method="post">
      <v-text-field color="green " label="title" required></v-text-field>

      <v-textarea color="green " filled label="description"></v-textarea>

      <v-text-field color="green " label="price" required></v-text-field>
      <v-text-field color="green " label="duration" required></v-text-field>

      <v-select color="green " label="categories" required></v-select>
      <v-select color="green " label="images" required></v-select>

      <v-row class="justify-space-around">
        <v-col cols="12" sm="6" md="4">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                label="Choose a Date"
                color="green"
                v-model="date"
                prepend-inner-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker color="green" v-model="date" no-title scrollable>
              <v-btn text color="green" @click="menu = false">Cancel</v-btn>
              <v-btn text color="green" @click="$refs.menu.save(date)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <v-menu
            ref="menu"
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="time"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                color="green"
                v-model="time"
                label="Choose your time"
                prepend-inner-icon="mdi-clock"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="menu2"
              v-model="time"
              full-width
              @click:minute="$refs.menu.save(time)"
              color="green"
            ></v-time-picker>
          </v-menu>
        </v-col>
      </v-row>

      <v-row class="justify-center align-center">
        <v-btn color="success" class="mr-4">Submit</v-btn>
        <v-btn class="ma-2" dark @click="$router.push(`/`)">Cancel</v-btn>
      </v-row>
    </v-form>
  </Layout>
</template>


<script>
export default {
  data: () => ({
    time: null,
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
  }),
};
</script>


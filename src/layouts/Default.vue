<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>
        <g-link to="/">Events</g-link>
      </v-toolbar-title>
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        color="green"
        v-model="searchText"
        placeholder="Search for an Event"
        style="max-width: 350px"
        class="ml-8"
        outlined
        rounded
        dense
        hide-details
        clearable
        @click:clear="searchText = ''"
      />
      <v-spacer />
      <v-btn @click="$router.push(`/events/create`)">Create Event</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col sm="6" offset-sm="3">
            <slot :searchText="searchText" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      searchText: "",
    };
  },
};
</script>

<style scoped>
.v-toolbar__title a {
  text-decoration: none;
  color: #000;
}
</style>

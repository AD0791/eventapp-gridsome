<template>
  <Layout v-slot="{ searchText }">
    <v-tabs v-model="tab" grow color="green">
      <v-tab>All Events</v-tab>
      <v-tab>Music</v-tab>
      <v-tab>Coding</v-tab>
    </v-tabs>

    <v-row class="justify-space-around">
      <v-card
        class="mt-5"
        width="280"
        v-for="edge in getEvents(searchText)"
        :key="edge.node.id"
      >
        <v-img
          class="white--text align-end"
          height="250px"
          :src="`${items.env}${edge.node.thumbnail}`"
        />
        <v-card-title>{{ edge.node.title }}</v-card-title>
        <v-card-subtitle class="pb-0">{{
          formatDate(edge.node.date)
        }}</v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="green"
            text
            @click="$router.push(`/events/${edge.node.id}`)"
            >More Info</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-row>
  </Layout>
</template>

<page-query>
  query {
  events: allEvent{
    edges{
      node{
        id
        title
        description
        price
        date
        duration
        category
        thumbnail
        image
      }
    }
  }
}
</page-query>

<script>
import moment from "moment";
//const axios = require("axios");
export default {
  metaInfo: {
    title: "Events App",
  },
  data() {
    return {
      tab: 0,
      events: [],
      items: {},
    };
  },
  mounted() {
    this.events = this.$page.events.edges;
    this.items.emv = process.env.GRIDSOME_PRODUCTION_URL;
  },
  watch: {
    tab(val) {
      if (this.tab === 0) {
        this.showAllEvents();
      } else {
        this.showEventsByType(val);
      }
    },
  },
  methods: {
    showAllEvents() {
      this.events = this.$page.events.edges;
    },
    showEventsByType(val) {
      this.events = this.$page.events.edges.filter((edge) => {
        return edge.node.category === val;
      });
    },
    formatDate(date) {
      return moment(date).format("MMM Do Y, h:mm a");
    },
    getEvents(searchText) {
      return this.events.filter((edge) => {
        return edge.node.title.toLowerCase().includes(searchText.toLowerCase());
      });
    },
  },
};
</script>

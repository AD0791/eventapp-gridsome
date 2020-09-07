<template>
<Layout>
    <h1>{{ $page.event.title }}</h1>
    <img width="600" :src="`${items.env}${$page.event.image}`" alt="not dyn" />
    <p>{{ $page.event.description }}</p>
</Layout>
</template>

<page-query>
query($id: ID!){
  event(id: $id){
    id
    title
    description
    duration
    price
    date
    image
  }
}
</page-query>

<script>
//const axios = require("axios");
export default {
    metaInfo() {
        return {
            title: this.$page.event.title,
        };
    },
    data() {
        return {
            items: {},
        };
    },
    mounted() {
        this.items["env"] = process.env.GRIDSOME_PRODUCTION_URL;
    },
};
</script>

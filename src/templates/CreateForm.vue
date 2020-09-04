<template>
  <Layout>
    <v-form ref="form">
      <v-text-field label="title" required></v-text-field>

      <v-textarea filled label="description"></v-textarea>

      <v-text-field label="price" required></v-text-field>
      <v-text-field label="duration" required></v-text-field>

      <v-select label="categories" required></v-select>
      <v-select label="images" required></v-select>

      <v-btn color="success" class="mr-4">Submit</v-btn>

      <v-btn color="red" @click="$router.push(`/`)">Cancel</v-btn>
    </v-form>
  </Layout>
</template>


<script>
export default {};
</script>

<style  scoped>
.v-textarea {
  text-decoration: green;
  color: green;
}

.v-select {
  text-decoration: green;
  color: green;
}

.v-text__field {
  text-decoration: green;
  color: green;
}
</style>
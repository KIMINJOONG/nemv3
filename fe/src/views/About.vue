<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-textarea outline v-model="ta"></v-textarea>
      <v-flex xs12></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      ta: "debug"
    };
  },
  mounted() {
    const a = { a: 1, b: 2 };
    this.ta = JSON.stringify(a);
  }
};
</script>


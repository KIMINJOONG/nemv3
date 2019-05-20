<template>
  <div>
    <h1>{{title}}</h1>
    <button @click="test">test</button>
    <v-btn :color="btnColor" @click="test">test</v-btn>
    <v-chip close color="primary">test</v-chip>
    <v-chip v-for="(chip, i) in chips" :color="chip.cl" :key="i">{{chip.name}}</v-chip>
  </div>
</template>

<script>
export default {
  name: "help",
  data() {
    return {
      title: "Vuetify.js",
      btnColor: "success",
      chips: [
        {
          cl: "primary",
          name: "aaa"
        },
        {
          cl: "secondary",
          name: "bbb"
        },
        {
          cl: "green",
          name: "ccc"
        },
        {
          cl: "warning",
          name: "ddd"
        }
      ]
    };
  },
  methods: {
    test() {
      (this.title = "변경됨"), (this.btnColor = "warning");
    }
  }
};
</script>

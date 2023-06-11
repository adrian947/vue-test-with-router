<template>
  <h1>About pokemon page</h1>
  <h2>{{ name }}</h2>
  <button @click="changeName">Cambiar Nombre</button>
</template>

<script>
export default {
  data() {
    return {
      name: "Adrian",
    };
  },

  methods: {
    changeName() {
      this.name = "Adrian Adducchio";
    },
  },

  beforeCreate() {
    console.log("🚀 ~ beforeCreate:");
  },
  created() {
    console.log("🚀 ~ created:");
    //peticiones http
  },
  beforeMount() {
    console.log("🚀 ~ beforeMount:");
  },
  mounted() {
    console.log("🚀 ~ mounted:");
  },
  beforeUpdate() {
    console.log("🚀 ~ beforeUpdate:");
  },
  updated() {
    console.log("🚀 ~ updated:");
  },
  activated() {
    console.log("🚀 ~ activated:");
  },
  deactivated() {
    console.log("🚀 ~ deactivated:");
  },
  beforeUnmount() {
    console.log("🚀 ~ beforeUnmount:");
  },
  unmounted() {
    console.log("🚀 ~ unmounted:");
  },
  errorCaptured() {
    console.log("🚀 ~ errorCaptured:");
  },
  renderTracked() {
    console.log("🚀 ~ renderTracked:");
  },
  renderTriggered() {
    console.log("🚀 ~ renderTriggered:");
  },
};
</script>

<style></style>

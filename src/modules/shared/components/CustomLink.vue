<template>
  <a v-if="isExternalLink" :href="link.to">{{ link.name }}</a>
  <router-link
    v-else
    :to="{ name: link.to, params: { pokemonid: link.id } }"
    v-slot="{ href, isActive }"
  >
    <a :href="href" :class="isActive ? 'is-active' : 'normal-link'">
      {{ link.name }}</a
    >
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isExternalLink() {
      return this.link.to.startsWith("http");
    },
  },
};
</script>

<style scoped>
.is-active {
  color: red;
}
.normal-link {
  color: #e1e1e1;
}
</style>

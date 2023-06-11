<template>
  <div class="links-containers">
    <!-- <router-link :to="{ name: 'home' }">list</router-link>
    <router-link :to="{ name: 'about' }">about</router-link>
    <router-link :to="{ name: 'pokemon-id', params: { pokemonid: 30 } }"
      >pokemon</router-link
    > -->
    <CustomLink v-for="link in links" :key="link.name" :link="link" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  data() {
    return {
      links: [
        { to: "home", name: "pokemons" },
        { to: "pokemon-id", name: "Por id", id: 151 },
        { to: "about", name: "About" },
        { to: "charapters", name: "PersonajesDBZ" },
        { to: "dbzabout", name: "DBZAbout" },
        { to: "https://google.com", name: "Google" },
      ],
    };
  },

  components: {
    CustomLink: defineAsyncComponent(() => import("./CustomLink.vue")),
  },
};
</script>

<style scoped>
.links-containers {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
a {
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  font-weight: bold;
}
.router-link-exact-active {
  color: red;
}
</style>

<template>
  <h1>Pokemon Page</h1>
  <span>{{ id }}</span>
  <div v-if="pokemon">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />

  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      // idPokemon: null,
      pokemon: null,
    };
  },

  created() {
    // const { pokemonid } = this.$route.params;
    // this.idPokemon = pokemonid;

    this.getPokemon();
  },
  watch: {
    id() {
      this.getPokemon();
    },
  },
  methods: {
    async getPokemon() {
      const url = `https://pokeapi.co/api/v2/pokemon/${this.id}`;
      try {
        const pokemon = await fetch(url).then((r) => r.json());
        this.pokemon = pokemon;
      } catch (error) {
        this.$router.push("/about");
      }
    },
  },
};
</script>

<style></style>

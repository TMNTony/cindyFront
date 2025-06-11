<template>
  <div class="bg-grey-50" id="about">
    <div
        class="container flex flex-col items-center py-16 md:py-20 lg:flex-row"
    >
      <div class="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
        <h2
            class="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
        >
          Who am I?
        </h2>
        <h4
            class="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
        >
          I'm Cynthia Chambless, a Horn player and educator
        </h4>
        <p class="font-body leading-relaxed text-grey-20" >{{about}}</p>
        <router-link :to="{name: 'bio'}" class="pt-6 text-primary">Full Bio</router-link>

        <h4
            class="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
        >
          My Mission Statement
        </h4>


        <p class="font-body leading-relaxed text-grey-20" v-html="mission" ></p>

        <div class="flex flex-col">
          <a class="pt-6 text-primary" href="http://www.tsoonline.org">Tuscaloosa Symphony Orchestra</a>
          <a class="pt-6 text-primary" href="https://www.hso.org">Huntsville Symphony Orchestra</a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Bio from "/src/views/Bio.vue";

export default {
  data() {
    return {
      about: this.bio.shortBio,
      mission: this.bio.mission,
      editingAbout: false,
      editingMission: false
    }
  },
  components: {
    Bio,
  },
  props: {
    bio: Object,

  },
};
</script>

<style></style>

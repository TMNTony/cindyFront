<template>
  <div class="bg-grey-50" id="about">
    <div
        class="container flex flex-col items-center py-16 md:py-20 lg:flex-row"
    >
      <div class="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">

        <h4
            class="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
        >
          My Mission Statement
        </h4>
        <p class="pt-6 font-body leading-relaxed text-grey-20" v-html="mission"></p>
      </div>
    </div>
  </div>
  <Statistics/>
  <Clients/>
</template>

<script>
import Statistics from "../components/Statistics.vue";
import Clients from "../components/Clients.vue";

export default {
  components: {
    Statistics,
    Clients
  },
  data() {
    return {
      mission: ""
    }
  },
  methods: {
    fetchMission() {
      this.mission = this.$store.getters.getAbout.mission
    }
  },
  created() {
    this.fetchMission()
  }
}
</script>
<template>
  <div class="bg-grey-50" id="bells">
    <div class="container py-16 md:py-20">
      <h4
          class="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
      >
        My Bell's Palsy Journey
      </h4>
      <p class="font-body leading-relaxed text-grey-20" v-html="content"></p>
    </div>
  </div>

</template>

<script>

export default {
  name: "bells",
  data() {
    return {
      mobileMenu: false,
      content: "",
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenu = !this.mobileMenu; // Toggle mobileMenu property
    },
    getContent() {
      this.content = this.$store.getters.getBellsContent
    },
  },
  created() {
    this.getContent()
  },
}


</script>
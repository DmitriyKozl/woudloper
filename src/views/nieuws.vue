<template>
  <div>
    <section class="container">
      <section class="news-banner"></section>

      <h1>Laatste nieuwtjes</h1>

      <div class="news">
        <Slider />
      </div>
    </section>
    <actualFooter />
  </div>
</template>

<script>
import Slider from '@/components/Slider';
import actualFooter from '@/components/actualFooter.vue';
export default {
  name: 'Nieuws',
  components: { Slider, actualFooter },
  props: {
    title: {
      type: String,
      required: true,
    },
    data() {
      return {
        open: false,
      };
    },
    methods: {
      activate() {
        this.on === true;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 0;
}
</style>

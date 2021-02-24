<template>
  <div>
    <section class="container">
      <section class="news-banner"></section>

      <h1>Laatste nieuwtjes</h1>

      <div class="news">
        <Slider />
      </div>
    </section>
  </div>
</template>

<script>
import Slider from '@/components/Slider';
export default {
  name: 'Nieuws',
  components: { Slider },
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

<style lang="scss" scoped></style>

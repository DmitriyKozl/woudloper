<template>
  <div>
    <section class="container newsList">
      <div class="news">
        <h1>Laatste nieuwtjes</h1>

        <Slider />

        <h1>Meer nieuws</h1>
        <div class="newsList">
          <div class="block">
            <div class="block__item"></div>
            <div class="block__item"></div>
            <div class="block__item"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Slider from '@/components/Slider';
export default {
  name: 'Nieuws',
  components: { Slider },
};
</script>

<style lang="scss" scoped></style>

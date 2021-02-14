<template>
  <div class="c-slide">
    <h2>{{ slide.newsTitle }}</h2>
    <p>
      {{ slide.newsContent }}
    </p>
    <a class="more">Lees verder</a>
  </div>
</template>

<script>
export default {
  name: 'Slide',
  props: {
    slide: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
.c-slide {
  height: 15rem;
  //   box-shadow: $shadow;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  border: 1px solid white;
  text-align: left;
  text-align: left;
  padding: 1rem;
  background-color: white;
  border-radius: 15px;
  border-bottom-left-radius: 0;
  width: calc((100vw / 3) - 1.3rem);
  margin-right: 1rem;
  flex-shrink: 0;
  scroll-snap-align: start;

  @media screen and (max-width: 900px) {
    width: calc(100% / 2);
  }
}
</style>

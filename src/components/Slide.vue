<template>
  <div class="block">
    <div class="block__title">
      <h2>{{ slide.newsTitle }}</h2>
    </div>
    <div class="block__item">
      <p class="text">
        {{ slide.newsContent }}<br /><br />
        <a href="" class="more">Lees verder</a>
      </p>

      <p class="fullText">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium,
        consectetur magni! Obcaecati accusantium eos vero illo ab ut nostrum
        sapiente eum. Odio iste reiciendis obcaecati dolores doloremque
        praesentium ea explicabo. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Accusantium, consectetur magni! Obcaecati accusantium
        eos vero illo ab ut nostrum sapiente eum. Odio iste reiciendis obcaecati
        dolores doloremque praesentium ea explicabo.
      </p>
    </div>
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

<style lang="scss"></style>

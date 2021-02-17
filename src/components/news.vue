<template>
  <div class="preview_container">
    <section
      v-for="image in bgImages"
      :key="image.id"
      @click="this.$router.push(image.path)"
    >
      <div
        :style="{
          'background-image': 'url(' + require('@/assets/' + image.image) + ')',
        }"
        class="preview_img"
      ></div>
      <div class="titleImage">
        <h2>{{ image.text }}</h2>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      bgImages: [
        {
          id: 1,
          path: '/totem',
          text: 'Brief Herstkamp',
          image: 'images/autumn.jpg',
        },
        {
          id: 2,
          path: '/totem',
          text: 'voorstelling Leiding',
          image: 'images/scout.jpg',
        },
        {
          id: 3,
          path: '/totem',
          text: 'Inschrijving 2020-2021',
          image: 'images/letter.jpg',
        },
        {
          id: 4,
          path: '/totem',
          text: 'Info begin scoutsjaar',
          image: 'images/desk.jpg',
        },
        {
          id: 5,
          path: '/totem',
          text: 'Totem namen',
          image: 'images/totem.jpg',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>

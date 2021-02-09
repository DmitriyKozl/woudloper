<template>
  <div class="preview_container">
    <section
      v-for="image in bgImages"
      :key="image.id"
      @click="this.$router.push(image.name)"
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
          name: 'Totem',
          text: 'Brief Herstkamp',
          image: 'images/autumn.jpg',
        },
        {
          id: 2,
          name: 'Totem',
          text: 'voorstelling Leiding',
          image: 'images/scout.jpg',
        },
        {
          id: 3,
          name: 'Totem',
          text: 'Inschrijving 2020-2021',
          image: 'images/letter.jpg',
        },
        {
          id: 4,
          name: 'Totem',
          text: 'Info begin scoutsjaar',
          image: 'images/desk.jpg',
        },
        {
          id: 5,
          name: 'Totem',
          text: 'Totem namen',
          image: 'images/totem.jpg',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@mixin flexCenter($direction) {
  display: flex;
  flex-direction: $direction;
  justify-content: center;
  align-content: center;
}
.preview_container {
  // @include flexCenter(row);
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  padding: 6rem 0;

  section {
    @include flexCenter(row);
    padding: 2rem;
    flex: 1 1 300px;
    position: relative;

    .preview_img {
      height: 400px;
      width: 200px;
      width: 100%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      padding: 0 6rem;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
        0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
        0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
    }
    .titleImage {
      /* top: 40%; */
      opacity: 0;
      position: absolute;
      height: 400px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;

      h2 {
        width: 90%;
        font-size: 2.3rem;
        margin: auto;
        color: #caf0f8;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.07),
          0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07),
          0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07),
          0 32px 64px rgba(0, 0, 0, 0.07);
      }
    }
  }
  section:hover .titleImage {
    transition: 1s ease;
    opacity: 1;
  }
  section:hover .preview_img {
    transition: 1s ease;
    // opacity: 0.5;
    filter: blur(5px);
  }
}
</style>

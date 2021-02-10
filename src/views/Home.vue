<template>
  <div>
    <section class="banner content">
      <div class="banner">
        <div class="banner__text">
          <h2>Scoutsgroep</h2>
          <p>Lorem ipsum dolor sit amet. amet.</p>
        </div>
      </div>
    </section>
    <News />
    <div class="preview_container">
      <section
        v-for="image in bgImages"
        :key="image.id"
        @click="this.$router.push(image.name)"
      >
        <div
          :style="{
            'background-image':
              'url(' + require('@/assets/' + image.image) + ')',
          }"
          class="preview_img"
        ></div>
        <div class="titleImage">
          <h2>{{ image.text }}</h2>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
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
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');

@mixin flexCentered($direction) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
}

.banner {
  background-image: url('../assets/images/forest.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  background-attachment: fixed;
  width: 100%;
  height: 50vh;

  &__text {
    h2,
    p {
      // margin: 0;
      font-size: 3rem;
      font-family: 'Nanum Gothic';
      font-weight: 600;
      // color: rgba(255, 255, 255, 0.787);
      color: white;
    }
  }
}

.content {
  @include flexCentered(column);
}
</style>

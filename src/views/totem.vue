<template>
  <div>
    <header><h1>Bestuur</h1></header>
    <div class="more_container" :class="{ active: on }">
      <div class="about">
        <div class="image">
          <img src="@/assets/images/Bedachtzame.jpeg" alt="" />
        </div>
        <div class="about_text">
          <h1>Bedachtzame Tapir</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            tempora libero consequuntur explicabo reprehenderit in amet ratione
            harum sed vero.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aliquid tempora libero consequuntur explicabo reprehenderit in
            amet ratione harum sed vero.
          </p>
        </div>
      </div>
    </div>
    <div class="preview_container">
      <section v-for="image in bgImages" @click="activate()" :key="image.id">
        <div
          :style="{
            'background-image': 'url(' + require('@/assets/' + image.src) + ')',
          }"
          class="preview_img"
        ></div>
        <div class="titleImage">
          <h2>{{ image.title }}</h2>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Totem',
  components: {},
  data() {
    return {
      on: false,

      bgImages: [
        {
          id: 1,
          src: 'images/Bedachtzame.jpeg',
          title: 'Bedachtzame Tapir',
          name: 'tapir',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempora libero consequuntur explicabo reprehenderit in amet ratione harum sed vero.',
        },
        {
          id: 2,
          src: 'images/Bedachtzame.jpeg',
          title: 'Bedachtzame Tapir',
          name: 'tapir',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempora libero consequuntur explicabo reprehenderit in amet ratione harum sed vero.',
        },
        {
          id: 3,
          src: 'images/Bedachtzame.jpeg',
          title: 'Bedachtzame Tapir',
          name: 'tapir',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempora libero consequuntur explicabo reprehenderit in amet ratione harum sed vero.',
        },
        {
          id: 4,
          src: 'images/Bedachtzame.jpeg',
          title: 'Bedachtzame Tapir',
          name: 'tapir',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempora libero consequuntur explicabo reprehenderit in amet ratione harum sed vero.',
        },
        {
          id: 5,
          src: 'images/Bedachtzame.jpeg',
          title: 'Bedachtzame Tapir',
          name: 'tapir',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempora libero consequuntur explicabo reprehenderit in amet ratione harum sed vero.',
        },
        {
          id: 6,
          src: 'images/Bedachtzame.jpeg',
          title: 'Bedachtzame Tapir',
          name: 'tapir',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempora libero consequuntur explicabo reprehenderit in amet ratione harum sed vero.',
        },
      ],
    };
  },
  methods: {
    activate() {
      this.on = true;
    },
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
header {
  @include flexCenter(row);
  width: 100%;
  height: 150px;
  background-color: #264653;
  h1 {
    font-size: 4rem;
    color: white;
    margin: 2rem auto auto 10rem;
  }
}
.more_container {
  display: none;
}
.more_container.active {
  width: 100%;
  height: 100vh;
  background-color: #264653b6;
  position: absolute;
  z-index: 2;
  padding: 6rem 0;
  @include flexCenter(row);
  .about {
    @include flexCenter(row);
    padding: 3rem;
    width: 60%;
    height: 70%;
    background-color: #264653e7;
    margin: auto;
    .image {
      img {
        border-radius: 50%;
      }
    }
    &_text {
      text-align: left;
      margin: 0 auto auto 2rem;
      h1 {
        color: white;
        font-size: 4rem;
        margin-top: 0;
      }
      p {
        color: white;
        font-size: 2rem;
      }
    }
  }
}
</style>

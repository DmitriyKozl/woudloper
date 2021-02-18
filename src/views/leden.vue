<template>
  <div>
    <section class="banner_leden ">
      <div class="banner_content">
        <div class="banner__text">
          <h2>Gek zijn doet geen zeer!</h2>
        </div>
        <div class="teamText">
          <h2>Maak kennis met de tofste bende allertijden</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            incidunt consequatur reprehenderit maxime obcaecati voluptatibus
            omnis possimus illum, tempore nemo molestias hic, doloribus eius
            aliquam alias necessitatibus est vel ullam.
          </p>
        </div>
      </div>
    </section>

    <section class="leden">
      <div class="filter">
        <FilterNav />
      </div>
      <div class="bestuur">
        <h1>Bestuur</h1>
        <div class="preview_container_totem">
          <div
            class="section"
            v-for="image in bgImages"
            @click="activate()"
            :key="image"
          >
            <div
              :style="{
                'background-image':
                  'url(' + require('@/assets/' + image.src) + ')',
              }"
              class="preview_img_totem"
            ></div>
            <div class="titleImage_totem">
              <h2>{{ image.title }}</h2>
            </div>
          </div>
        </div>
      </div>
      <!-- 
      <div class="Eenheidsleiding">
        <h1>Eenheidsleiding</h1>
        <div class="preview_container_totem">
          <div
            class="section"
            v-for="image in bgImages"
            @click="activate()"
            :key="image"
          >
            <div
              :style="{
                'background-image':
                  'url(' + require('@/assets/' + image.src) + ')',
              }"
              class="preview_img_totem"
            ></div>
            <div class="titleImage_totem">
              <h2>{{ image.title }}</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="Bevers">
        <h1>Bevers</h1>
        <div class="preview_container_totem">
          <div
            class="section"
            v-for="image in bgImages"
            @click="activate()"
            :key="image"
          >
            <div
              :style="{
                'background-image':
                  'url(' + require('@/assets/' + image.src) + ')',
              }"
              class="preview_img_totem"
            ></div>
            <div class="titleImage_totem">
              <h2>{{ image.title }}</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="Welpen">
        <h1>Welpen</h1>
        <div class="preview_container_totem">
          <div
            class="section"
            v-for="image in bgImages"
            @click="activate()"
            :key="image"
          >
            <div
              :style="{
                'background-image':
                  'url(' + require('@/assets/' + image.src) + ')',
              }"
              class="preview_img_totem"
            ></div>
            <div class="titleImage_totem">
              <h2>{{ image.title }}</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="JVG's">
        <h1>JVG's</h1>
        <div class="preview_container_totem">
          <div
            class="section"
            v-for="image in bgImages"
            @click="activate()"
            :key="image"
          >
            <div
              :style="{
                'background-image':
                  'url(' + require('@/assets/' + image.src) + ')',
              }"
              class="preview_img_totem"
            ></div>
            <div class="titleImage_totem">
              <h2>{{ image.title }}</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="VG's">
        <h1>VG's</h1>
        <div class="preview_container_totem">
          <div
            class="section"
            v-for="image in bgImages"
            @click="activate()"
            :key="image"
          >
            <div
              :style="{
                'background-image':
                  'url(' + require('@/assets/' + image.src) + ')',
              }"
              class="preview_img_totem"
            ></div>
            <div class="titleImage_totem">
              <h2>{{ image.title }}</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="Seniors">
        <h1>Seniors</h1>
        <div class="preview_container_totem">
          <div
            class="section"
            v-for="image in bgImages"
            @click="activate()"
            :key="image"
          >
            <div
              :style="{
                'background-image':
                  'url(' + require('@/assets/' + image.src) + ')',
              }"
              class="preview_img_totem"
            ></div>
            <div class="titleImage_totem">
              <h2>{{ image.title }}</h2>
            </div>
          </div>
        </div>
      </div> -->
    </section>
    <footer><p>blablabla</p></footer>
    <!-- <div class="totem">
      <div class="more_container" :class="{ active: on }">
        <div class="about">
          <div class="image">
            <img src="@/assets/images/Bedachtzame.jpeg" alt="" />
          </div>
          <div class="about_text">
            <a class="closebtn" @click="close()">&times;</a>

            <h1>Bedachtzame Tapir</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              tempora libero consequuntur explicabo reprehenderit in amet
              ratione harum sed vero.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aliquid tempora libero consequuntur explicabo
              reprehenderit in amet ratione harum sed vero.
            </p>
          </div>
        </div>
      </div> -->
    <!-- <select
        @change="onchange(selected)"
        v-model="selected"
        class="selectContainer-control"
        id="subject"
        name="subject"
        required
      >
        <option
          v-for="option in options"
          v-bind:key="option.value"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </select> -->
  </div>
</template>

<script>
import FilterNav from '@/components/FilterNav.vue';
export default {
  name: 'Leden',
  props: {
    title: {
      type: String,
      required: true,
    },
  },

  components: { FilterNav },
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
      ],
    };
  },
  methods: {
    activate() {
      this.on = true;
    },
    close() {
      this.on = false;
    },
    onchange: function(val) {
      for (let i = 0; i < this.options.length; i++) {
        if (this.options[i].value === val) {
          return this.options[i].input;
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
@mixin flexCenter($direction) {
  display: flex;
  flex-direction: $direction;
  justify-content: center;
  align-content: center;
}
.banner_leden {
  background-image: url('../assets/images/hut.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
}
.banner_content {
  max-width: 1200px;
  height: 500px;
  @include flexCenter(row);
  margin: auto;

  .banner__text {
    @include flexCenter(row);
    width: 40%;
    margin: auto;

    h2 {
      font-size: 5rem;
      font-family: 'Nanum Gothic';
      font-weight: 600;
      color: white;
      // color: white;
      text-align: left;
    }
  }
  .teamText {
    text-align: left;
    padding: 2rem;
    color: white;
    width: 60%;
    margin: auto 0;

    h2 {
      font-size: 3rem;
      text-align: left;
      font-weight: 300;
      margin: 0;
      width: 75%;
    }
    p {
      font-size: 1.5rem;
    }
  }
}
.leden {
  padding: 4rem 0;
  // background-color: #264653;

  ::-webkit-scrollbar-track {
    // box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #264653;
    border-radius: 15px;
  }

  ::-webkit-scrollbar {
    height: 0.3rem;
    // background-color: #264653;
    background-color: white;
    border-radius: 15px;
  }

  ::-webkit-scrollbar-thumb {
    // background-color: #264653;
    background-color: white;
    border-radius: 15px;
  }
  .bestuur {
    width: 100%;

    h1 {
      margin-top: 0;
      text-align: center;

      &::after {
        display: block;
        content: ' ';
        width: 50px;
        height: 5px;
        background-color: #264653;
        margin: 1rem auto;
      }
    }
  }
  .preview_container_totem {
    @include flexCenter(row);
    max-width: 1400px;
    margin: auto;
    position: relative;

    height: 100%;
    // background-color: white;
    flex-wrap: wrap;

    .section {
      @include flexCenter(column);
      margin: 2rem 3rem;
      flex: 1 1 200px;
      border-bottom: 3px solid #264653;
      max-width: 400px;

      .preview_img_totem {
        height: 400px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        padding: 1rem 10rem;
      }
      .titleImage_totem {
        /* top: 40%; */
        // opacity: 0;
        // background-color: #264653;
        width: 200px;
        margin: auto;
        h2 {
          font-size: 1.3rem;
          padding: 1rem 0;
          color: #264653;
        }
      }
    }
  }

  h1 {
    font-size: 3rem;
    text-align: left;
    color: #264653;
  }
}

.more_container {
  display: none;
}
.more_container.active {
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;

  padding: 3rem 0 6rem 0;
  @include flexCenter(row);
  .about {
    @include flexCenter(row);
    padding: 3rem;
    position: fixed;
    bottom: 0;
    z-index: 2;

    width: 60%;
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

  .closebtn {
    position: absolute;
    top: 1rem;
    right: 2rem;
    font-size: 36px;
    margin-left: 50px;
    color: white;
    cursor: pointer;
  }
  // .select
  // @include flexCenter(row);
}

.selectContainer {
  @include flexCenter(column);
  text-align: left;
  color: white;
  margin: 1rem auto;
  &-control {
    background-color: #264653;
    border: none;
    outline: none;
    color: white;
    margin: 0;
    padding: 0;
    font-size: 4rem;
    width: 100%;
  }
  label {
    font-size: 1.2rem;
  }
}
footer {
  height: 75px;
  background-color: #264653;
  color: white;
  text-align: center;
  @include flexCenter(row);
}
.filter {
  position: relative;
}
</style>

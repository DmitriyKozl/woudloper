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
      <div class="custom-shape-divider-bottom-1614764402">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
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
.custom-shape-divider-bottom-1614764402 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1614764402 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 116px;
  transform: rotateY(180deg);
}

.custom-shape-divider-bottom-1614764402 .shape-fill {
  fill: #ffffff;
}
</style>

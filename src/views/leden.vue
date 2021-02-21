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

<style scoped lang="scss"></style>

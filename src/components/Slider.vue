<template>
  <div class="c-slides">
    <button
      class="c-slides__btn c-slides__btn--left"
      @click="clickLeft"
    ></button>
    <div class="c-slides__container" @scroll="sliderScroll" ref="slider">
      <Slide v-for="slide in slides" :key="slide.index" :slide="slide" />
    </div>
    <button
      class="c-slides__btn c-slides__btn--right"
      @click="clickRight"
    ></button>
  </div>
</template>

<script>
import Slide from '@/components/Slide';
export default {
  name: 'Slider',
  components: { Slide },
  data() {
    return {
      slides: [
        {
          newsTitle: 'lorem1',
          newsContent: 'lorem ipsum1',
        },
        {
          newsTitle: 'lorem2',
          newsContent: 'lorem ipsum2',
        },
        {
          newsTitle: 'lorem3',
          newsContent: 'lorem ipsum3',
        },
        {
          newsTitle: 'lorem4',
          newsContent: 'lorem ipsum4',
        },
        {
          newsTitle: 'lorem5',
          newsContent: 'lorem ipsum5',
        },
        {
          newsTitle: 'lorem6',
          newsContent: 'lorem ipsum6',
        },
      ],
      sliderWidth: 0,
      slideWidth: 0,
      currentSlide: 0,
    };
  },
  mounted() {
    this.calcWidths();
    window.addEventListener('resize', this.calcWidths);
  },
  unmounted() {
    window.removeEventListener('resize', this.calcWidths);
  },
  computed: {
    activeSlide() {
      return this.slides[this.currentSlide];
    },
    slidesPerPage() {
      return Math.round(this.sliderWidth / this.slideWidth);
    },
    numberOfPages() {
      return this.slides.length + 1 - this.slidesPerPage;
    },
  },
  methods: {
    calcWidths() {
      this.sliderWidth = this.$refs.slider.offsetWidth;
      this.slideWidth = this.$refs.slider.children[0].offsetWidth;
    },
    clickLeft() {
      console.log(this.$refs.slider.scrollLeft);
      this.$refs.slider.scrollLeft =
        this.$refs.slider.scrollLeft - this.slideWidth;
    },
    clickRight() {
      this.$refs.slider.scrollLeft =
        this.$refs.slider.scrollLeft + this.slideWidth;
    },
    slideTo(slideIndex) {
      this.$refs.slider.scrollLeft = slideIndex * this.slideWidth;
    },
    sliderScroll(event) {
      const scrollPos = event.target.scrollLeft;
      if (scrollPos === 0) {
        this.currentSlide = 0;
      }
      if (scrollPos % this.slideWidth === 0) {
        this.currentSlide = scrollPos / this.slideWidth;
      }
    },
  },
};
</script>

<style lang="scss">
.c-slides {
  position: relative;
  width: 100%;
  overflow-x: hidden;
  margin: 2rem 0 2rem;

  &__container {
    display: grid;
    grid-template-columns: repeat(6, calc((100% - 3rem) / 3));
    grid-column-gap: 1.5rem;
    overflow-x: scroll;
    width: 70%;
    scroll-snap-type: x mandatory;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    scrollbar-color: transparent transparent;
    margin: auto;

    &::-webkit-scrollbar {
      width: 0 !important;
      display: none;
    }
  }

  .c-slides__btn {
    width: 48px;
    height: 48px;
    border-color: #000;
    position: absolute;
    top: 50%;
    margin-top: -31px;
    cursor: pointer;
    border-top: none;
    border-right: none;
    background-color: white;

    &--right {
      border-bottom: 6px solid;
      border-left: 6px solid;
      transform: rotate(-135deg);
      right: 2rem;
    }

    &--left {
      border-bottom: 6px solid;
      border-left: 6px solid;
      transform: rotate(45deg);
      left: 2rem;
    }
  }
}
</style>

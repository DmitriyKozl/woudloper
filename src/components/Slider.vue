<template>
  <div class="c-slides">
    <button class="c-slides__btn c-slides__btn--left" @click="clickLeft">
      &#10162;
    </button>
    <div class="c-slides__container" @scroll="sliderScroll" ref="slider">
      <Slide v-for="slide in slides" :key="slide.index" :slide="slide" />
    </div>
    <button class="c-slides__btn c-slides__btn--right" @click="clickRight">
      &#10162;
    </button>
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
  //   width: 100%;
  overflow-x: hidden;
  background-color: #264653;

  &__container {
    display: flex;
    align-items: center;
    overflow-x: scroll;
    width: 100vw;
    scroll-snap-type: x mandatory;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    scrollbar-color: transparent transparent;
    height: 25rem;
    margin-left: 1rem;

    &::-webkit-scrollbar {
      width: 0 !important;
      display: none;
    }
  }

  .c-slides__btn {
    color: white;
    font-size: 3rem;
    width: 4rem;
    height: 4rem;
    background-color: #264653;
    border-radius: 50%;
    border: none;
    outline: none;
    position: absolute;
    top: 8%;
    margin-top: -1rem;
    left: 2rem;
    cursor: pointer;

    &--right {
      right: 2rem;
      left: unset;
    }

    &--left {
      transform: rotate(180deg);
    }
  }
}
</style>

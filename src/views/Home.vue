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
    <WieZijnWe />
    <News />
    <Mail />
  </div>
</template>

<script>
import News from '@/components/News';
import WieZijnWe from '@/components/wie-zijn-we';

import Mail from '@/components/Mail';
export default {
  name: 'Home',
  components: { Mail, News, WieZijnWe },
  data() {
    return {};
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
  height: 70vh;

  &__text {
    h2,
    p {
      // margin: 0;
      font-size: 3rem;
      font-family: 'Nanum Gothic';
      font-weight: 600;
      color: rgba(255, 255, 255, 0.787);
      // color: white;
    }
  }
}

.content {
  @include flexCentered(column);
}
</style>

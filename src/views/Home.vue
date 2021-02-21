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
<style lang="scss"></style>

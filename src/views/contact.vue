<template>
  <ContactMap />
  <div class="containerContact">
    <div class="containerContact-img">
      <img src="@/assets/images/tent.jpg" alt="" />
    </div>
    <ContactForm />
  </div>
</template>

<script>
import ContactMap from '@/components/ContactMap.vue';
import ContactForm from '@/components/ContactForm.vue';
export default {
  name: 'Contact',
  components: {
    ContactForm,
    ContactMap,
  },
  methods: {
    activate() {
      this.mailFormIsActive = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');

@mixin flexCenter() {
  display: flex;
  justify-content: center;
}
.containerContact {
  background-color: #264653;
  // border: solid 0.2rem #264653;
  height: 100vh;
  @include flexCenter();
  &-img {
    width: 40%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  h1 {
    width: 70%;
    color: white;
    text-align: left;
    margin: 2rem auto;
  }
}
</style>

<template>
  <div class="containerContact">
    <div class="containerContact-img">
      <img src="@/assets/images/tent.jpg" alt="" />
    </div>
    <ContactForm />
  </div>

  <footer>
    <div class="footerContent">
      <div class="footerText">
        <h1>Of kom eens langs!</h1>
      </div>
      <ContactMap />
      <div class="contactInfo">
        <div class="left">
          <h3>vzw Woudloper</h3>
          <ul>
            <li>0472/204899</li>
            <li>Houte 27, 9860 Balegem</li>
            <li>info@woudloper.be</li>
          </ul>
        </div>
        <div class="right">
          <h3>Scoutsgroep Woudloper</h3>

          <ul>
            <li>0479/795956</li>
            <li>Gijzelstraat 12, 9031 Drongen</li>
            <li>eenheidsleiding@woudloper.be</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
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
  @include flexCenter();
  &-img {
    width: 40%;

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
footer {
  @include flexCenter();
  flex-direction: column;

  .footerContent {
    flex: 1;
    .footerText {
      height: 200px;
      @include flexCenter();
      background-color: #264653;
      color: white;
      h1 {
        margin: auto;
        font-size: 3rem;

        &::after {
          display: block;
          content: ' ';
          width: 100px;
          height: 5px;
          background-color: white;
          margin: 1rem auto;
        }
      }
    }
  }
}
.contactInfo {
  @include flexCenter();
  .left,
  .right {
    background-color: #264653;

    padding: 2rem;
    @include flexCenter();
    flex-direction: column;
    width: 50%;
    h3 {
      font-size: 2rem;
      width: 100%;
      margin: 0;
      color: white;

      &::after {
        display: block;
        content: ' ';
        width: 50px;
        height: 5px;
        background-color: white;
        margin: 1rem auto;
      }
    }
  }
  ul {
    @include flexCenter();
    flex-direction: column;

    padding: 2rem 3rem 0;

    list-style: none;
    li {
      width: 100%;
      margin-bottom: 1rem;
      color: white;
    }
  }
}
</style>

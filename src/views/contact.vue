<template>
  <div class="contact">
    <div class="contact-img">
      <img src="@/assets/images/tent.jpg" alt="" />
    </div>
    <ContactForm />
  </div>

  <footer>
    <div class="custom-shape-divider-top-1614761612">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
      </svg>
    </div>
    <div class="footerContent">
      <div class="footerText">
        <h2>Of kom eens langs!</h2>
      </div>
      <ContactMap />
      <div class="contactInfo">
        <div class="left">
          <h4>vzw Woudloper</h4>
          <ul>
            <li>0472/204899</li>
            <li>Houte 27, 9860 Balegem</li>
            <li>info@woudloper.be</li>
          </ul>
        </div>
        <div class="right">
          <h4>Scoutsgroep Woudloper</h4>

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

<style lang="scss" scoped></style>

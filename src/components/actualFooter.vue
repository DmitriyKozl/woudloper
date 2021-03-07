<template>
  <div>
    <div class="footer__company">
      <span class="footer__company-name">Scoutsgroep Woudloper</span>
      <img class="logo" src="../assets/images/icom.png" alt="Woudloper logo" />
    </div>

    <nav class="footer__nav">
      <a href="#" target="blank" rel="noreferrer noopener">Home</a>
      <a href="#" target="blank" rel="noreferrer noopener">Nieuws</a>
      <a href="#" target="blank" rel="noreferrer noopener">Contact</a>
      <a href="#" target="blank" rel="noreferrer noopener">Agenda</a>
      <a href="#" target="blank" rel="noreferrer noopener">Praktisch</a>
      <a href="#" target="blank" rel="noreferrer noopener">Leden</a>
    </nav>

    <section class="footer__find-us">
      <div class="footer__social-media">
        <p class="social-media__where-to-find">Where are we hiding?</p>
        <!-- <a
          href="https://en.wikipedia.org/wiki/Facebook"
          class="fa fa-facebook"
          target="blank"
          rel="noreferrer noopener"
        ></a> -->
        <font-awesome-icon :icon="['fas', 'user-secret']" />
        <a
          href="https://en.wikipedia.org/wiki/LinkedIn"
          class="fa fa-instagram"
          target="blank"
          rel="noreferrer noopener"
        ></a>
        <a
          href="https://en.wikipedia.org/wiki/Twitter"
          class="fa fa-twitter"
          target="blank"
          rel="noreferrer noopener"
        ></a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'actualFooter',
};
</script>

<style lang="scss">
.logo {
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.5rem;
}

.footer__nav {
  display: flex;
  flex-direction: column;
  width: 17.3rem;
  margin: auto;
  margin-bottom: 1.5rem;
}

.footer__nav a {
  text-decoration: none;
  font-size: 0.6rem;
  color: gray;
  padding-bottom: 0.4rem;
  border-bottom: solid gray 0.05rem;
  margin-bottom: 0.8rem;
}

.footer__company {
  margin: 1rem 0;
}
</style>

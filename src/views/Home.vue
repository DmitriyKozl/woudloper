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
    <News />
    <Footer />

    <!-- 
    <section class="welcome">
    <div class="news">
      <div class="test">
        <div id="container">
          <div class="sub-container bottom">
            <div class="slide_container bottom">
              <div class="slide One">
                <p class="slider__item">totemnaam</p>
              </div>
              <div class="slide Two">
                <p class="slider__item">totemnaam1</p>
              </div>
              <div class="slide Three">
                <p class="slider__item">totemnaam2</p>
              </div>
              <div class="slide Four">
                <p class="slider__item">totemnaam3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    

   
    


      <div class="content">
      <div class="content__text">
        <h2>Bizon en Panda</h2>
        <p>
          De scoutsgroep werd in 1979 opgericht door Bizon en Panda, nu twee
          oud scouts die nog steeds op elk van onze feesten aanwezig zijn.
          Zij kregen gelukkig al snel hulp en steun van vele andere
          enthousiaste leiders. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eum aspernatur, officia
          ipsum, fugit odit ad voluptates quibusdam facilis minus, possimus voluptatum nam! Deserunt,
        </p>
        <h2>klein maaar fijn</h2>
        <p>
          De leidersgroep van vandaag bestaat uit de allertofste leiders die
          er zijn! ondanks onze jaarlijkse groei proberen we onze groep
          klein te houden, zodat elke tak een eenheid vormt op kamp jaar in
          jaar uit Zo kunnen jong en oud het beste van elkaar leren. Alle
          Woudlopers leren zo respect te hebben voor elkaar, de natuur en
          die
          r.
        </p>
      </div>
    </div>
  </div>
  <div id="container">
    <div class="sub-container">
      <div class="slide_container top">
        <div class="slide One">
          <p class="slider__item">Contact formulier</p>
        </div>
        <div class="slide Two">
          <p class="slider__item">mailing lijst</p>
        </div>
        <div class="slide Three">
          <p class="slider__item">wachtlijst</p>
        </div>
      </div>
      <button onclick="nextSlide()" class="citation-slider__nav-btn citation-slider__next">
        Next
      </button>
      <button onclick="previousSlide()" class="citation-slider__nav-btn citation-slider__previous hide">
        Previous
      </button>
    </div>
  </div>
  </section>


  <section class="welcome_mobile">
      
    
    <div class="content">
      <div class="content__text">
        <h2>Bizon en Panda</h2>
        <p>
          De scoutsgroep werd in 1979 opgericht door Bizon en Panda, nu twee
          oud scouts die nog steeds op elk van onze feesten aanwezig zijn.
          Zij kregen gelukkig al snel hulp en steun van vele andere
          enthousiaste leiders. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eum aspernatur, officia
          ipsum, fugit odit ad voluptates quibusdam facilis minus, possimus voluptatum nam! Deserunt,
        </p>
        <h2>klein maaar fijn</h2>
        <p>
          De leidersgroep van vandaag bestaat uit de allertofste leiders die
          er zijn! ondanks onze jaarlijkse groei proberen we onze groep
          klein te houden, zodat elke tak een eenheid vormt op kamp jaar in
          jaar uit Zo kunnen jong en oud het beste van elkaar leren. Alle
          Woudlopers leren zo respect te hebben voor elkaar, de natuur en
          die
          r.
        </p>
      </div>
    </div>
  </section>
  <section class="news_mobile">

    <div id="container">
      <div class="sub-container">
        <div class="slide_container">
          <div class="slide One">
            <p class="slider__item">totemnaam</p>
          </div>
          <div class="slide Two">
            <p class="slider__item">totemnaam1</p>
          </div>
          <div class="slide Three">
            <p class="slider__item">totemnaam2</p>
          </div>
          <div class="slide Four">
            <p class="slider__item">totemnaam3</p>
          </div>
        </div>
        <button onclick="nextSlide()" class="citation-slider__nav-btn citation-slider__next">
          Next
        </button>
        <button onclick="previousSlide()" class="citation-slider__nav-btn citation-slider__previous hide">
          Previous
        </button>
      </div>
    </div>

    <div id="container">

      <div class="sub-container">
        <div class="slide_container">
          <div class="slide One">
            <p class="slider__item">Contact formulier</p>
          </div>
          <div class="slide Two">
            <p class="slider__item">mailing lijst</p>
          </div>
          <div class="slide Three">
            <p class="slider__item">wachtlijst</p>
          </div>
        </div>
        <button onclick="nextSlide()" class="citation-slider__nav-btn citation-slider__next">
          Next
        </button>
        <button onclick="previousSlide()" class="citation-slider__nav-btn citation-slider__previous hide">
          Previous
        </button>
      </div>
    </div>


    <div id="container">

      <div class="sub-container">
        <div class="slide_container">
          <div class="slide One">
            <p class="slider__item">Brief Herstkamp</p>
          </div>
          <div class="slide Two">
            <p class="slider__item">voorstelling Leiding</p>
          </div>
          <div class="slide Three">
            <p class="slider__item">Inschrijving 2020-2021</p>
          </div>
          <div class="slide Four">
            <p class="slider__item">Info begin scoutsjaar</p>
          </div>
        </div>
        <button onclick="nextSlide()" class="citation-slider__nav-btn citation-slider__next">
          Next
        </button>
        <button onclick="previousSlide()" class="citation-slider__nav-btn citation-slider__previous hide">
          Previous
        </button>
      </div>
    </div> 
  </section> -->
  </div>
</template>

<script>
import News from "@/components/news.vue";
import Footer from "@/components/contact.vue";

export default {
  name: "Home",
  components: {
    News,
    Footer
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap");

@mixin flexCentered($direction) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
}

.banner {
  background-image: url("../assets/images/forest.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  background-attachment: fixed;
  width: 100%;
  height: 50vh;

  &__text {
    h2,
    p {
      // margin: 0;
      font-size: 3rem;
      font-family: "Nanum Gothic";
      font-weight: 600;
      // color: rgba(255, 255, 255, 0.787);
      color: white;
    }
  }
}

.content {
  @include flexCentered(column);
}
</style>

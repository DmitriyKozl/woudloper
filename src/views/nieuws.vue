<template>
  <div>
    <Header />
    <section class="news">
      <section class="newest">
        <div class="news__header">
          <p>Laatste nieuwtjes</p>
        </div>
        <div class="newest__items">
          <div class="newest__item">
            <div class="newest-item__text">
              <h3>Voorstelling Leiding</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium, consectetur magni! Obcaecati accusantium eos vero
                illo ab ut nostrum sapiente eum. Odio iste reiciendis obcaecati
                dolores doloremque praesentium ea explicabo.
              </p>
              <button type="button">Lees verder</button>
            </div>
          </div>
          <div class="newest__item">
            <div class="newest-item__text">
              <h3>Brief Herfstkamp</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                fugiat sed, natus odio necessitatibus, harum aliquid dolor
                officiis molestias qui sit sequi distinctio, et nemo accusamus
                voluptatem enim commodi illo.
              </p>
              <button type="button">Lees verder</button>
            </div>
          </div>
        </div>
      </section>
      <section class="older">
        <div class="news__header">
          <p>Meer nieuws</p>
        </div>
        <div class="older__items">
          <div class="older__item"></div>
          <div class="older__item"></div>
          <div class="next-item">
            <p>Lees meer nieuws</p>
            <span class="arrow">&#10140;</span>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header';
export default {
  name: 'Nieuws',
  components: { Header },
};
</script>

<style lang="scss" scoped>
@mixin flexCentered() {
  display: flex;
  justify-content: center;
  align-items: center;
}
header {
  @include flexCentered();
  width: 100%;
  height: 150px;
  background-color: #264653;
  h1 {
    font-size: 4rem;
    color: white;
    margin: 1.5rem auto auto 10rem;
  }
}

.news__header {
  border: solid 1px black;
  border-top: solid 10px #264653;
  margin-bottom: 2rem;
  text-align: start;
  display: flex;
  align-items: center;

  p {
    padding-left: 1rem;
    font-weight: bold;
    font-size: 2rem;
  }
}

.newest {
  width: 90%;
  max-width: 1200px;
  margin: auto;
  margin-bottom: 8rem;

  .newest__items {
    display: flex;
    justify-content: space-between;

    .newest__item {
      height: 400px;
      width: calc((100% / 2) - 1rem);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-image: url(../assets/images/letter.jpg);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
        0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
        0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
    }

    .newest-item__text {
      width: 40%;
      height: 80%;
      background-color: rgb(15, 15, 15, 0.8);
      color: white;
      padding: 1rem;
      text-align: start;
      position: relative;
      p {
        color: white;
      }
      button {
        background-color: #264653;
        position: absolute;
        right: 1rem;
        bottom: 1rem;
        padding: 1rem;
        border: none;
        color: white;
      }
    }
  }
}

.older {
  width: 90%;
  max-width: 1200px;
  margin: auto;
  margin-bottom: 8rem;

  .older__items {
    display: flex;
    justify-content: space-between;

    .older__item {
      height: 400px;
      width: calc((100% / 3) - 1.5rem);
      background-color: gray;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
        0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
        0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
    }

    .next-item {
      height: 400px;
      width: calc((100% / 3) - 1.5rem);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
        0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
        0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
      background-image: linear-gradient(to bottom right, #264653, 30%, #533326);

      position: relative;
      p {
        text-align: left;
        font-size: 3rem;
        padding-left: 2rem;
        color: black;
      }
      span {
        font-size: 8rem;
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        color: black;
      }
    }
  }
}
</style>

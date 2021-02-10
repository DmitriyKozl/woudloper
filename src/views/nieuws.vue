<template>
  <div>
    <section class="container newsList">
      <h1>Laatste nieuwtjes</h1>

      <div class="news">
        <div class="block ">
          <div class="block__title ">
            <h2>Voorstelling Leiding</h2>
          </div>
          <div class="block__item ">
            <div class="block__item__text ">
              <p class="text ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium, consectetur magni! Obcaecati accusantium eos vero
                illo ab ut nostrum sapiente eum. Odio iste reiciendis obcaecati
                dolores doloremque praesentium ea explicabo.<br /><br />
                <a href="" class="more">Lees verder</a>
              </p>

              <p class="fullText ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium, consectetur magni! Obcaecati accusantium eos vero
                illo ab ut nostrum sapiente eum. Odio iste reiciendis obcaecati
                dolores doloremque praesentium ea explicabo. Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Accusantium, consectetur
                magni! Obcaecati accusantium eos vero illo ab ut nostrum
                sapiente eum. Odio iste reiciendis obcaecati dolores doloremque
                praesentium ea explicabo.
              </p>
            </div>
          </div>
        </div>
        <div class="block ">
          <div class="block__title ">
            <h2>Voorstelling Leiding</h2>
          </div>
          <div class="block__item ">
            <div class="block__item__text ">
              <p class="text ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium, consectetur magni! Obcaecati accusantium eos vero
                illo ab ut nostrum sapiente eum. Odio iste reiciendis obcaecati
                dolores doloremque praesentium ea explicabo.<br /><br />
                <a href="" class="more">Lees verder</a>
              </p>

              <p class="fullText ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium, consectetur magni! Obcaecati accusantium eos vero
                illo ab ut nostrum sapiente eum. Odio iste reiciendis obcaecati
                dolores doloremque praesentium ea explicabo. Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Accusantium, consectetur
                magni! Obcaecati accusantium eos vero illo ab ut nostrum
                sapiente eum. Odio iste reiciendis obcaecati dolores doloremque
                praesentium ea explicabo.
              </p>
            </div>
          </div>
        </div>
        <div class="block ">
          <div class="block__title ">
            <h2>Voorstelling Leiding</h2>
          </div>
          <div class="block__item ">
            <div class="block__item__text ">
              <p class="text ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium, consectetur magni! Obcaecati accusantium eos vero
                illo ab ut nostrum sapiente eum. Odio iste reiciendis obcaecati
                dolores doloremque praesentium ea explicabo.<br /><br />
                <a href="" class="more">Lees verder</a>
              </p>

              <p class="fullText ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium, consectetur magni! Obcaecati accusantium eos vero
                illo ab ut nostrum sapiente eum. Odio iste reiciendis obcaecati
                dolores doloremque praesentium ea explicabo. Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Accusantium, consectetur
                magni! Obcaecati accusantium eos vero illo ab ut nostrum
                sapiente eum. Odio iste reiciendis obcaecati dolores doloremque
                praesentium ea explicabo.
              </p>
            </div>
          </div>
        </div>
        <!-- <h1>Meer nieuws</h1>
        <div class="newsList">
          <div class="block">
            <div class="block__item"></div>
            <div class="block__item"></div>
            <div class="block__item"></div> -->
        <!-- </div> -->
        <!-- </div> -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Nieuws',
  props: {
    title: {
      type: String,
      required: true,
    },
    data() {
      return {
        open: false,
      };
    },
    methods: {
      activate() {
        this.on === true;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.block {
  ::-webkit-scrollbar-track {
    // box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #264653;
    // background-color: white;
    border-radius: 15px;
  }

  ::-webkit-scrollbar {
    width: 0.2rem;
    // background-color: #264653;
    background-color: white;
    border-radius: 15px;
  }

  ::-webkit-scrollbar-thumb {
    // background-color: #264653;
    background-color: white;
    border-radius: 15px;
  }
  .block__item.active {
    overflow: scroll;
    overflow-x: hidden;
    flex: 1 1 300px;
    max-width: 350px;
    border-radius: 16px;
    margin: 0 2rem;
    background-color: #264653;
    border-radius: 15px;
    border-bottom-right-radius: 0;
    .block__item__title.active {
      background-color: white;

      h2 {
        font-size: 1.7rem;
        margin-right: auto;
        margin-top: 0;
        color: #264653;
        background-color: white;
        margin-top: 0;
        width: 100%;
        border-radius: 15px;
        border-bottom-right-radius: 0;
      }
    }
    &__text.active {
      margin: 1rem;
      color: white;
    }
    .fullText.active {
      display: block;
      color: white;
    }
  }
  .text.active {
    font-weight: bolder;
    line-height: 1.3;
    color: white;
  }
}

a {
  text-decoration: none;
  color: #264653;
}
</style>

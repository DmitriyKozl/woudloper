<template>
  <div>
    <section class="container newsList">
      <div class="news">
        <h1>Laatste nieuwtjes</h1>

        <div class="block">
          <div class="block__item">
            <h2>Voorstelling Leiding</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium, consectetur magni! Obcaecati accusantium eos vero
              illo ab ut nostrum sapiente eum. Odio iste reiciendis obcaecati
              dolores doloremque praesentium ea explicabo.<br /><br />
              <a class="more">Lees verder</a>
            </p>
          </div>
          <div class="block__item">
            <h2>Brief Herfstkamp</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium, consectetur magni! Obcaecati accusantium eos vero
              illo ab ut nostrum sapiente eum. Odio iste reiciendis obcaecati
              dolores doloremque praesentium ea explicabo.<br /><br />
              <a class="more">Lees verder</a>
            </p>
          </div>
          <div class="block__item">
            <h2>Brief Herfstkamp</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium, consectetur magni! Obcaecati accusantium eos vero
              illo ab ut nostrum sapiente eum. Odio iste reiciendis obcaecati
              dolores doloremque praesentium ea explicabo.<br /><br />
              <a class="more">Lees verder</a>
            </p>
          </div>
        </div>

        <h1>Meer nieuws</h1>
        <div class="newsList">
          <div class="block">
            <div class="block__item"></div>
            <div class="block__item"></div>
            <div class="block__item"></div>
          </div>
        </div>
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
  },
};
</script>

<style lang="scss" scoped></style>

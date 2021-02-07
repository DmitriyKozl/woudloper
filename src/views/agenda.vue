<template>
  <div>
    <header><h1>Agenda</h1></header>

    <section class="eventList">
      <h1>2022</h1>
      <div v-for="event in events" :key="event.text" class="eventList__item">
        <div class="eventList__item__date">
          <h2>{{ event.day }}</h2>
          <p>{{ event.month }}</p>
        </div>
        <div class="eventList__item__text">
          <h3>{{ event.text }}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ea in
            amet, quas vel distinctio voluptatum similique cupiditate eveniet
            magnam ratione iusto aliquid beatae! Modi facere, ut illo pariatur
            voluptatem nam. Magni, nulla! Voluptate eveniet, repudiandae
            mollitia accusamus, totam deserunt asperiores iure rerum assumenda
            voluptatum in, odio aliquam corporis similique.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Agenda",
  data() {
    return {
      events: [
        {
          day: "8",
          month: "februari",
          text:
            "Cursus koffie zetten voor bejaarden met een allergie voor noten."
        },
        {
          day: "2",
          month: "maart",
          text: "Funk voor doven."
        },
        {
          day: "28",
          month: "juli",
          text: "Dwergsmijten voor gevorderden"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@mixin flexCentered() {
  display: flex;
  justify-content: center;
  // align-items: center;
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

.eventList {
  @include flexCentered();
  flex-direction: column;
  width: 80%;
  margin: auto;
  padding: 6rem 0;

  h1 {
    font-size: 3rem;
    text-align: left;
    min-width: 80%;
    margin: auto;
  }
  &__item {
    @include flexCentered();
    border-bottom-left-radius: 10px;

    border-bottom: 1px solid #264653;
    width: 80%;
    min-height: 150px;
    margin: 2rem auto;
    justify-content: space-between;
    &__date {
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;

      @include flexCentered();
      flex-direction: column;
      color: white;
      background-color: #264653;
      padding: 2rem 0;
      min-width: 200px;

      h2 {
        font-size: 3rem;
        text-align: center;
      }
      p {
        font-size: 2rem;
        margin-bottom: 0;
        margin-top: 0;
      }
    }
    &__text {
      text-align: left;
      padding: 1rem 1rem 1rem;
      // width: 80%;
      h3 {
        font-size: 1.5rem;
        margin-right: auto;
        margin-top: 0;
        width: 80%;
      }
    }
  }
}
</style>

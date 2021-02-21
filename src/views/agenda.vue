<template>
  <div>
    <section class="container eventList">
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
  name: 'Agenda',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  mounted() {
    console.log(this.title);
  },
  data() {
    return {
      events: [
        {
          day: '8',
          month: 'februari',
          text:
            'Cursus koffie zetten voor bejaarden met een allergie voor noten.',
        },
        {
          day: '2',
          month: 'maart',
          text: 'Funk voor doven.',
        },
        {
          day: '28',
          month: 'juli',
          text: 'Dwergsmijten voor gevorderden',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>

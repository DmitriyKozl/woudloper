<template>
  <div>
    <header>
      <h1>Nieuws</h1>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header"
  // components: { Nav },
  // data() {
  //   return {
  //     label: [
  //       "Home",
  //       "We zijn we?",
  //       "Nieuws",
  //       "Contact",
  //       "Agenda",
  //       "Praktisch",
  //     ],
  //   };
  // },
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
  margin-bottom: 4rem;
  h1 {
    font-size: 4rem;
    color: white;
    margin: 1.5rem auto auto 10rem;
  }
}
</style>

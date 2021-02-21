<template>
  <section class="banner_content">
    <div class="banner_map"></div>
    <div class="banner_map_text">
      <h1>Wij ontvangen je met open armen</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactMap',

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@mixin flexCentered($direction) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
}
.banner_content {
  @include flexCentered(row);

  width: 100%;
  .banner_map {
    background-image: url('../assets/images/map.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 500px;
    // @include flexCentered(row);
    width: 100%;
  }
}
.banner_map_text {
  text-align: right;
  margin-right: 4rem;
  width: 40%;
  h1 {
    font-size: 4rem;
    font-family: 'Nanum Gothic';
    font-weight: 900;
    color: #192e36;
    // color: black;
  }
}
</style>

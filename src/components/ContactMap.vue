<template>
  <section class="banner_content">
    <div class="banner_map">
      <div class="banner_map_text">
        <h1>Wij ontvangen je met open armen</h1>
      </div>
    </div>
  </section>
  <div class="mapContainer">
    <div class="map"><h1>map..</h1></div>
    <div class="contactInfo">
      <h3>vzw Woudloper</h3>
      <ul>
        <li>0472/204899</li>
        <li>Houte 27, 9860 Balegem</li>
        <li>info@woudloper.be</li>
      </ul>
      <h3>Scoutsgroep Woudloper</h3>

      <ul>
        <li>0479/795956</li>
        <li>Gijzelstraat 12, 9031 Drongen</li>
        <li>eenheidsleiding@woudloper.be</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactMap',
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

  .banner_map {
    background-image: url('../assets/images/map.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 300px;
    @include flexCentered(row);

    .banner_map_text {
      text-align: right;
      margin-left: auto;
      margin-right: 20rem;
      width: 30%;
      h1 {
        margin: auto;
        font-size: 4rem;
        font-family: 'Nanum Gothic';
        font-weight: 900;
        color: #192e36;
        // color: black;
      }
    }
  }
}

.mapContainer {
  @include flexCentered(row);
  .map {
    width: 500px;
    @include flexCentered(row);
    height: 500px;
    margin-right: auto;
  }
  .contactInfo {
    width: 60%;
  }
}
</style>

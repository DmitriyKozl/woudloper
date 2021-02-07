<template>
  <div>
    <header><h1>Agenda</h1></header>
  </div>
</template>

<script>
export default {
  name: "Agenda"
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
</style>

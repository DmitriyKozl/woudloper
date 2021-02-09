<template>
  <div>
    <header>
      <h1>{{ title }}</h1>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
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

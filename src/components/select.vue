<template>
  <div class="selectContainer">
    <label class="selectContainer-select" for="subject">Onderwerp</label>
    <select
      class="selectContainer-control"
      id="subject"
      name="subject"
      required
    >
      <option value="Question">Een doodnormale vraag</option>
      <option value="Wachtlijst">Wachtlijst</option>
      <option value="Mailing">Mailing lijst</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Select"
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap");

@mixin flexCenter() {
  display: flex;
  justify-content: center;
}

.selectContainer {
  @include flexCenter();
  flex-direction: column;
  text-align: left;
  color: white;
  width: 70%;
  margin: 1rem auto;

  &-control {
    background-color: #264653;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    color: white;
    margin: 1rem 0;
    padding: 0.5rem 0;
    font-size: 1.2rem;
  }
  label {
    font-size: 1.2rem;
  }
}
</style>

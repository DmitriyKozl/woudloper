<template>
  <div class="selectContainer">
    <label class="selectContainer-select" for="subject">Onderwerp</label>
    <select
      @change="onchange(selected)"
      v-model="selected"
      class="selectContainer-control"
      id="subject"
      name="subject"
      required
    >
      <option
        v-for="option in options"
        v-bind:key="option.value"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Select",
  data() {
    return {
      selected: "",
      selectedText: ``,
      options: [
        {
          text: "Een doodnormale vraag",
          value: "Question"
        },
        {
          text: "Wachtlijst",
          value: "Wachtlijst"
        },
        {
          text: "Mailing lijst",
          value: "Mailing"
        }
      ]
    };
  },
  methods: {
    onchange: function(val) {
      for (let i = 0; i < this.options.length; i++) {
        if (this.options[i].value === val) {
          //       this.selectedText = this.options[i].input;
          return this.options[i].input;
        }
      }
    }
  }
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

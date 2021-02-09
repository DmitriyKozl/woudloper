<template>
  <div class="container">
    <div class="container-img">
      <img src="@/assets/images/tent.jpg" alt="" />
    </div>
    <form class="form" @submit.prevent="submit">
      <h1>Contacteer ons</h1>
      <div class="form-content">
        <div class="form-content-name">
          <label class="label" for="name">Naam</label>
          <input type="text" name="name" id="name" required="" v-model="name" />
        </div>
        <div class="form-content-surname">
          <label class="label" for="surname">Voornaam</label>
          <input
            type="text"
            name="name"
            id="surname"
            required=""
            v-model="surname"
          />
        </div>
      </div>
      <div class="form-email">
        <label class="label" for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required=""
          v-model="email.value"
        />
      </div>
      <Select />

      <div class="form-text">
        <label class="label" for="textarea">Bericht</label>
        <textarea
          class="message"
          name="textarea"
          required=""
          v-model="message.text"
        ></textarea>
      </div>
      <div class="button">
        <button type="submit">submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import Select from "@/components/select.vue";
export default {
  name: "Contact",
  components: {
    Select
  },

  data: function() {
    return {
      mailFormIsActive: false,

      name: "",
      surname: "",
      child: "",
      email: {
        value: "",
        valid: true
      },
      phone: {
        value: "",
        valid: true
      },
      message: {
        text: ``,
        maxlength: 255
      },
      submitted: false
    };
  },

  choices: [
    {
      name: "wachtlijst",
      html: `<div class="form-phone" :class="{ active: mailFormIsActive }">
        <label class="label" for="phone">Telefoon nummer</label>
        <input name="phone" id="phone" required="" v-model="phone.value" />
      </div>
      <div class="form-child">
        <label class="label" for="child">Naam en voornaam kind</label>
        <input
          type="text"
          name="childName"
          id="child"
          required=""
          v-model="child"
        />
      </div>`
    },
    {
      name: "wachtlijst",
      html: `<div class="form-phone" :class="{ active: mailFormIsActive }">
        <label class="label" for="phone">Telefoon nummer</label>
        <input name="phone" id="phone" required="" v-model="phone.value" />
      </div>
      <div class="form-child">
        <label class="label" for="child">Naam en voornaam kind</label>
        <input
          type="text"
          name="childName"
          id="child"
          required=""
          v-model="child"
        />
      </div>`
    }
  ],

  methods: {
    activate() {
      this.mailFormIsActive = true;
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
.container {
  background-color: #264653;
  // border: solid 0.2rem #264653;
  height: 100vh;
  @include flexCenter();
  &-img {
    width: 40%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  h1 {
    width: 70%;
    color: white;
    text-align: left;
    margin: 2rem auto;
  }
  .form {
    @include flexCenter();
    background-color: #264653;
    padding: 1rem;
    flex-direction: column;
    width: 60%;
    &-content {
      @include flexCenter();
      justify-content: space-between;
      color: #264653;
      width: 70%;
      margin: 1rem auto;

      &-name,
      &-surname {
        @include flexCenter();
        flex-direction: column;
        text-align: left;
        width: 40%;
        color: white;
      }
    }
    &-email,
    &-phone,
    &-child {
      @include flexCenter();
      flex-direction: column;
      text-align: left;
      color: white;
      width: 70%;
      margin: 1rem auto;
    }
    // .message,
    // &-phone,
    // &-child,
    // &-text {
    //   display: none;
    // }
    &-text {
      @include flexCenter();
      flex-direction: column;
      text-align: left;
      color: white;
      width: 70%;
      margin: 2rem auto;
    }
    .message {
      height: 100px;
      outline: none;
      border: none;
      border-bottom: 1px solid white;
      background-color: #264653;
      color: white;
    }
    .button {
      // margin: auto;
      button {
        padding: 0.5rem 3rem 0.5rem 3rem;
        margin: 1rem 0.1rem 0.1rem 0;
        border: none;
        border-radius: 2rem;
        // box-sizing: border-box;
        text-decoration: none;
        font-family: "Nanum Gothic", sans-serif;
        font-weight: 800;
        font-size: 1.4rem;
        color: #264653;
        text-align: center;
        background-color: white;
      }
    }
  }
  input {
    background-color: #264653;
    height: 30px;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    color: white;
    font-size: 1.2rem;
  }
  label {
    font-size: 1.2rem;
  }
}
</style>

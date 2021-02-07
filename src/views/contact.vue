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
      <div class="selectContainer">
        <label class="selectContainer-select" for="subject">onderwerp</label>
        <select
          class="selectContainer-select-control"
          id="subject"
          name="subject"
          required
        >
          <option value="subject" selected disabled>Onderewerp</option>
          <option value="Wachtlijst">Wachtlijst</option>
          <option value="Mailing">Mailing lijst</option>
          <option value="Question">Een doodnormale vraag</option>
        </select>
      </div>
      <div class="form-text">
        <label class="label" for="textarea">Bericht</label>
        <textarea
          class="message"
          name="textarea"
          id="textarea"
          required=""
          v-model="message.text"
          :maxlength="message.maxlength"
        ></textarea>

        <div class="button">
          <button type="submit">submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data: function() {
    return {
      name: "",
      surname: "",

      email: {
        value: "",
        valid: true
      },

      message: {
        text: ``,
        maxlength: 255
      },
      submitted: false
    };
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
    &-email {
      @include flexCenter();
      flex-direction: column;
      text-align: left;
      color: white;
      width: 70%;
      margin: 1rem auto;
    }
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
    }
    .button {
      margin: auto;
      button {
        padding: 1rem 3rem 1rem 3rem;
        margin: 3rem 0.1rem 0.1rem 0;
        border: none;
        border-radius: 2rem;
        // box-sizing: border-box;
        text-decoration: none;
        font-family: "Nanum Gothic", sans-serif;
        font-weight: 600;
        font-size: 1.2rem;
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
  }
}
</style>

<template>
  <div class="Mailcontainer">
    <form class="form" @submit.prevent="submit">
      <h4>Contacteer ons</h4>
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
      </div>
    </form>
    <div class="right-content">
      <div class="button">
        <input type="submit" value="submit" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mail',
  data: function() {
    return {
      name: '',
      surname: '',

      email: {
        value: '',
        valid: true,
      },

      message: {
        text: ``,
        maxlength: 255,
      },
      submitted: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@mixin flexCenter() {
  display: flex;
  justify-content: center;
}
.Mailcontainer {
  background-color: white;
  @include flexCenter();
  h4 {
    width: 70%;
    color: white;
    margin: auto;
    font-size: 2rem;
    &::after {
      display: block;
      content: ' ';
      width: 50px;
      height: 5px;
      background-color: white;
      margin: 1rem auto;
    }
  }
  .form {
    @include flexCenter();
    background-color: #264653;
    padding: 2rem 1rem;
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
  }
  input {
    background-color: #264653;
    height: 30px;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
  }
  .right-content {
    @include flexCenter();

    width: 40%;
    background-image: url('../assets/images/park.png');
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;

    .button {
      margin: auto;
      input {
        padding: 0.4rem 6rem 3rem 6rem;
        margin: 0 0.1rem 0.1rem 0;

        border-radius: 2rem;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Nanum Gothic', sans-serif;
        font-weight: 600;
        font-size: 2rem;
        color: white;

        text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
        text-align: center;
        transition: all 0.2s;
        background-color: #264653;
      }
    }
  }
}
</style>

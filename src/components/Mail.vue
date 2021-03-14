<template>
  <div class="Mailcontainer">
    <div class="custom-shape-divider-bottom-1614759130">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
          class="shape-fill"
        ></path>
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
          class="shape-fill"
        ></path>
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
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
    <!-- <div class="right-content">
      <div class="button">
        <input type="submit" value="submit" />
      </div> -->
    <!-- </div> -->
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
  position: relative;
  .custom-shape-divider-bottom-1614759130 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1614759130 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 140px;
    transform: rotateY(180deg);
  }

  .custom-shape-divider-bottom-1614759130 .shape-fill {
    fill: #264653;
  }
  h4 {
    width: 70%;
    color: #264653;
    margin: auto;
    font-size: 2rem;
    &::after {
      display: block;
      content: ' ';
      width: 50px;
      height: 5px;
      background-color: #264653;
      margin: 1rem auto;
    }
  }
  .form {
    @include flexCenter();
    background-color: white;
    padding: 2rem 1rem;
    flex-direction: column;
    width: 60%;
    padding-bottom: 5rem;
    z-index: 33333;
    &-content {
      @include flexCenter();
      justify-content: space-between;
      color: white;
      width: 70%;
      margin: 1rem auto;
      &-name,
      &-surname {
        @include flexCenter();
        flex-direction: column;
        text-align: left;
        width: 40%;
        color: #264653;
      }
    }
    &-email {
      @include flexCenter();
      flex-direction: column;
      text-align: left;
      color: #264653;
      width: 70%;
      margin: 1rem auto;
    }
    &-text {
      @include flexCenter();
      flex-direction: column;
      text-align: left;
      color: #264653;
      width: 70%;
      margin: 2rem auto;
    }
    .message {
      height: 100px;
      outline: none;
      border: none;
      border-bottom: 1px solid #264653;
      background-color: transparent;
      color: #264653;
    }
  }
  input {
    background-color: transparent;
    height: 30px;
    border: none;
    border-bottom: 1px solid #264653;
    outline: none;
    color: #264653;
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

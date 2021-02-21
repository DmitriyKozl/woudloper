<template>
  <form class="form">
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

    <div v-if="selected === 'Question'" class="form-mailing">
      <label class="label" for="question-textarea">Bericht</label>
      <textarea
        class="message"
        name="textarea"
        id="question-textarea"
        required=""
        v-model="message.text"
      ></textarea>
    </div>

    <div v-if="selected === 'Wachtlijst'" class="form-text">
      <div class="form-phone">
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
      </div>
    </div>

    <div v-if="selected === 'Mailing'" class="form-text">
      <label class="label" for="mailing-textarea">Mailing</label>
      <textarea
        class="message"
        name="textarea"
        id="mailing-textarea"
        required=""
        v-model="message.text"
      ></textarea>
    </div>

    <div class="button">
      <button type="submit">submit</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      mailFormIsActive: false,
      name: '',
      surname: '',
      child: '',
      email: {
        value: '',
        valid: true,
      },
      phone: {
        value: '',
        valid: true,
      },
      message: {
        text: ``,
        maxlength: 255,
      },
      submitted: false,
      selected: 'Question',
      selectedText: ``,
      options: [
        {
          text: 'Een doodnormale vraag',
          value: 'Question',
        },
        {
          text: 'Wachtlijst',
          value: 'Wachtlijst',
        },
        {
          text: 'Mailing lijst',
          value: 'Mailing',
        },
      ],
    };
  },
  methods: {
    activate() {
      this.mailFormIsActive = true;
    },
    onchange: function(val) {
      for (let i = 0; i < this.options.length; i++) {
        if (this.options[i].value === val) {
          //       this.selectedText = this.options[i].input;
          return this.options[i].input;
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');
@mixin flexCenter() {
  display: flex;
  justify-content: center;
}

.form {
  @include flexCenter();
  background-color: #264653;
  padding: 1rem;
  flex-direction: column;
  width: 60%;
  h1 {
    color: white;
    margin: 3rem;
    &::after {
      display: block;
      content: ' ';
      width: 50px;
      height: 5px;
      background-color: white;
      margin: 1rem auto;
    }
  }
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
  &-phone,
  &-child {
    @include flexCenter();
    flex-direction: column;
    text-align: left;
    width: 40%;
    color: white;
  }

  &-text {
    @include flexCenter();
    justify-content: space-between;
    color: white;
    width: 70%;
    text-align: left;
    margin: 1rem auto;
  }
  &-mailing {
    @include flexCenter();
    justify-content: space-between;
    color: white;
    width: 70%;
    text-align: left;
    margin: 1rem auto;
    flex-direction: column;
  }
  .message {
    @include flexCenter();

    height: 100px;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid white;
    background-color: #264653;
    color: white;
  }
  .button {
    width: 70%;
    text-align: left;
    margin: 2rem auto 0;
    button {
      padding: 0.5rem 3rem 0.5rem 3rem;
      margin: 1rem 0.1rem 0.1rem 0;
      border: none;
      border-radius: 2rem;
      // box-sizing: border-box;
      text-decoration: none;
      font-family: 'Nanum Gothic', sans-serif;
      font-weight: 800;
      font-size: 1.3rem;
      color: #264653;
      text-align: center;
      background-color: white;
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
  .message:invalid {
    box-shadow: none;
  }
  input:invalid {
    box-shadow: none;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    box-shadow: 0 0 0 30px #264653;
    background-color: #264653 inset;
    -webkit-box-shadow: 0 0 0 30px #264653 inset !important;
    -webkit-text-fill-color: white !important;
    -webkit-background-color: #264653 inset !important;
  }
  label {
    font-size: 1.2rem;
  }
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

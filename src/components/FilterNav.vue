<template>
  <div>
    <div :class="{ active: sideNavIsActive }" class="sidenav">
      <a class="closebtn" @click="close()">&times;</a>
      <div
        v-for="link in links"
        :key="link.path"
        class="buttonContainer"
        @click="close()"
      >
        <div class="button">
          <input type="submit" value="bestuur" />
        </div>
        <div class="button">
          <input type="submit" value="svg" />
        </div>
        <div class="button">
          <input type="submit" value="vg" />
        </div>
      </div>
    </div>
    <a class="hamburger" @click="activate()">filter</a>
  </div>
</template>

<script>
export default {
  name: 'FilterNav',
  props: { links: { type: Array, required: true } },
  data() {
    return {
      sideNavIsActive: false,
    };
  },
  methods: {
    activate() {
      this.sideNavIsActive = true;
    },
    close() {
      this.sideNavIsActive = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sidenav {
  height: 100px;
  width: 0;
  z-index: 1;
  top: 0;
  left: 0;
  // background-color: #264653;
  background-color: #264653;

  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}
.active {
  width: 15%;
  height: 100vh;
  position: absolute;
}
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  display: block;
  transition: 0.3s;
}

.closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  cursor: pointer;
}
.hamburger {
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  left: 11.5%;
  bottom: 1rem;
  color: #264653;

  &::after {
    display: block;
    content: ' ';
    width: 60px;
    height: 5px;
    background-color: white;
    margin: 0 auto;
  }
}
.activeLink {
  font-weight: bold;
}
</style>

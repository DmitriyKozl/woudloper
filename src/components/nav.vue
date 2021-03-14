<template>
  <div>
    <span class="hamburger" @click="activate()">&#9776;</span>

    <div :class="{ active: sideNavIsActive }" class="sidenav">
      <a class="closebtn" @click="close()">&times;</a>
      <div
        v-for="link in links"
        :key="link.path"
        :class="{ activeLink: $route.path === link.path }"
        @click="close()"
      >
        <router-link :to="link.path">{{ link.label }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
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
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  // background-color: #264653;
  background-color: white;

  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}
.active {
  width: 250px;
}
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #264653;
  display: block;
  transition: 0.3s;
}
.sidenav a:hover {
  color: #f1f1f1;
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
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  left: 3%;
  top: 3rem;
  color: rgba(255, 255, 255, 0.787);
  z-index: 444;
}
.activeLink {
  font-weight: bold;
}
</style>

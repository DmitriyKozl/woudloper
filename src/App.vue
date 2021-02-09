<template>
  <Nav :links="links" />
  <Header :title="title" v-if="$route.path === '/nieuws'" />
  <router-view :title="title" />
  <Footer />
</template>

<script>
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
export default {
  components: { Header, Nav, Footer },
  data() {
    return {
      links: [
        {
          label: 'Home',
          path: '/',
        },
        {
          label: 'We zijn we?',
          path: '/wie-zijn-we',
        },
        {
          label: 'Nieuws',
          path: '/nieuws',
        },
        {
          label: 'Contact',
          path: '/contact',
        },
        {
          label: 'Agenda',
          path: '/agenda',
        },
        {
          label: 'Praktisch',
          path: '/praktisch',
        },
      ],
    };
  },
  computed: {
    title() {
      return this.links.filter(val => {
        return val.path === this.$route.path;
      })[0].label;
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

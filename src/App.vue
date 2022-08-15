<template>
  <div id="app">
    <navigation-bar></navigation-bar>
      <div class="px-3">
        <router-view/>
      </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Outfit', sans-serif;
  // font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
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

.cursor-pointer {
  cursor: pointer;
}
</style>

<script>
import NavigationBar from './components/NavigationBar.vue';

export default{
  components: {
    NavigationBar,
  },
  data() {
    return {

    }
  },
  mounted() {
    document.title = "Jain Industries - HomePage";
  }
}
</script>


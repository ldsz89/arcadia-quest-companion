<template>
  <v-app id="app">
    <div id="nav">
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/select-guild">
        Select Guild
      </router-link> |
      <router-link to="/select-characters">
        Select Character
      </router-link> |
      <router-link to="/select-inventory">
        Select Inventory
      </router-link> |
      <router-link to="/guild-sheet">
        Guild Sheet
      </router-link> |
      <router-link to="/about">
        About
      </router-link>
    </div>
    <router-view id="content" />
  </v-app>
</template>

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

#content {
  border: 1em solid #C4C3A7;
  background: rgb(174,51,71);
  background: linear-gradient(90deg, rgba(174,51,71,1) 0%, rgba(99,31,46,1) 50%, rgba(174,51,71,1) 100%);

  h1.guild-name {
    color: #C4C3A7;
  }
}
</style>

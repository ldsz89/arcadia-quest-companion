<template>
  <v-app id="app">
    <v-app-bar
      app
      flat
    >
      <router-link
        id="home"
        to="/"
      >
        <v-toolbar-title>Arcadia Quest Companion</v-toolbar-title>
      </router-link>
    </v-app-bar>
    <v-content>
      <router-view id="content" />
    </v-content>
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

header.v-sheet {
  background-color: #C4C3A7 !important;
}

#home {
  color: black;
  text-decoration: none;
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
  height: 100%;
  border: 1em solid #C4C3A7;
  background: rgb(174,51,71);
  background: linear-gradient(90deg, rgba(174,51,71,1) 0%, rgba(99,31,46,1) 50%, rgba(174,51,71,1) 100%);

  h1.guild-name {
    color: #C4C3A7;
  }
}
</style>

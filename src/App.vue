<template>
  <div id="app">
    <nav>
      <router-link to="/alert">Alert</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  height: 100vh;
}
body {
  margin: 0;
}
main {
  width: 100%;
  padding: 2rem;
}
nav {
  padding: 30px;
  width: 300px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #42b983;
  a {
    font-weight: bold;
    color: #2c3e50;
    display: block;
    margin-bottom: 0.5rem;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

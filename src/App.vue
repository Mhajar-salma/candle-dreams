<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Accueil</router-link> |
        <router-link to="/projects">Projets</router-link> |
        <router-link to="/about">À Propos</router-link> |
        <router-link to="/contact">Contact</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<style>
nav {
  background: #ff9fcf;
  padding: 1rem;
  text-align: center;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
}
nav a:hover {
  text-decoration: underline;
}
</style>

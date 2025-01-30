<template>
  <div class="home">
    <h1>Bienvenue chez Candle Dreams</h1>
    <p>Découvrez des bougies artisanales créées pour illuminer votre quotidien.</p>
    <router-link to="/projects">
      <button>Voir nos Bougies</button>
    </router-link>
  </div>
</template>

<style scoped>
:deep(html, body) {
  height: 100%;
  margin: 0;
}

.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #ffe6f0;
  color: #4d4d4d;
  text-align: center;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

button {
  background: #ff6ea9;
  border: none;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;
}

button:hover {
  background: #ff4e8c;
}
</style>

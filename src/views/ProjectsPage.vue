<template>
  <div class="products">
    <h1>Nos Bougies Artisanales</h1>
    <ul class="products-list">
      <li v-for="(candle, index) in candles" :key="index">
        <div class="image-wrapper">
          <img :src="candle.image" :alt="candle.name" />
        </div>
        <h2>{{ candle.name }}</h2>
        <p>{{ candle.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      candles: [
        { name: 'Bougie Vanille', description: 'Une douce senteur vanillée.', image: require('@/assets/img/vanilla.jpg') },
        { name: 'Bougie Lavande', description: 'Apaisante et relaxante.', image: require('@/assets/img/lavender.jpg') },
        { name: 'Bougie Cannelle', description: 'Parfum épicé réconfortant.', image: require('@/assets/img/cinnamon.jpg') },
        { name: 'Bougie Fleur d\'Oranger', description: 'Un parfum doux et floral.', image: require('@/assets/img/orange-blossom.jpg') },
        { name: 'Bougie Rose', description: 'Un parfum délicat et romantique.', image: require('@/assets/img/rose.jpg') },
        { name: 'Bougie Bois de Santal', description: 'Un parfum chaud et boisé.', image: require('@/assets/img/sandalwood.jpg') },
        { name: 'Bougie Eucalyptus', description: 'Senteur fraîche et revigorante.', image: require('@/assets/img/eucalyptus.jpg') },
        { name: 'Bougie Coco', description: 'Parfum exotique et doux.', image: require('@/assets/img/coconut.jpg') },
        { name: 'Bougie Citronnelle', description: 'Senteur fraîche et citronnée.', image: require('@/assets/img/lemon-grass.jpg') },
      ]
    };
  },
};
</script>

<style scoped>
.products {
  text-align: center;
  padding: 2rem;
}

.products-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 2rem 0;
}

.products-list li {
  background: #ff9fcf;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.image-wrapper {
  width: 100%;
  max-width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
}

.products-list img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 8px;
}

h1, h2, p {
  color: #4d4d4d;
}
</style>

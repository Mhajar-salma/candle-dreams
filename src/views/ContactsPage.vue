<template>
  <div class="contact-page">
    <div class="contact-container">
      <h1>Contactez-nous</h1>
      <p>
        Vous souhaitez passer une commande personnalisée ou en savoir plus ?  
        Remplissez le formulaire ci-dessous :
      </p>

      <form @submit.prevent="handleSubmit">
        <label for="name">Nom :</label>
        <input
          type="text"
          id="name"
          v-model="name"
          required
          placeholder="Votre nom"
        />

        <label for="email">Email :</label>
        <input
          type="email"
          id="email"
          v-model="email"
          required
          placeholder="votre.email@example.com"
        />

        <label for="message">Message :</label>
        <textarea
          id="message"
          v-model="message"
          required
          placeholder="Votre message ici..."
        ></textarea>

        <button type="submit" :disabled="isSending">
          {{ isSending ? 'Envoi en cours...' : 'Envoyer' }}
        </button>

        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      isSending: false,
      successMessage: "",
      errorMessage: "",
    };
  },
  methods: {
    handleSubmit() {
      this.isSending = true;
      this.successMessage = "";
      this.errorMessage = "";

      const templateParams = {
        name: this.name,
        email: this.email,
        message: this.message,
      };

      emailjs
        .send("service_9", "template_rrrj3mj", templateParams, "azMTTu1WcBjMYU-WU")
        .then(() => {
          this.successMessage = `Merci ${this.name}, votre message a été envoyé avec succès !`;
          this.resetForm();
        })
        .catch((error) => {
          console.error("Erreur :", error);
          this.errorMessage = "Une erreur s'est produite. Veuillez réessayer.";
        })
        .finally(() => {
          this.isSending = false;
        });
    },
    resetForm() {
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
.contact-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(145deg, #fff0f5, #ffd6e7);
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  padding: 2rem;
}

.contact-container {
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  text-align: center;
}

h1 {
  color: #ff4d88;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  color: #666;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

form {
  display: grid;
  gap: 1.5rem;
}

input,
textarea {
  padding: 0.8rem;
  width: 100%;
  background: #fff;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: border 0.3s;
}

input:focus,
textarea:focus {
  border-color: #ff4d88;
  outline: none;
}

textarea {
  resize: vertical;
  min-height: 120px;
}

button {
  background: #ff4d88;
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease-in-out, transform 0.1s;
  font-size: 1rem;
  text-transform: uppercase;
}

button:hover {
  background: #e63971;
  transform: translateY(-2px);
}

button:disabled {
  background: #ddd;
  cursor: not-allowed;
}

.success-message {
  color: #28a745;
  font-size: 0.9rem;
}

.error-message {
  color: #dc3545;
  font-size: 0.9rem;
}
</style>

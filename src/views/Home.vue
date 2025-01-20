<template>
  <div class="placeholder">
    <div class="content">
      <p class="message">
        This page is a placeholder for Nertivia. Nertivia no longer exists, but instead, there is Nerimtiy — the latest version of the old Nertivia. Join now:
      </p>
      <a href="https://nerimity.com" target="_blank" rel="noopener noreferrer">
        <button class="join-button">Join Now</button>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Placeholder",
});
</script>

<style scoped lang="scss">
.placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1e1e2f;
  color: white;
  text-align: center;
  font-family: Arial, sans-serif;
}

.content {
  max-width: 600px;
  padding: 20px;
}

.message {
  font-size: 18px;
  margin-bottom: 20px;
}

.join-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.join-button:hover {
  background-color: #45a049;
}
</style>

<template>
  <div class="maintenance-message">
    <h1>This page is unavailable for an extended period due to major changes we are working on.</h1>
    <p>Join our Discord server for more updates: 
      <a href="https://discord.gg/KJBSRXafEy" target="_blank">https://discord.gg/KJBSRXafEy</a>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MaintenanceMessage",
});
</script>

<style lang="scss" scoped>
.maintenance-message {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color, #f0f0f0);
  text-align: center;
  padding: 20px;

  h1 {
    font-size: 1.8rem;
    color: var(--text-color, #333);
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    color: var(--text-color, #555);

    a {
      color: var(--link-color, #007bff);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>

<template>
    <div class="modal-overlay" v-if="isOpen" @click="closePopup">
      <div class="modal-content" @click.stop>
        <h3>All Available Badges</h3>
        <div v-if="Object.keys(badges).length" class="badge-list">
          <ul>
            <li v-for="(badge, key) in badges" :key="key" class="badge-item">
              <img :src="badge.iconURL" :alt="badge.name" class="badge-icon" />
              <span class="badge-name">{{ badge.name }}</span>
            </li>
          </ul>
        </div>
        <div v-else>
          <p>No badges available.</p>
        </div>
        <button @click="closePopup" class="close-btn">Close</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import { badges } from "@/constants/badges";
  
  export default defineComponent({
    name: "BadgePopup",
    props: {
      isOpen: {
        type: Boolean,
        required: true,
      },
    },
    data() {
      return {
        badges,
      };
    },
    methods: {
      closePopup() {
        this.$emit("update:isOpen", false);
      },
    },
  });
  </script>
  
  <style lang="scss" scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .modal-content {
    background-color: #282424; // Hintergrundfarbe des Popups anpassen
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    width: 80%;
    max-width: 400px;
    position: relative;
    color: white; // Textfarbe anpassen
  }
  
  .badge-list {
    list-style: none;
    padding: 0;
    margin: 20px 0;
  }
  
  .badge-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .badge-icon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  
  .badge-name {
    font-size: 16px;
  }
  
  .close-btn {
    margin-top: 20px;
    padding: 5px 10px;
    background-color: #007bff; // Hauptfarbe anpassen
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .close-btn:hover {
    background-color: #0056b3; // Dunklere Farbe für Hover-Effekt
  }
  </style>
  

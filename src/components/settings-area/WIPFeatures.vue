<template>
  <div class="wip-features">
    <div class="box">
      <div class="description">
        <div class="material-icons">info</div>
        Enable un-finished or experimental features.
      </div>
      <div style="opacity: 0.6">Updated at 30.08.2024/15.16</div>
      <button @click="openBadgePopup" class="show-badges-btn">
        Show All Badges
      </button>
    </div>
    
    <!-- Badges Popup Component -->
    <BadgePopup :isOpen="isBadgePopupOpen" @update:isOpen="isBadgePopupOpen = $event" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BadgePopup from "./BadgePopup.vue"; // Angepasster Pfad

export default defineComponent({
  name: "WIPFeatures",
  components: { BadgePopup },
  data() {
    return {
      welcomePopout: localStorage["welcomePopout_wip"] === "true",
      isBadgePopupOpen: false,
    };
  },
  methods: {
    openBadgePopup() {
      this.isBadgePopupOpen = true;
    },
  },
  watch: {
    welcomePopout() {
      localStorage["welcomePopout_wip"] = this.welcomePopout;
    },
  },
});
</script>

<style lang="scss" scoped>
.wip-features {
  display: flex;
  flex-direction: column;
}

.description {
  display: flex;
  align-items: center;
  align-content: center;
  .material-icons {
    margin-right: 5px;
    color: #007bff; // Hauptfarbe anpassen
  }
  margin-bottom: 10px;
}

.title {
  margin-bottom: 5px;
}

.box {
  padding: 10px;
  align-self: flex-start;
}

.show-badges-btn {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff; // Hauptfarbe anpassen
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.show-badges-btn:hover {
  background-color: #0056b3; // Dunklere Farbe für Hover-Effekt
}
</style>

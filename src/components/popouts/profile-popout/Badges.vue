<template>
  <div class="badges">
    <div class="title">{{ $t("profile-popout.badges") }}</div>
    <div class="list">
      <div
        class="badge"
        v-for="item in badges"
        :key="item.name"
        :style="{ borderColor: item.color }"
      >
        <img :src="item.iconURL" alt="" />
        <div class="tooltip">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Badge } from "@/constants/badges";
import { PropType } from "vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Badges",
  props: {
    badges: {
      type: Array as PropType<Badge[]>,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.badges {
  flex-shrink: 0;
  margin: 3px;
  transition: 0.2s;
  cursor: default;
  user-select: none;
}
.list {
  display: flex;
  overflow: auto;
  gap: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
}
.badge {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: solid 2px transparent;
  padding: 5px;
  height: 23px;
  width: 23px;
  position: relative;
  img {
    height: 15px;
    width: 15px;
  }
  .tooltip {
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #2c2f33;
    color: #fff;
    padding: 8px 12px;
    border-radius: 6px;
    white-space: nowrap;
    font-size: 12px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
    pointer-events: none;
    max-width: 300px; /* Setzt die maximale Breite der Tooltip-Box */
    width: auto;
  }
  &:hover .tooltip {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(-5px);
  }
}
</style>

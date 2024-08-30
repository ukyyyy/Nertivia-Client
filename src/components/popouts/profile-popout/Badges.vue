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
        <div class="badge-name">{{ item.name }}</div>
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
  flex-direction: column;
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
  .badge-name {
    margin-top: 5px;
    font-size: 12px;
    color: #fff;
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  &:hover .badge-name {
    opacity: 1;
  }
}
</style>

<template>
  <span
    class="outer-mention"
    @click="showRole"
    @contextmenu.prevent="roleContext"
  >
    <AvatarImage :imageId="roleIcon" size="20px" />
    <Mention :text="roleDisplay" />
  </span>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import AvatarImage from "@/components/AvatarImage.vue";
import Mention from "./Mention.vue";
import { PopoutsModule } from "@/store/modules/popouts";

export default defineComponent({
  components: { Mention, AvatarImage },
  props: {
    role: {
      type: String,
      required: true,
    },
  },
  computed: {
    roleDisplay() {
      return `@${this.role}`;
    },
    roleIcon() {
      // Logic to return the appropriate icon based on role
      return this.role === "everyone" ? "everyone-icon" : "role-icon";
    },
  },
  methods: {
    roleContext(event: MouseEvent) {
      PopoutsModule.ShowPopout({
        id: "context",
        component: "RoleContextMenu",
        key: this.role + event.clientX + event.clientY,
        data: {
          role: this.role,
          x: event.clientX,
          y: event.clientY,
        },
      });
    },
    showRole(event: PointerEvent) {
      PopoutsModule.ShowPopout({
        id: "role",
        component: "RoleProfilePopout",
        data: {
          x: event.x,
          y: event.y,
          role: this.role,
        },
      });
    },
  },
});
</script>

<style>
.outer-mention {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;
  vertical-align: -5px;
}
.outer-mention .avatar {
  margin-right: 2px;
}
.outer-mention .avatar .image {
  border: 0;
}
.outer-mention .mention {
  line-height: 1.1;
}
.outer-mention:hover > .mention {
  text-decoration: underline;
}
</style>

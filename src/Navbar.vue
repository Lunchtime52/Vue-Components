<template>
	<BNavbar
		toggleable="md"
		:type="variant"
		:variant="color"
		class="px-5"
		sticky="top"
	>
		<BNavbarBrand :to="{ name: logoHref }">{{ logoText }}</BNavbarBrand>
		<BNavbarToggle target="nav-collapse" />
		<BCollapse id="nav-collapse" is-nav>
			<BNavbarNav class="ms-auto text-end">
				<BNavItem
					v-for="link in navLinks"
					:key="link.href"
					:to="{ name: link.href }"
					>{{ link.text }}
				</BNavItem>
			</BNavbarNav>
		</BCollapse>
	</BNavbar>
</template>

<script>
import { inject } from 'vue';

// Regular script block to define options
export default {
  props: {
    logoText: { type: String, default: "My Site" },
    logoHref: { type: String, default: "Home" },
    navLinks: { type: Array, default: () => [] },
    variant: { type: String, default: "dark" },
    color: { type: String, default: "primary" },
    base: {
      type: String,
      default: inject('config', {}).baseUrl // Access config here
    },
  },
};
</script>

<script setup>
import { BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNav, BNavItem } from "bootstrap-vue-next";
const config = inject('config', {});

const props = defineProps({
	logoText: { type: String, default: "My Site" },
	logoHref: { type: String, default: "Home" },
	navLinks: { type: Array, default: () => [] },
    variant: { type: String, default: "dark" },
    color: { type: String, default: "primary" },
    base: { type: String, default: config.baseUrl },
});
</script>



<style scoped>
/* Optional: Add component-specific styles here */
</style>

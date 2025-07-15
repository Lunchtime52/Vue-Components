<template>
	<BNavbar
		:variant="props.variant"
		:bg="props.color"
		class="px-5"
		sticky="top"
	>
		<BNavbarBrand :to="{ name: props.logoHref }">{{ props.logoText }}</BNavbarBrand>
		<BNavbarToggle target="nav-collapse" />
		<BCollapse id="nav-collapse" is-nav>
			<BNavbarNav class="ms-auto text-end">
				<BNavItem
					v-for="link in props.navLinks"
					:key="link.href"
					:to="{ name: link.href }"
					>{{ link.text }}
				</BNavItem>
			</BNavbarNav>
		</BCollapse>
	</BNavbar>
</template>

<script setup>
import { inject, computed } from 'vue';

import { BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNavbarNav, BNavItem } from "bootstrap-vue-next";

const config = inject('config', {});

const props = defineProps({
  logoText: { type: String, default: "My Site" },
  logoHref: { type: String, default: "Home" },
  navLinks: { type: Array, default: () => [] },
  variant: { type: String, default: "dark" },
  color: { type: String, default: "primary" },
  base: {
    type: String,
    // Use a function for the default value
    default: () => inject('config', {}).baseUrl
  },
});

// You can now use props.base in your template or other logic
</script>



<style scoped>
/* Optional: Add component-specific styles here */
</style>

<template>
	<div id="app">
		<md-button><router-link to="/">My Item 1</router-link></md-button>
		<md-button><router-link to="/add">My Item 1</router-link></md-button>
	</div>
</template>
<script>
export default {
	name: "Navbar",
};
</script>

<style scoped>
.md-menu {
	margin: 24px;
}
</style>

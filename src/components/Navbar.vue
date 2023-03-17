<template>
	<div id="app">
		<md-button><router-link to="/">Employee List</router-link></md-button>
		<md-button><router-link to="/add">Add Employee</router-link></md-button>
	</div>
</template>
<script>
export default {
	name: "Navbar",
};
</script>

<style scoped>
a {
	margin: 24px;
	color: black !important;
}
#app {
	margin: 5vh auto;
}
</style>

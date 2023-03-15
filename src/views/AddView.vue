<template>
	<div class="add">
		<h1>Add Users Here</h1>

		<nav>
			<router-link to="/">List</router-link>
			<button @click="getUserById()">CLIC</button>
		</nav>
		<router-view />
	</div>
</template>

<script>
export default {
	name: "AddView",
	data() {
		return {
			name: "",
			email: "",
			gender: "",
			jobTitle: "",
		};
	},
	methods: {
		createUser() {
			const newUser = {
				id: this.users[this.users.length - 1].id + 1,
				name: this.name,
				email: this.email,
				gender: this.gender,
				jobTitle: this.jobTitle,
			};

			this.users.push(newUser);

			this.name = "";
			this.email = "";
			this.gender = "";
			this.jobTitle = "";
		},
	},
};
</script>

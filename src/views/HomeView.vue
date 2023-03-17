<template>
	<div class="employee-list">
		<div class="header-list">
			<Navbar />
			<h1 class="title">EMPLOYEE MANAGER</h1>
		</div>
		<md-table>
			<md-table-row>
				<md-table-head md-numeric>ID</md-table-head>
				<md-table-head>Name</md-table-head>
				<md-table-head>Email</md-table-head>
				<md-table-head>Gender</md-table-head>
				<md-table-head>Job Title</md-table-head>
			</md-table-row>
			<md-table-row v-for="user in users" :key="user._id">
				<md-table-cell md-numeric>{{ user._id }}</md-table-cell>
				<md-table-cell>{{ user.name }}</md-table-cell>
				<md-table-cell>{{ user.email }}</md-table-cell>
				<md-table-cell>{{ user.gender }}</md-table-cell>
				<md-table-cell>{{ user.jobTitle }}</md-table-cell>
				<md-table-cell>
					<md-button class="md-raised md-primary" @click="editUser(user._id)"
						>Edit</md-button
					>
					<md-button class="md-raised" @click="deleteFormUser(user._id)"
						>Delete</md-button
					>
				</md-table-cell>
			</md-table-row>
		</md-table>
	</div>
</template>

<style>
.title {
	text-align: center;
}
/* .add-employee {
}
.md-table .md-content {
}
.employee-list {
	max-width: 80%;
	margin: 0 auto;
} */
</style>

<script>
import AddView from "@/views/AddView.vue";

import Navbar from "@/components/Navbar.vue";

import globalFunc from "../assets/functions";

// @ is an alias to /src

export default {
	name: "HomeView",
	components: {
		AddView,
		Navbar,
	},

	// on recupere les fonctions globale du crud
	mixins: [globalFunc],

	data() {
		return {
			newUser: {
				name: "",
				email: "",
				gender: "",
				jobTitle: "",
			},
			// showError: false,
		};
	},
	methods: {
		getUserById(id = null) {
			if (id !== null) {
				const user = this.users.find((user) => user._id === id);
				console.log(user);
				return user;
			}
			console.log("ID not provided");
		},

		deleteFormUser(id) {
			this.deleteUser(id);
		},
	},
};
</script>

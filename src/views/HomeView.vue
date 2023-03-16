<template>
	<div class="employee-list">
		<div class="header-list">
			<h1 class="title">EMPLOYEE MANAGER</h1>
			<md-button class="add-employee md-raised md-primary"
				>Add employee</md-button
			>
		</div>
		<md-table>
			<md-table-row>
				<md-table-head md-numeric>ID</md-table-head>
				<md-table-head>Name</md-table-head>
				<md-table-head>Email</md-table-head>
				<md-table-head>Gender</md-table-head>
				<md-table-head>Job Title</md-table-head>
			</md-table-row>
			<md-table-row v-for="user in users" :key="user.id">
				<md-table-cell md-numeric>{{ user.id }}</md-table-cell>
				<md-table-cell>{{ user.name }}</md-table-cell>
				<md-table-cell>{{ user.email }}</md-table-cell>
				<md-table-cell>{{ user.gender }}</md-table-cell>
				<md-table-cell>{{ user.jobTitle }}</md-table-cell>
				<md-table-cell>
					<md-button class="md-raised md-primary">Edit</md-button>
					<md-button @click="getUserById(user.id)" class="md-raised"
						>Delete</md-button
					>
				</md-table-cell>
			</md-table-row>
		</md-table>
		<!-- <add-user-form @addNewUser="addNewUser"></add-user-form> // here to call a potential form if it is in another component -->

		<!-- <template>
			<div>
				<form @submit.prevent="addNewUser">
					<label>
						Name:
						<input type="text" v-model="newUser.name" />
					</label>
					<label>
						Email:
						<input type="email" v-model="newUser.email" />
					</label>
					<label>
						Gender:
						<select v-model="newUser.gender">
							<option value="Male">Male</option>
							<option value="Female">Female</option>
						</select>
					</label>
					<label>
						Job Title:
						<input type="text" v-model="newUser.jobTitle" />
					</label>
					<button type="submit">Add User</button>
				</form>
			</div>
		</template> -->
	</div>
</template>

<style>
.title {
	text-align: center;
}
.add-employee {
}
.md-table .md-content {
}
.employee-list {
	max-width: 80%;
	margin: 20vh auto;
}
</style>

<script>
import AddView from "@/views/AddView.vue";
// @ is an alias to /src

export default {
	name: "HomeView",
	components: {
		AddView,
	},
	data() {
		return {
			users: [
				{
					id: 1,
					name: "Shawna Dubbin",
					email: "sdubbin0@geocities.com",
					gender: "Male",
					jobTitle: "Assistant Media Planner",
				},
				{
					id: 2,
					name: "Odette Demageard",
					email: "odemageard1@spotify.com",
					gender: "Female",
					jobTitle: "Account Coordinator",
				},
				{
					id: 3,
					name: "Vera Taleworth",
					email: "vtaleworth2@google.ca",
					gender: "Male",
					jobTitle: "Community Outreach Specialist",
				},
			],
			newUser: {
				name: "",
				email: "",
				gender: "",
				jobTitle: "",
			},
		};
	},
	methods: {
		getAllUsers() {
			return this.users;
		},

		getUserById(id = null) {
			if (id !== null) {
				const user = this.users.find((user) => user.id === id);
				console.log(user);
				return user;
			}
			console.log("ID not provided");
		},

		addUser(newUser) {
			this.users.push(newUser);
		},

		addNewUser() {
			const maxId = this.users.reduce((max, user) => {
				return user.id > max ? user.id : max;
			}, 0);

			const newUser = {
				id: maxId + 1,
				name: this.newUser.name,
				email: this.newUser.email,
				gender: this.newUser.gender,
				jobTitle: this.newUser.jobTitle,
			};
			this.addUser(newUser);
			this.newUser = {};
		},
	},
};
</script>

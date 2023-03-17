<template>
	<div class="add">
		<h1>ADD NEW EMPLOYEE</h1>
		<Navbar />
		<h1>Ajouter un nouveau employé</h1>
		<div>
			<md-field>
				<label>Name</label>
				<md-input type="text" v-model="newUser.name"></md-input>
			</md-field>

			<md-field>
				<label>Email</label>
				<md-input type="email" v-model="newUser.email"></md-input>
			</md-field>

			<md-field>
				<label>Gender</label>
				<md-input type="text" v-model="newUser.gender"></md-input>
			</md-field>

			<md-field>
				<label>Job Title</label>
				<md-input type="text" v-model="newUser.jobTitle"></md-input>
			</md-field>
			<md-button class="add-employee md-raised md-primary"
				>Add employee</md-button
			>
		</div>

		<md-button @click="addNewUser()" class="add-employee md-raised md-primary"
			>Add employee</md-button
		>
		<nav>
			<router-link to="/">List</router-link>
			<HomeView />
		</nav>

		<router-view />
	</div>
</template>

<script>
import globalFunc from "../assets/functions";
import HomeView from "@/views/HomeView.vue";
import Navbar from "@/components/Navbar.vue";
export default {
	name: "TextFields",
	components: {
		HomeView,
		Navbar,
	},

	mixins: [globalFunc],

	data: () => ({
		initial: "Initial Value",
		type: null,
		withLabel: null,
		inline: null,
		number: null,
		textarea: null,
		autogrow: null,
		disabled: null,
	}),
	data() {
		return {
			name: "",
			email: "",
			gender: "",
			jobTitle: "",

			newUser: {
				name: "",
				email: "",
				gender: "",
				jobTitle: "",
			},
		};
	},
	methods: {
		addNewUser() {
			if (
				!this.newUser.name ||
				!this.newUser.email ||
				!this.newUser.gender ||
				!this.newUser.jobTitle
			) {
				// input vide => message d'erreur
				// this.showError = true;
			} else {
				// soummettre le formulaire

				const maxId = this.users.reduce((max, user) => {
					return user._id > max ? user._id : max;
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

				this.showError = false;
			}
		},
	},
};
</script>

<style scoped>
.add {
	margin-left: auto;
	margin-right: auto;
	margin-top: 150px;
	max-width: 80%;
	background-color: #404040;
	color: #ffffff;
}

h1 {
	text-align: center;
	padding-top: 15px;
}

label {
	margin-left: 5px;
}

button {
	color: #ffffff;
	border-radius: 10px;
}
</style>

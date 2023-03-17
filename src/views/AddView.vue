<template>
	<div class="add">
		<Navbar />
		<h1>Ajouter un nouveau employé</h1>
		<div>
			<md-field>
				<label>Nom</label>
				<md-input v-model="type"></md-input>
			</md-field>

			<md-field>
				<label>Email</label>
				<md-input v-model="type"></md-input>
			</md-field>

			<md-field>
				<label>Genre</label>
				<md-input v-model="type"></md-input>
			</md-field>

			<md-field>
				<label>Poste</label>
				<md-input v-model="type"></md-input>
			</md-field>
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
	<!-- <div id="app">
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
	</div> -->
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

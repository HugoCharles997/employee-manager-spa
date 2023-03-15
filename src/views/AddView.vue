<template>
	<div class="add">
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
import HomeView from "@/views/HomeView.vue";
export default {
	name: "TextFields",
	components: {
		HomeView,
	},
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
};
</script>

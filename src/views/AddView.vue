<template>
	<div class="add">
		<div class="header-list">
			<Navbar />
			<h1 class="title">EMPLOYEE MANAGER</h1>
		</div>
		<div class="form">
			<h1>ADD NEW EMPLOYEE</h1>
			<div>
				<md-field class="form-imput">
					<label>Name</label>
					<md-input type="text" v-model="newUser.name"></md-input>
				</md-field>

				<md-field class="form-imput">
					<label>Email</label>
					<md-input type="email" v-model="newUser.email"></md-input>
				</md-field>

				<md-field class="form-imput">
					<label>Gender</label>
					<md-input type="text" v-model="newUser.gender"></md-input>
				</md-field>

				<md-field class="form-imput">
					<label>Job Title</label>
					<md-input type="text" v-model="newUser.jobTitle"></md-input>
				</md-field>
				<md-button @click="addNewUser()" class="add-employee md-raised md-primary">Add employee</md-button>
			</div>
		</div>
		<router-view />
	</div>
</template>

<script>
import HomeView from "@/views/HomeView.vue";
import Navbar from "@/components/Navbar.vue";
export default {
	name: "TextFields",
	components: {
		HomeView,
		Navbar,
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

<style scoped>
.form {
	margin-left: auto;
	margin-right: auto;
	margin-top: 150px;
	max-width: 80%;
	background-color: #404040;
	color: #FFFFFF;
}

h1 {
	text-align: center;
	padding-top: 15px;
}

label {
	margin-left: 5px;
}

.form-imput {
	margin: 0 auto;
	max-width: 90%;
	padding-top: 5%;
}

button {
	margin-left: 5%;
	margin-top: 2%;
	color: #FFFFFF;
	border-radius: 10px;
}
</style>

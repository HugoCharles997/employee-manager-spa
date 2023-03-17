<template>
	<div class="add">
		<div class="header-list">
			<h1 class="title">EMPLOYEE MANAGER</h1>
		</div>
		<div class="form">
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
			<md-button class="add-employee md-raised md-primary">Add employee</md-button>
		</div>
		<router-view />
	</div>
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

<style scoped>
.add {
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

button {
	color: #FFFFFF;
	border-radius: 10px;
}
</style>

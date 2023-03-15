<template>
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
	name: "AddView",
	components: {
		HomeView,
	},
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
	methods: {},
};
</script>

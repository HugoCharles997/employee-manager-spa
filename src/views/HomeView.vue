<template>
	<div>
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
			</md-table-row>
		</md-table>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: "HomeView",
	components: {},
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
		};
	},
};
</script>

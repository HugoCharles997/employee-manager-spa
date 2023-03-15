import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
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
	},
	mutations: {
		addUser(state, newUser) {
			state.users.push(newUser);
		},
	},
	actions: {
		addNewUser(context, newUser) {
			const maxId = context.state.users.reduce((max, user) => {
				return user.id > max ? user.id : max;
			}, 0);

			const user = {
				id: maxId + 1,
				name: newUser.name,
				email: newUser.email,
				gender: newUser.gender,
				jobTitle: newUser.jobTitle,
			};

			context.commit("addUser", user);
		},
	},
});

<template>
	<div class="add">
		<div class="header-list">
			<Navbar />
			<h1 class="title">EMPLOYEE MANAGER</h1>
		</div>
		<div class="form">
			<h1>ADD NEW EMPLOYEE</h1>
			<div>
				<div>

					<md-field class="form-imput">
						<label class="label">Name</label>
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
					<md-button class="add-employee md-raised md-primary"
						>Add employee</md-button
					>
				</div>
			</div>
		</div>
          <form @submit.prevent="addNewUser">
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
            <md-button class="add-employee md-raised md-primary"
              >Add employee</md-button
            >
            </form>
				</div>
			</div>
		</div>
    
    <div v-if=showError> Veuillez remplir tous les champs ! </div>
		<div v-if=showSuccess> Le formulaire a été correctement rempli ! </div>

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
import globalFunc from "@/assets/functions";

export default {
	name: "TextFields",
	components: {
		HomeView,
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

			// booleen pour les messages d'erreurs
			showError: false,
			showSuccess: false,

			initial: "Initial Value",
			type: null,
			withLabel: null,
			inline: null,
			number: null,
			textarea: null,
			autogrow: null,
			disabled: null,
		};
	},

	methods: {
		maxId(users) {
			let maxId = 1;
			for (let i = 0; i < users.length; i++) {
				if (users[i].id > maxId) {
					maxId = users[i].id;
				}
			}
			return maxId + 1;
		},

		addNewUser() {

			// on reset les messages du template a chaque clique sur l'ajout d'utilisateur
			this.showError = false;
			this.showSuccess = false;

			if (
				!this.newUser.name ||
				!this.newUser.email ||
				!this.newUser.gender ||
				!this.newUser.jobTitle
			) {
      
				// input vide => on affiche le message de succes
				this.showError = true;
			} else {

				// soummettre le formulaire

				// on recupere l'id max pour eviter des conflits d'id et maintenir l'uniciter des id
				const maxId = this.maxId(this.users);

				// on rempli l'objet avec les donnnees du formulaire
				const newUser = {
					id: maxId + 1,
					name: this.newUser.name,
					email: this.newUser.email,
					gender: this.newUser.gender,
					jobTitle: this.newUser.jobTitle,
				};

				// on appelle la fonction pour l'ajout de d'utilisateur dans l'api
				this.addUser(newUser);

				// on vide l'objet pour d'autres ajouts
				this.newUser = {};

				// on affiche le message de succes
				this.showSuccess = true;

				// on cache le message d'erreur
				this.showError = false;
			}
		},
	}
};
</script>

<style scoped>
.form {
	margin-left: auto;
	margin-right: auto;
	margin-top: 150px;
	max-width: 80%;
	background-color: white;
}

h1 {
	text-align: center;
	padding-top: 15px;
}

.label {
	margin-left: 5px;
}

.form-imput {
	margin: 0 auto;
	max-width: 90%;
	padding-top: 5%;
}

button {
	color: #ffffff;
	border-radius: 10px;
}
</style>

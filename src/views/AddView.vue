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
</template>

<script>
  export default {
    name: 'TextFields',
    data: () => ({
      initial: 'Initial Value',
      type: null,
      withLabel: null,
      inline: null,
      number: null,
      textarea: null,
      autogrow: null,
      disabled: null
    })
  }
</script>

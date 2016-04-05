import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		const team = this.get('team');
		return team.getPersons();		
	},

	team: Ember.inject.service()
});

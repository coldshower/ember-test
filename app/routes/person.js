import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		const id = params.person_id;
		const team = this.get('team');
		return team.getPersonById(id);
	},
		
	team: Ember.inject.service()
});

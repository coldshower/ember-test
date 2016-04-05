import Ember from 'ember';

export default Ember.Service.extend({
	getPersonById(id) {
		const persons = this.getPersons();
		return persons.findBy('id', id);
	},

	getPersons() {
		return [
			{ id: '1', name: 'David Smith', title: 'Designer' },
			{ id: '2', name: 'John Daniels', title: 'Developer' }
		];
	}
});

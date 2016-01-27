import Ember from 'ember';

export default Ember.Component.extend({
    todos: Ember.Object.create(),
    hasErrors: false,
    actions: {
        submit() {
            console.log('submit');
            this.validate();

            if (this.get('hasErrors')) {
                return;
            }

            return this.attrs['onSave']({
                user: this.$('#usernev').val(),
				nameOfTodo: this.$('#feladatnev').val(),
				priority: this.$('#prio').val(),
                description: this.$('#leiras').val(),
            });
        },
        validate() {
            this.validate();
        }
    },
    
    validate() {
        var user = this.$('#usernev').val();
		var nameOfTodo = this.$('#feladatnev').val();
		var priority = this.$('#prio').val();
        var description = this.$('#leiras').val();
        
        console.log(user, nameOfTodo, priority, description);
        this.set('todos.user', user === '' ? 'Felhasználó kötelező' : '');
		this.set('todos.nameOfTodo', nameOfTodo === '' ? 'Feladatnév kötelező' : '');
		this.set('todos.priority', priority === '' ? 'Prioritás kötelező' : '');
        this.set('todos.description', description === '' ? 'Leírás kötelező' : '');
        
        if (this.get('todos.user') !== '' || this.get('todos.nameOfTodo') !== '' || this.get('todos.priority') !== '' || this.get('todos.description') !== '') {
                    this.set('hasErrors', true);
                    console.log('has error');
        } else {
            this.set('hasErrors', false);
        }
    }
});

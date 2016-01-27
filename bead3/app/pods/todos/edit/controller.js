import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        modifyTodo(formData) {
            console.log(formData);
            var todo = this.get('model');
            todo.setProperties(formData);
            return todo.save().then(() => {
                this.transitionToRoute('todos.list');
            });
        }
    }
});
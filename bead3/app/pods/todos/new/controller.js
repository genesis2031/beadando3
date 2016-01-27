import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newTodo(properties) {
            var instance = this;
            var todo = this.store.createRecord(
                'todo',
                {
                    nameOfTodo: properties.nameOfTodo,
                    priority: properties.priority,
                    description: properties.description
                }
            );

            
this.store.queryRecord('user', {filter: {name: properties.user}}).then(function(found){
                todo.set('user', found[0]);
                console.log(properties.user);
                console.log(todo.user);
                todo.save();
                instance.transitionToRoute('todos.list');
            });
        }
    }
});


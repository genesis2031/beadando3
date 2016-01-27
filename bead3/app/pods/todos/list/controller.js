import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newTodo(properties) {
            console.log(properties);
            var todo = this.store.createRecord(
                'todo', 
                Object.assign(
                    {
                    nameOfTodo: properties.nameOfTodo,
                    priority: properties.priority,
                    description: properties.description
                    }, 
                    properties
                )
            );
            todo.save();
            this.transitionToRoute('todos.list');
        }
        
        
    }
});
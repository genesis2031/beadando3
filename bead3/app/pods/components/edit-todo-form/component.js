import Ember from 'ember';

export default Ember.Component.extend({
    todos: Ember.Object.create(),
    
    actions: {
        submit() {
            if (!this.validate()) {
                return;
            }
            
            this.get('onSave')({
                description: this.$('#leiras').val(),
            });
        }
    },
    
    validate() {
        var description = this.$('#leiras').val();
        
        this.set('todos.description', description === '' ? 'Leírás kötelező' : '');
        
        return this.get('todos.description') === '';
               
    }
});

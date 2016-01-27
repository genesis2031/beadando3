import Ember from 'ember';

export default Ember.Component.extend({
    users: Ember.Object.create(),
    
    actions: {
        submit() {
            if (!this.validate()) {
                return;
            }
            
            this.get('onSave')({
                name: this.$('#usernev').val(),
                neptun: this.$('#neptun').val(),
            });
        }
    },
    
    validate() {
        var name = this.$('#usernev').val();
        var neptun = this.$('#neptun').val();
        
        this.set('users.name', name === '' ? 'Név kötelező' : '');
        this.set('users.neptun', neptun === '' ? 'Neptun kötelező' : '');
        
        return this.get('users.name') === '' && this.get('users.neptun') === '';
    }
});

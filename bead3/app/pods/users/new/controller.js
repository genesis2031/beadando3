import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newUser(formData) {
            console.log(formData);
            // formData.status = 'new';
            // formData.date = Date.now().toLocaleString();
            var user = this.store.createRecord(
                'user', 
                Object.assign(
                    {
                        name: 'PGizi',
                        neptun: '321456'
                    }, 
                    formData
                )
            );
            user.save();
            this.transitionToRoute('users.list');
        }
    }
});
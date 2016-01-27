import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteUser(user) {
            user.deleteRecord();
            user.save();
        }
    }
});

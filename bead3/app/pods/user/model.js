import DS from 'ember-data';

const UserModel = DS.Model.extend({
  name: DS.attr('string'),
  neptun: DS.attr('string'),
   todos: DS.hasMany('todo', { async: true })
});

UserModel.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: 'DFerenc',
            neptun: '123456'
        },  
        {
            id: 2,
            name: 'KPista',
            neptun: '654321'
        },  
    ]
});

export default UserModel;
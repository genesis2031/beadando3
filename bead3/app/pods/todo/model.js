import DS from 'ember-data';

const TodoModel = DS.Model.extend({
  user: DS.belongsTo('user', { async:true }),
  nameOfTodo: DS.attr('string'),
  priority: DS.attr('number'),
  description: DS.attr('string'),
});

TodoModel.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: 'takaritas',
            priority: '4',
            description: 'ize'
        },
        {
            id: 2,
            name: 'mosogatas',
            priority: '5',
            description: 'izebize'
            
        },
    ]
});

export default TodoModel;
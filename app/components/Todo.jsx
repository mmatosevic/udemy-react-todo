var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function () {
        var { id, text, completed, createdAt, completedAt } = this.props;
        var renderDate = () => {
            var message = completed ? 'Completed ' : 'Created ';
            var timestamp = completed ? completedAt : createdAt;
            return message + moment.unix(timestamp).format('DD.MM.YYYY HH:mm:ss');
        }
        return (
            <div onClick={() => {
                this.props.onToggle(id);
            }}>
                <input type='checkbox' checked={completed} onChange={() => { }} />
                {text}
                <p>{renderDate()}</p>
            </div>
        )
    }
});

module.exports = Todo;
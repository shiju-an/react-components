// TODO
class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            done: false
        };
    }

    onListItemClick(item) {
        this.setState({
            done: !this.state.done
        });
    }

    render() {
        var style = {
            fontWeight: this.state.done ? 'bold' : 'normal'
        }

        return (
            <li style={style} onClick = {this.onListItemClick.bind(this)}>
            {this.props.item}</li>
        );
    }
};

var GroceryList = (props) => (
    <ul>
        {props.items.map(item =>
            <GroceryListItem item={item} />
        )}
    </ul>
);

var App = () => (
    <div>
        <h2>Grocery List for Today</h2>
        <GroceryList items={['Tofu','Potatoes','Cry in corner']} />
    </div>
  );

ReactDOM.render(<App />, document.getElementById("app"));

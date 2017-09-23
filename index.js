const element = React.createElement;
const createClass = React.createClass;


class Hello extends React.Component {
    render() {
        const name = this.props.name;
        return element("h1", {
            style: {
                textAlign: 'center'
            }
        }, "Hello World, " + name);
    }
}

const Panel = createClass({
    render: function () {
        const child = element(Hello, {name: "Daniel"}, null);
        return element("div", {
            style: {
                minWidth: 300,
                minHeight: 300,
                backgroundColor: 'AliceBlue'
            }
        }, child);
    }
});

ReactDOM.render(element(Panel, null, null), document.getElementById('root'));
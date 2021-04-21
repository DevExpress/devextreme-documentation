In <a href="https://reactjs.org/docs/forms.html#controlled-components" target="_blank">controlled mode</a>, the parent React component updates a DevExtreme component's state. It should pass new values to the DevExtreme component via properties, as with the `value` property of the `TextBox` component in the following code.

DevExtreme components raise events that you should handle to update the parent component's state. These events are raised only when a user interacts with the component, not when you update a property value programmatically. Each event name is based on the property name. For example, the event for the `value` property is `onValueChange`. An event handler accepts a new property value as a parameter:

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import TextBox from 'devextreme-react/text-box';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                text: 'TEXT'
            };

            this.handleValueChange = this.handleValueChange.bind(this);
        }

        render() {
            return (
                <div>
                    <TextBox
                        value={this.state.text}
                        onValueChange={this.handleValueChange}
                        valueChangeEvent="input"
                    />
                    <br />
                    <div>{this.state.text}</div>
                </div>
            );
        }

        handleValueChange(value) {
            this.setState({
                text: value.toUpperCase()
            });
        }
    }

    export default App;

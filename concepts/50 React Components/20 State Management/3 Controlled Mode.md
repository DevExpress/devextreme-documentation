In <a href="https://reactjs.org/docs/forms.html#controlled-components" target="_blank">controlled mode</a>, the parent React component updates a DevExtreme component's state. It should pass new values to the DevExtreme component via attributes, as with the `value` attribute of the `TextBox` component in the following code.

DevExtreme components raise events that you should handle to update the parent component's state (the `onValueChanged` handler in the code below). These events are raised only when a user interacts with the component, not when you update an attribute value programmatically.

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
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
                        onValueChanged={this.handleValueChange}
                        valueChangeEvent="input"
                    />
                    <br />
                    <div>{this.state.text}</div>
                </div>
            );
        }

        handleValueChange(e) {
            this.setState({
                text: e.value.toUpperCase()
            });
        }
    }

    export default App;

To manage the state of a controlled component, use the component's props. In the example below, the parent of the `TextBox` component determines the `value` property of its child.

DevExtreme components raise events in response to user interaction. The names of these events include the name of the property that changed. For example, when the user changes the `value` property, the component raises the `onValueChange` event. The handler for this event accepts the new property value as a parameter.

Handle component events to update the parent component's state. Note: components don't fire events when you update component data programmatically.

    <!-- tab: App.jsx -->
    import React, { useState } from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import TextBox from 'devextreme-react/text-box';


    const App = () => {
    const [text, setText] = useState('TEXT');

    const handleValueChange = (value) => {
        setText(value.toUpperCase());
    };

    return (
        <div>
        <TextBox
            value={text}
            onValueChange={handleValueChange}
            valueChangeEvent="input"
        />
        <br />
        <div>{text}</div>
        </div>
    );
    };

    export default App;

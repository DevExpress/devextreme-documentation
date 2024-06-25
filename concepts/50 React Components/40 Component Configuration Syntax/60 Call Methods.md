To call UI component methods, you need the UI component instance. Create a <a href="https://react.dev/learn/referencing-values-with-refs" target="_blank">ref</a> and attach it to the target component via the `ref` property. In the following code, this approach is used to get a `TextBox` instance:
    
    <!-- tab: Function component -->
    import React, { useRef, useCallback } from 'react';
    import Button from 'devextreme-react/button';
    import TextBox from 'devextreme-react/text-box';

    export default function App() {
        const textBox = useRef(null);
        const focusTextBox = useCallback(() => {
            // `current.instance()` points to the UI component instance 
            textBox.current.instance().focus();
        }, []);

        return (
            <div>
                <TextBox ref={textBox} />
                <Button text="Focus TextBox" onClick={focusTextBox} />
            </div>
        );
    }
    
    <!-- tab: Class component -->
    import Button from 'devextreme-react/button';
    import TextBox from 'devextreme-react/text-box';

    class App extends React.Component {
        constructor(props) {
            super(props);
            
            this.textBoxRef = React.createRef();
            
            this.focusTextBox = () => {
                this.textBox.focus()
            };
        }

        get textBox() {
            // `current.instance()` points to the UI component instance
            return this.textBoxRef.current.instance();
        }

        render() {
            return (
                <div>
                    <TextBox ref={this.textBoxRef} />
                    <Button text="Focus TextBox" onClick={this.focusTextBox} />
                </div>
            );
        }
    }

Alternatively, you can assign the UI component instance to a variable and use it to call the methods. This approach is not compatible with <a href="https://react.dev/reference/react/hooks" target="_blank">React Hooks</a>.

    <!-- tab: Class component -->
    import Button from 'devextreme-react/button';
    import TextBox from 'devextreme-react/text-box';

    class App extends React.Component {
        constructor(props) {
            super(props);
            
            this.saveTextBoxInstance = this.saveTextBoxInstance.bind(this);
            this.focusTextBox = this.focusTextBox.bind(this);
        }

        saveTextBoxInstance(e) {
            this.textBoxInstance = e.component;
        }

        focusTextBox() {
            this.textBoxInstance.focus();
        }

        render() {
            return (
                <div>
                    <TextBox onInitialized={this.saveTextBoxInstance} />
                    <Button text="Focus TextBox" onClick={this.focusTextBox} />
                </div>
            );
        }
    }

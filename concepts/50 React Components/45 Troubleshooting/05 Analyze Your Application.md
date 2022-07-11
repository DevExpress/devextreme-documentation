React includes a DOM equivalent - a Virtual DOM (VDOM). Virtual DOM is a programming concept or "virtual" representation of a UI. When you insert or change an element, React compares the new VDOM and the previous VDOM. Since a React component is a function, when you use a [string literal](https://reactjs.org/docs/jsx-in-depth.html#string-literals), the literal becomes a new object in memory. Therefore, the comparison result shows that the component has been changed, and the component re-renders.

For example, declare the following component...

    <!-- tab: App.js -->const MyComponent = ({props}) => {
        return <Button>{props.text}</Button>
    }

... and then use it the following way:

    <!-- tab: App.js --><MyComponent props={{text: 'Hello World'}} />

If you implement a component this way, the component always re-renders, even as a value does not change. Re-render side effects can be unpredictable, so we recommend to conform to the following rules.

### Use a Prop Key

When children elements specify [keys](https://reactjs.org/docs/lists-and-keys.html#keys), React uses the keys to compare the children of current and previous DOM nodes. Prop keys allow children components to stay stable between renders.

### Keep Elements out of the Main Function

If a literal does not require an access to the variables, you can take it out of the function bounds.

	<!-- tab: App.js -->// Incorrect:
    const MyComponent = () => <Button style={{marginTop: '10px'}}>Hello World</Button>
	
	// Correct:
    const style = {marginTop: '10px'};
    const MyComponent = () => <Button style={style}>Hello World</Button>

### Wrap Elements in useMemo hook

If an element includes a component variable, wrap this element in the [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo) hook. 


    <!-- tab: App.js -->const MyComponent = (props) => {

        const buttonStyle = React.useMemo(() => {
            return {marginTop: props.marginTop};
        }, [props.marginTop]);

        return <Button style={buttonStyle}>'Hello World'</Button>
        }

If you use class components, declare a variable in the constructor.

### Remove In-Line Handlers
	
If the in-line handlers do not required an access to the component variables, keep them out of the component bounds. Otherwise, keep them out of the render function (if you use class components) or wrap them in the [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback) hook (if you use functions).

    <!-- tab: App.js -->// Incorrect:
    const MyComponent = (props) => <Button onClick={() => alert(props.text)}>Hello World</Button>

    // Correct:
    const MyComponent = (props) => {

        const alertText = React.useCallback(() => {
            alert(props.text)
        }, [props.text]);

        return <Button onClick={alertText}>'Hello World'</Button>
        }

### Use Nested Components

Do not use nested components as the properties.

    <!-- tab: App.js -->// Incorrect:
    <DataGrid loadPanel={{ enabled: false }} ... ></DataGrid>
    
    // Correct:    
    <DataGrid><LoadPanel enabled={false} /> ... </DataGrid>

We also have a help topic that describes these requirements in greater detail: [Component Configuration Syntax](https://js.devexpress.com/Documentation/Guide/React_Components/Component_Configuration_Syntax/).
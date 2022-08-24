As you may know, React includes Virtual DOM (VDOM). It is a "virtual" representation of a UI that is kept in sync with the "real" DOM. When you change a VDOM element, React compares the new and previous VDOMs and re-renders the updated part. The main way you can change a DevExtreme React Component VDOM element is via component props. If you pass an object literal or function as props _inline_, it becomes a new object in memory, different from the previous object. Therefore, the VDOM comparison shows that the component has changed and should be re-rendered even though the actual value remains the same.

For example, implement the code below:

    <!-- tab: App.js -->const MyComponent = (props) => {
        return <Button>{props.hello.text}</Button>
    }

    function App() {
        return (
            <MyComponent hello={{text: 'Hello World'}} />
        );
    }

    export default App;

In this case, the `MyComponent` component always re-renders, even if a value does not change.
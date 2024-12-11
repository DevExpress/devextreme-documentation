Most properties of DevExtreme React Components are implemented as nested configuration components. Do not use objects to specify these properties:

    <!-- tab: App.js -->// Incorrect:
    function App() {
        // ...
        return (
            <DataGrid ...
                selection={{ mode: "single" }} 
            >
        );
    }

    export default App;
    
    // Correct:
    function App() {
        // ...
        return (
            <DataGrid>
                <!-- ... -->
                <Selection mode="single" />
            </DataGrid>
        );
    }

    export default App;    

#include btn-open-codesandbox with {
    href: "https://codesandbox.io/s/simple-array-devextreme-data-grid-forked-z2bigu?file=/App.js:"
}

If you need to use objects, define them outside the component class or function body or wrap them in the [useMemo](https://react.dev/reference/react/useMemo) hook as shown in the following code. In class components, use the constructor to assign the objects to class properties.

    <!-- tab: App.js -->// Incorrect: Inline object
    function App() {
        // ...
        return (
            <!-- ... -->
            <Item ...
                editorType="dxSelectBox"
                editorOptions={{
                    items: positions,
                    searchEnabled: true,
                    value: "CEO"
                }}
            />
        );
    }

    export default App;
	
    // Correct: Object declared outside the component
    const options = {
        items: positions,
        searchEnabled: true,
        value: "CEO"
    };

    function App() {
        // ...
        return (
            <!-- ... -->
            <Item ...
                editorType="dxSelectBox"
                editorOptions={options}
            />
        );
    }

    export default App;

    // Correct: Object wrapped in `useMemo`
    function App() {
        // ...
        const options = React.useMemo(() => ({
            items: positions,
            searchEnabled: true,
            value: "CEO",
        }), []);

        return (
            <!-- ... -->
            <Item ...
                editorType="dxSelectBox"
                editorOptions={options}
            />
        );
    }

    export default App;

#include btn-open-codesandbox with {
    href: "https://codesandbox.io/s/customize-item-devextreme-form-forked-imysxl?file=/App.js"
}
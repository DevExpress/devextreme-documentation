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

#include common-githubbutton with {
    url: "https://codesandbox.io/s/simple-array-devextreme-data-grid-forked-z2bigu?file=/App.js:"
}

If you need to use objects, define them outside component class or function body or wrap them in the [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo) hook as shown in the following code. In class components, use the constructor to assign the objects to class properties.

    <!-- tab: App.js -->// Incorrect:
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
	
    // Correct:
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

    // Or implement inline object inside the function:

    function App() {
        // ...
        const options = React.useMemo({
            items: positions,
            searchEnabled: true,
            value: "CEO"
        }, []);

        return (
            <!-- ... -->
            <Item ...
                editorType="dxSelectBox"
                editorOptions={options}
            />
        );
    }

    export default App;

#include common-githubbutton with {
    url: "https://codesandbox.io/s/customize-item-devextreme-form-forked-imysxl?file=/App.js"
}
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
            <Item
                dataField="Position"
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
            <Item
                dataField="Position"
                editorType="dxSelectBox"
                editorOptions={options}
            />
        );
    }

    export default App;

#include common-githubbutton with {
    url: "https://codesandbox.io/s/customize-item-devextreme-form-forked-imysxl?file=/App.js"
}

If an element includes a component variable, wrap this element in the [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo) hook:


    <!-- tab: App.js -->// Incorrect:
    const MyComponent = (props) => {
        const dataSource = new DataSource({
            store: new ArrayStore({
                data: props.data,
                key: "ID"
            })
        });

        return (
            <List ...
                selectedItemKeys={selection}
                dataSource={dataSource}
            >
            </List>
        );
    }
	
	// Correct:
    const MyComponent = (props) => {
        const dataSource = React.useMemo(() => {
            return new DataSource({
                store: new ArrayStore({
                    data: props.data,
                    key: "ID"
                })
            });
        }, [props.data]);

        return (
            <List ...
                selectedItemKeys={selection}
                dataSource={dataSource}
            >
            </List>
        );
    }


#include common-githubbutton with {
    url: "https://codesandbox.io/s/list-non-working-selection-forked-t76knr?file=/App.js"
}
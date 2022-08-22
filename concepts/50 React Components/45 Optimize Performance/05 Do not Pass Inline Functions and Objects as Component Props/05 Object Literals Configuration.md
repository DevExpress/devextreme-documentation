Do not use properties that exist as nested components inside the component markup:

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

If an object literal does not require an access to component properties, you can extract if from the function body:

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

If you use class components, declare a variable in the constructor.

#include common-githubbutton with {
    url: "https://codesandbox.io/s/list-non-working-selection-forked-t76knr?file=/App.js"
}
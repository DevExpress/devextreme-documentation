If an object literal does not require an access to the variables, you can extract if from the function body.

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


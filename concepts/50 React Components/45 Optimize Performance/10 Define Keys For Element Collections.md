When children elements specify [key](https://reactjs.org/docs/lists-and-keys.html#keys) attributes, React uses the keys to compare the children of current and previous VDOM nodes. Keys allow children components to stay stable between renders.

    <!-- tab: App.js -->// Incorrect:
    const columns = ["CompanyName", "City", "State", "Phone", "Fax"];

    function App() {
        // ...
        return (
            <DataGrid ... >
                {columns.map((col) => {
                    return <Column dataField={col} />;
                })}
            </DataGrid>
        );
    }

    export default App;

    // Correct:
    const columns = ["CompanyName", "City", "State", "Phone", "Fax"];

    function App() {
        // ...
        return (
            <DataGrid ... >
                {columns.map((col) => {
                    return <Column dataField={col} key={uniqueKey} />;
                })}
            </DataGrid>
        );
    }

    export default App;

#include common-githubbutton with {
    url: "https://codesandbox.io/s/simple-array-devextreme-data-grid-forked-cz1m8o"
}

#####See Also#####
- [Component Configuration Syntax](https://js.devexpress.com/Documentation/Guide/React_Components/Component_Configuration_Syntax/)
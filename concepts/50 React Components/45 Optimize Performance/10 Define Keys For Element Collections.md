When child elements specify [key](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key) attributes, React uses the keys to compare the child elements of current and previous VDOM nodes. Keys allow child components to remain stable between renders.

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

#include btn-open-codesandbox with {
    href: "https://codesandbox.io/s/simple-array-devextreme-data-grid-forked-cz1m8o"
}

#####See Also#####
- [Component Configuration Syntax](/concepts/50%20React%20Components/40%20Component%20Configuration%20Syntax/00%20Component%20Configuration%20Syntax.md '/Documentation/Guide/React_Components/Component_Configuration_Syntax/')
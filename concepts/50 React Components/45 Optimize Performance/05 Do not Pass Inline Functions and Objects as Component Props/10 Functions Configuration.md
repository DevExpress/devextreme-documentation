Extract inline handlers from the component class or function body. As an alternative, you can leave them within the component, but in this case wrap them in the [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback) hook (in function components) or extract them from the render function (in class components).

    <!-- tab: App.js -->// Incorrect:
    function App() {
        // ...
        return (
            <DataGrid
                id="grid-container"
                dataSource={employees}
                selectedRowKeys={keys}
                keyExpr="ID"
                onCellPrepared={(e) => {
                    if (e.row && e.row.isSelected) {
                        e.cellElement.style.backgroundColor = "green";
                        console.log("re-render");
                    }
                }}
                showBorders={true}
            >
            </DataGrid>
        );
    }

    export default App;

    // Correct:
    const cellPrepared = (e) => {
        if (e.row && e.row.isSelected) {
            e.cellElement.style.backgroundColor = "green";
            console.log("re-render");
        }
    };

    function App() {
        // ...
        return (
            <DataGrid
                id="grid-container"
                dataSource={employees}
                selectedRowKeys={keys}
                keyExpr="ID"
                onCellPrepared={cellPrepared}
                showBorders={true}
            >
            </DataGrid>
        );
    }

    export default App;

#include common-githubbutton with {
    url: "https://codesandbox.io/s/master-detail-api-devextreme-data-grid-forked-bzeqts?file=/App.js"
}
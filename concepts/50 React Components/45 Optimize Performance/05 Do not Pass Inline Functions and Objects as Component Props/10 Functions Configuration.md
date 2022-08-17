If the in-line handlers do not require an access to the component variables, keep them out of the component body. Otherwise, keep them out of the render function (if you use class components) or wrap them in the [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback) hook (if you use functions).

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
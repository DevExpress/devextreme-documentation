Extract inline handlers from the component class or function body. As an alternative, you can leave them within the component, but in this case wrap them in the [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback) hook (in function components) or extract them from the render function (in class components).

    <!-- tab: App.js -->
    // Incorrect: Inline function
    function App() {
        // ...
        return (
            <DataGrid ...
                keyExpr="ID"
                selectedRowKeys={keys}
                onCellPrepared={(e) => {
                    if (e.row && e.row.isSelected) {
                        e.cellElement.style.backgroundColor = "green";
                    }
                }}
            >
            </DataGrid>
        );
    }

    export default App;

    // Correct: Function declared outside the component
    const cellPrepared = (e) => {
        if (e.row && e.row.isSelected) {
            e.cellElement.style.backgroundColor = "green";
        }
    };

    function App() {
        // ...
        return (
            <DataGrid ...
                keyExpr="ID"
                selectedRowKeys={keys}
                onCellPrepared={cellPrepared}
            >
            </DataGrid>
        );
    }

    export default App;

    // Correct: Function wrapped in `useCallback`
    function App() {
        // ...
        const cellPrepared = React.useCallback((e) => {
            if (e.row && e.row.isSelected) {
                e.cellElement.style.backgroundColor = "green";
            }
        }, []);

        return (
            <DataGrid ...
                keyExpr="ID"
                selectedRowKeys={keys}
                onCellPrepared={cellPrepared}
            >
            </DataGrid>
        );
    }

    export default App;

#include common-githubbutton with {
    url: "https://codesandbox.io/s/master-detail-api-devextreme-data-grid-forked-bzeqts?file=/App.js"
}
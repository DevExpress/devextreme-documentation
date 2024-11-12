Reuse parts of your application with custom nested configuration components.

For example, you can wrap common settings to reuse in multiple DataGrids:

    const CommonSettings = () => {
        return (
            <>
                <GroupPanel visible={true} />
                <SearchPanel visible={true} highlightCaseSensitive={true} />
                <Grouping autoExpandAll={false} />
            </>
        );
    };

    const MyGrid = () => (
        <DataGrid>
            <CommonSettings />
            <Column dataField="SaleDate" dataType="date" />
            <Column dataField="Product" />
        </DataGrid>
    );

[important]

Avoid creating custom nested configuration components that update separately from the parent DevExtreme component. If they rely on context or any internal state changes, these updates only apply when the parent re-renders, causing unexpected behavior.

The following code snippet illustrates this problematic approach with pager settings. Avoid such implementations.

    const PagerSettings = () => {
        const pageSizes = useContext(PageSizeContext);
        return (
            <>
                <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
                <Paging defaultPageSize={pageSizes[0]} />
            </>
        );
    };

    const MyGrid = () => (
        <DataGrid>
            <PagerSettings />
            <Column dataField="Region" dataType="string" />
            <Column dataField="Customer" dataType="string" width={150} />
        </DataGrid>
    );

[/important]
#### DevExtreme Reactive

    const HighlightedCell = ({ value, style, ...restProps }) => (
    <Table.Cell
        {...restProps}
        style={{
        backgroundColor: value < 5000 ? 'red' : undefined,
        ...style,
        }}
    >
        <span
        style={{
            color: value < 5000 ? 'white' : undefined,
        }}
        >
        {value}
        </span>
    </Table.Cell>
    );

    const Cell = (props) => {
        const { column } = props;
        if (column.name === 'amount') {
            return <HighlightedCell {...props} />;
        }
        return <Table.Cell {...props} />;
    };

    export default () => {
        return (
            <Grid
            rows={rows}
            columns={columns}
            >
            <Table
                cellComponent={Cell}
            />
            <TableHeaderRow />
            </Grid>
        );
    };

#### DevExtreme React Components

    const HighlightedCell = (cellData) => (
    <div
        style={{
        padding: "14px",
        backgroundColor: cellData.value < 5000 ? "red" : undefined,
        }}
    >
        <span
        style={{
            color: cellData.value < 5000 ? "white" : undefined,
        }}
        >
        {cellData.value}
        </span>
    </div>
    );

    export default () => {
        return (
            <DataGrid
            dataSource={rows}
            >
            {
                columns.map(column => (
                <Column
                    key={column.name}
                    dataField={column.name}
                    caption={column.title}
                    cssClass={column.dataField === "amount" ? "highlightedCell" : ""}
                    cellRender={column.name === 'amount' ? HighlightedCell : undefined}
                >
                </Column>
                ));  
            }
            </DataGrid>
        );
    };
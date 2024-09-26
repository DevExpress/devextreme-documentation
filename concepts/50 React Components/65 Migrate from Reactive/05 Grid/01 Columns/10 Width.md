#### DevExtreme Reactive

    export default () => {
        const [tableColumnExtensions] = useState([
            { columnName: 'region', width: '20%' },
            { columnName: 'sector', width: '15%' },
            { columnName: 'customer', width: 'auto' },
            { columnName: 'product', width: 'auto' },
            { columnName: 'amount', width: 140 },
        ]);

        return (
            <Grid
            rows={rows}
            columns={columns}
            >
            <Table columnExtensions={tableColumnExtensions} />
            <TableHeaderRow />
            </Grid>
        );
    };

#### DevExtreme React Components

    export default () => {
        const [columns] = useState([
            { dataField: "region", caption: "Region", width: "20%" },
            { dataField: "sector", caption: "Sector", width: "15%" },
            { dataField: "customer", caption: "Customer", width: "auto" },
            { dataField: "product", caption: "Product", width: "auto" },
            { dataField: "amount", caption: "Sale Amount", width: 140 },
        ]);

        const [rows] = useState(
            generateRows({ columnValues: globalSalesValues, length: 8 })
        );

        return (
            <div className="card">
            <DataGrid dataSource={rows} columns={columns}></DataGrid>
            </div>
        );
    };
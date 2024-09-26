#### DevExtreme Reactive

    export default () => {
        const [tableColumnExtensions] = useState([
            { columnName: 'subject', wordWrapEnabled: true },
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

    <!-- tab: App.js -->
    export default () => {
        const [columns] = useState([
            {
            dataField: "region",
            caption: "Region",
            cssClass: "word-wrap",
            width: 100,
            },
            { dataField: "sector", caption: "Sector" },
            { dataField: "customer", caption: "Customer" },
            { dataField: "product", caption: "Product" },
            { dataField: "amount", caption: "Sale Amount" },
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

    <!-- tab: styles.css -->
    .word-wrap {  
        white-space: normal;  
    }
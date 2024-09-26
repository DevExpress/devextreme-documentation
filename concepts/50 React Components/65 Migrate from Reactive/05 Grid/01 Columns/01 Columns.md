#### DevExtreme Reactive

    import React, { useState } from 'react';
    import {
        Grid,
        Table,
        TableHeaderRow,
    } from '@devexpress/dx-react-grid-bootstrap4';

    import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';

    import {
        generateRows,
        globalSalesValues,
    } from '../../../demo-data/generator';

    export default () => {
        const [columns] = useState([
        { name: 'region', title: 'Region' },
        { name: 'sector', title: 'Sector' },
        { name: 'customer', title: 'Customer' },
        { name: 'product', title: 'Product' },
        { name: 'amount', title: 'Sale Amount' },
        ]);
        const [rows] = useState(generateRows({ columnValues: globalSalesValues, length: 8 }));

        return (
        <div className="card">
            <Grid
            rows={rows}
            columns={columns}
            >
            <Table />
            <TableHeaderRow />
            </Grid>
        </div>
        );
    };

#### DevExtreme React Components

You have 3 options on how to convert columns:

1. Convert Reactive `columns` to DevExtreme React `columns` object.
2. Convert Reactive `columns` to DevExtreme React JSX `Column` elements.
3. Replace the Reactive configuration with DevExtreme React `Column` elements.

---
##### React

    <!-- tab: Option 1 -->
    import React, { useState } from 'react';

    import {
    DataGrid,
    Column,
    } from 'devextreme-react/data-grid';

    import 'devextreme/dist/css/dx.light.css';

    import {
    generateRows,
    globalSalesValues,
    } from '../../../demo-data/generator';

    export default () => {
    const [columns] = useState([
        { name: 'region', title: 'Region' },
        { name: 'sector', title: 'Sector' },
        { name: 'customer', title: 'Customer' },
        { name: 'product', title: 'Product' },
        { name: 'amount', title: 'Sale Amount' },
    ]);
    const [rows] = useState(generateRows({ columnValues: globalSalesValues, length: 8 }));

    return (
        <div className="card">
        <DataGrid
            dataSource={rows}
            columns={columns.map(({ name, title }) => ({
            name,
            dataField: name,
            caption: title
            }))}
        />
        </div>
    );
    };

    <!-- tab: Option 2 -->
    import React, { useState } from 'react';

    import {
    DataGrid,
    Column,
    } from 'devextreme-react/data-grid';

    import 'devextreme/dist/css/dx.light.css';

    import {
    generateRows,
    globalSalesValues,
    } from '../../../demo-data/generator';

    export default () => {
    const [columns] = useState([
        { name: 'region', title: 'Region' },
        { name: 'sector', title: 'Sector' },
        { name: 'customer', title: 'Customer' },
        { name: 'product', title: 'Product' },
        { name: 'amount', title: 'Sale Amount' },
    ]);
    const [rows] = useState(generateRows({ columnValues: globalSalesValues, length: 8 }));

    return (
        <div className="card">
        <DataGrid dataSource={rows}>
            {
            columns.map((column) => (
                <Column
                key={column.name}
                dataField={column.name}
                caption={column.title}
                >
                </Column>
            ))
            }
        </DataGrid>
        </div>
    );
    };

    <!-- tab: Option 3 -->
    import React, { useState } from 'react';

    import {
    DataGrid,
    Column,
    } from 'devextreme-react/data-grid';

    import 'devextreme/dist/css/dx.light.css';

    import {
    generateRows,
    globalSalesValues,
    } from '../../../demo-data/generator';

    export default () => {
    const [rows] = useState(generateRows({ columnValues: globalSalesValues, length: 8 }));

    return (
        <div className="card">
        <DataGrid dataSource={rows}>
            <Column
            dataField='region'
            caption='Region'
            />
            <Column
            dataField='sector'
            caption='Sector'
            />
            <Column
            dataField='customer'
            title='Customer'
            />
            <Column
            dataField='product'
            title='Product'
            />
            <Column
            dataField='amount'
            title='Sale Amount'
            />
        </DataGrid>
        </div>
    );
    };

---
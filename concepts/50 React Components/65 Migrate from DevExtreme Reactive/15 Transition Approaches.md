You can transfer your DevExtreme Reactive component settings to DevExtreme React in two ways.

### Runtime Conversion

In this approach, you *convert* DevExtreme Reactive settings into DevExtreme React configuration components at runtime.

For example, you want to transition your DevExtreme Reactive Grid component into a DevExtreme React DataGrid. Your column configuration is the following:

    import React, { useState } from 'react'; 
    // ... 
    
    export default () => { 
        const [columns] = useState([ 
            { name: 'region', title: 'Region' }, 
            { name: 'sector', title: 'Sector' }, 
        ]); 
        const [rows] = ...; 
    
        return ( 
            <div className="card"> 
                <Grid 
                    rows={rows} 
                    columns={columns} 
                >    
                    <!-- ... --> 
                </Grid> 
            </div> 
        ); 
    }; 

You can convert DevExtreme Reactive Grid `columns` into DevExtreme DataGrid [columns](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/) object:

    <DataGrid 
        dataSource={rows} 
            columns={columns.map(({ name, title }) => ({ 
            name, 
            dataField: name, 
            caption: title 
        }))} 
    /> 

Note that `rows` transformed into [dataSource](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#dataSource).

You can also convert `columns` to DevExtreme React `Column` configuration components:

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

### Static Replacement

In this approach, you *replace* your DevExtreme Reactive settings with DevExtreme React configuration components.

For instance, if we take the example from the previous section:

    import React, { useState } from 'react'; 
    // ... 
    
    export default () => { 
        const [columns] = useState([ 
            { name: 'region', title: 'Region' }, 
            { name: 'sector', title: 'Sector' }, 
        ]); 
        const [rows] = ...; 
    
        return ( 
            <div className="card"> 
                <Grid 
                    rows={rows} 
                    columns={columns} 
                >    
                    <!-- ... --> 
                </Grid> 
            </div> 
        ); 
    }; 

After replacing everything from scratch, you get the following code:

    <DataGrid dataSource={rows}> 
        <Column 
            dataField='region' 
            caption='Region' 
        /> 
        <Column 
            dataField='sector' 
            caption='Sector' 
        /> 
    </DataGrid> 

#####See Also#####

- [Optimize Performance](/Documentation/Guide/React_Components/Optimize_Performance/)
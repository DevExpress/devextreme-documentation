[DevExtreme Reactive](https://devexpress.github.io/devextreme-reactive/) is a set of React components that integrate with Bootstrap and Material-UI libraries. It includes Grid, Scheduler, and Chart.

Since the v24.2 release, DevExtreme Reactive product line is [deprecated](https://github.com/DevExpress/devextreme-reactive/blob/master/README.md) (end-of–life: December 2025). The purpose of this guide is to help you migrate from DevExtreme Reactive to DevExtreme React.

If you have questions or need assistance during migration, submit a ticket in the [DevExpress Support Center](https://supportcenter.devexpress.com/ticket/create?PlatformedProductId=d34a3391-ecfe-4eed-b996-778955778e04:3dad4948-67d7-11e7-82ec-54271e19360e).

## Examples to Review

DevExtreme Reactive [documentation](https://devexpress.github.io/devextreme-reactive/docs/) contains code snippets in the Guides sections of each component. For each scenario in the documentation, we prepared code snippets that show how to achieve the same results with DevExtreme React components. You can find these snippets under the "Migrate to DevExtreme React" tab.

[image needed]

## Structure and Imports

DevExtreme Reactive uses a modular system where features are integrated through plugins. These plugins nest as child components within a parent.

For example, to build a simple Grid, you had to import `Table` and `TableHeaderRow` plugins:

    import React from 'react'; 
    import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-bootstrap4'; 
    
    export default () => ( 
        <div className="card"> 
            <Grid ... > 
                <Table /> 
                <TableHeaderRow /> 
            </Grid> 
        </div> 
    ); 

DevExtreme React takes a different approach. Most functionality builds directly into the component rather than relying on external plugins. Settings pass to the component, as well as to child components called “configuration components”.

For instance, in DevExtreme React DataGrid you use a `Column` configuration component to configure columns:

    import React from 'react'; 
    import { DataGrid, Column } from 'devextreme-react/data-grid'; 
    
    export default () => { 
        return ( 
            <DataGrid ... > 
                <Column ... /> 
                <Column ... /> 
                <Column ... /> 
            </DataGrid> 
        ); 
    }; 

#####See Also#####

- [Component Configuration Syntax](/Documentation/Guide/React_Components/Component_Configuration_Syntax/)

## Transition Approaches

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

## Themes

DevExtreme Reactive supported Material-UI, Bootstrap 3 and 4 themes.

DevExtreme React includes [built-in themes:](/Documentation/Guide/Themes_and_Styles/Predefined_Themes/) Generic, Material, and Fluent. To minimize migration efforts, you can just switch to one of them.

If our built-in themes don’t meet your requirement, you need to use our [ThemeBuilder](/Documentation/Guide/Themes_and_Styles/ThemeBuilder/#Get_Started/Create_a_New_Theme) tool to create a custom theme.

#####See Also#####

- [Predefined Themes](/Documentation/Guide/Themes_and_Styles/Predefined_Themes/)
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
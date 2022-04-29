Unit testing allows you to test single features (units of the code). A unit can be a function or class. 

The example below illustrates how to create a unit test for the DataGrid UI component. 

Create a simple React application and [add DevExtereme](/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/#One-Command_Setup) to it. 

    npx -p devextreme-cli devextreme add devextreme-react

Add the following imports to the project. Note that this code also loads jQuery, QUnit, and DevExtreme libraries from CDN.

    <!--App.js-->
    // Import dependencies
    import React from 'react'
    import {render, screen, waitFor} from '@testing-library/react'
    import '@testing-library/jest-dom'
    // Import a component
    import DataGridComponent from './DataGrid'

Add the following script to test the DataGrid configuration and the number of loaded records: 

    <!--App.js-->
    import React from 'react';
    import DataGrid from 'devextreme-react/data-grid';

    const dataSource = [{ id: 1, text: 'test' }, { id: 2, text: 'test' }, { id: 3, text: 'test' }, { id: 4, text: 'test' }]

    export default function DataGridComponent() {
        return (
            <DataGrid
            dataSource={dataSource}
            />
        );
    }    
    test('renders DataGrid', async () => {
        render(<DataGridComponent />);

        await waitFor(() => {
            const rowElements = screen.getAllByText('test', {exact: false});
            expect(rowElements.length).toBe(4);
        })
    });

In a project, run the `npm test` command to see the test report. 
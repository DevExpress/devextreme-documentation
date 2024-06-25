Integration testing helps test a component across multiple units. Integration testing does not test unit by unit, but tests all the units as an entity.

The example below illustrates how to test the DataGrid's functionality. The test code adds a new row, saves it, and checks the results.

To get started, create a React application as described in the [Unit Testing](/concepts/50%20React%20Components/60%20Components%20Testing/10%20Unit%20Testing.md '/Documentation/Guide/React_Components/Components_Testing/#Unit_Testing') article and add the test code. This code creates the DataGrid and calls the **addRow** and **saveEditData** methods to create a new row. Timers allow you to call methods continually since all the processes are asynchronous. The final step is to check whether the DataGrid has two visible rows — an initial row and a newly created row.

    <!--JavaScript-->
    import React from 'react';
    import DataGrid, { Editing } from 'devextreme-react/data-grid';

    const dataSource = {key: 'id', store: [
        { id: 1, text: 'test' }, 
        { id: 2, text: 'test' }, 
        { id: 3, text: 'test' }, 
        { id: 4, text: 'test' }
    ]};

    export default function DataGridComponent(props) {
        return (
            <DataGrid
            ref={props.setRef}
            dataSource={dataSource}
            >
            <Editing mode={'batch'} />
            </DataGrid>
        );
    }

    test('renders DataGrid',  async() => {
    const dataGridRef = React.createRef();

    render(<DataGridComponent setRef={dataGridRef} />);

    //DataGrid is rendered asynchronously, so we need to use async/await and waitFor
    await waitFor(() => {
        const rowElements = screen.getAllByText('test', {exact: false});
    })

    dataGridRef.current.instance().addRow();

    //give time to render
    jest.advanceTimersByTime(200);

    dataGridRef.current.instance().saveEditData();

    //give time to render
    jest.advanceTimersByTime(200);

    expect(dataGridRef.current.instance().getVisibleRows().length).toBe(5);
    // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
    expect(dataGridRef.current.instance().hasEditData()).toBe(false);
    });

Run `npm test` command in a test project to see the detailed report of the test and its result.
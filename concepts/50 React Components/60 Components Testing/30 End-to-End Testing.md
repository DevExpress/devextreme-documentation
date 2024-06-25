End-to-End (Functional) testing ignores the component's internal structure and allows you to verify how DevExtreme components work from a user's point of view.

The example below illustrates how to create an End-to-End test for the DataGrid's functionality. The test code emulates a click on the pager. 

Сreate a React application as described in the [Unit Testing](/concepts/50%20React%20Components/60%20Components%20Testing/10%20Unit%20Testing.md '/Documentation/Guide/React_Components/Components_Testing/#Unit_Testing') article and add the test code. This code finds the specified link on the pager and clicks it. A click on the pager triggers the `click` event. The test checks whether the result page index is the same as the expected page index. 

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
            <Paging pageSize={3} />
            </DataGrid>
        );
    }

    test('Page index is changed from dxPager',  async() => {
        const dataGridRef = React.createRef();
        const { container } = render(<DataGridComponent setRef={dataGridRef} />);

        //DataGrid is rendered asynchronously, so we need to use async/await and waitFor
        await waitFor(() => {
            const rowElements = screen.getAllByText(/test/i);
        })

        // eslint-disable-next-line testing-library/no-container,testing-library/no-node-access
        fireEvent.click(container.querySelectorAll('.dx-page')[1]);

        //give time to render
        jest.advanceTimersByTime(200);

        expect(dataGridRef.current.instance().pageIndex()).toBe(1);
    });
#### DevExtreme Reactive

DevExtreme Reactive Grid allowed you to customize the appearance of the entire table using templates (see the `tableComponent` property). Inside your custom templates, you could use built-in components with your own customization (note the `Table.Table` component usage).

    const TableComponent = ({ ...restProps }) => (
    <Table.Table
        {...restProps}
        className="table-striped"
    />
    );

    export default () => {
    return (
        <Grid
        rows={rows}
        columns={columns}
        >
        <Table
            tableComponent={TableComponent}
        />
        <TableHeaderRow />
        </Grid>
    );
    };

#### DevExtreme React components

By contrast, DevExtreme React allows you to replace the rendering of its smaller parts, like rows or cells. This ensures that main data shaping and presentation features work as intended event with custom rendering.

You can customize the appearance of the entire table with CSS as described in the [Customize Cells](/Documentation/Guide/UI_Components/DataGrid/Columns/Customize_Cells/) topic. Data Grid also provides props for common appearance customization, like alternate rows, so that the example above translates to just setting a single prop:

    export default () => {
        return (
            <DataGrid
            rowAlternationEnabled={true}
            dataSource={rows}
            >
            /* columns */
            </DataGrid>
        );
    };
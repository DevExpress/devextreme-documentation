[Templates](/concepts/50%20React%20Components/40%20Component%20Configuration%20Syntax/55%20Markup%20Customization/0%20Markup%20Customization.md '/Documentation/Guide/React_Components/Component_Configuration_Syntax/#Markup_Customization') can include complex template data as an argument. 

To define types for such templates, import the `ComponentTypes` declaration and find the type that ends with `TemplateData`:

    <!-- tab: App.tsx -->
    import DataGrid, { DataGridTypes } from 'devextreme-react/data-grid';
    import Calendar, { CalendarTypes } from 'devextreme-react/calendar';

    // A rendering function
    const gridCell = (data: DataGridTypes.ColumnCellTemplateData) => {
        return <span>Custom text</span>;
    }

    // A component
    const CustomCell = ({ data }: { data: CalendarTypes.CellTemplateData }) => {
        const { text, view } = data;
        return <span>{ text }</span>;
    }

    export default App() {
        return (
            <React.Fragment>
                <DataGrid>
                    <Column cellRender={gridCell} />
                </DataGrid>
                <Calendar cellComponent={CustomCell} />
            </React.Fragment>
        );
    }

[tags] React
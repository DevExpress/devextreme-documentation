DevExtreme supports Generics for properties and methods that operate internal data. You can use Generics inside event handlers and to define instances of data-aware components like DataGrid:

    <!-- tab: App.tsx -->
    import { useRef } from 'react';
    import { Employee, employees as dataSource } from './data';
    import DataGrid, { DataGridTypes, DataGridRef } from 'devextreme-react/data-grid';
    import Button from 'devextreme-react/button';

    function onEditorPreparing(e: DataGridTypes.EditorPreparingEvent<Employee, number>) {
        if (e.dataField === 'LastName' && e.parentType === 'dataRow') {
            e.editorOptions.disabled = e.row?.data && e.row?.data.FirstName === '';
        }
    }

    function App() {
        const dataGrid = useRef<DataGridRef<Employee, number>>(null);

        const onButtonClick = () => {
            const dataGridInstance = dataGrid.current!.instance();
            dataGridInstance.option("disabled", true);
        }

        return (
            <>
                <Button
                    text={"Disable DataGrid"}
                    onClick={onButtonClick}
                />
                <DataGrid<Employee, number>
                    ref={dataGrid}
                    onEditorPreparing={onEditorPreparing}
                    dataSource={dataSource}>
                </DataGrid>
            </>
        );
        }

    export default App;
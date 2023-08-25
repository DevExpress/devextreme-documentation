    <!-- tab: App.tsx -->
    import { useCallback, useRef } from 'react';
    import service, { Employee } from './data';
    import DataGrid from 'devextreme-react/data-grid';
    
    function onEditorPreparing(e: EditorPreparingEvent<Employee, number>) {
        if (e.dataField === 'LastName' && e.parentType === 'dataRow') {
            e.editorOptions.disabled = e.row?.data && e.row?.data.FirstName === '';
        }
    }

    function App() {
        const dataGrid = useRef<DataGrid<Employee, number>>(null);

        const customizeItem = useCallback((item: FormItem) => {
            if (isHomeAddressGroup(item)) {
            const dataGridInstance = dataGrid.current!.instance
            const editing = dataGridInstance.option('editing');
            const rowIndex = dataGridInstance.getRowIndexByKey(editing?.editRowKey!);
            item.visible = dataGridInstance.cellValue(rowIndex, 'AddressRequired');
            }
        }, []);

        return (
            <div className="main">
            <DataGrid<Employee, number>
                ref={dataGrid}
                onEditorPreparing={onEditorPreparing}
                onInitNewRow={onInitNewRow}
                dataSource={dataSource}
                keyExpr={"ID"}
                showBorders={true}>
                <Paging enabled={false} />
                <Editing
                mode={"popup"}
                allowAdding={true}
                allowUpdating={true}>
                <Popup
                    title={"Employee Info"}
                    showTitle={true}
                    width={700}
                    height={725}>
                </Popup>
                <Form customizeItem={customizeItem}>
                    <GroupItem
                    colCount={2}
                    colSpan={2}>
                    <SimpleItem dataField={"FirstName"} />
                    <SimpleItem dataField={"LastName"} />
                    <SimpleItem dataField={"Prefix"} />
                    <SimpleItem dataField={"BirthDate"} />
                    <SimpleItem dataField={"Position"} />
                    <SimpleItem dataField={"HireDate"} />
                    <SimpleItem
                        dataField="Notes"
                        editorType={"dxTextArea"}
                        colSpan={2}
                        editorOptions={notesEditorOptions} />
                    </GroupItem>
                    <SimpleItem
                    dataField={"AddressRequired"}
                    colSpan={2} />
                    <GroupItem
                    caption={"Home Address"}
                    colCount={2}
                    colSpan={2}>
                    <SimpleItem dataField={"StateID"} />
                    <SimpleItem dataField={"Address"} />
                    </GroupItem>
                </Form>
                </Editing>
                <Column
                dataField={"Prefix"}
                caption={"Title"}
                width={70} />
                <Column
                dataField={"FirstName"}
                setCellValue={setCellValue} />
                <Column dataField={"LastName"} />
                <Column
                dataField={"BirthDate"}
                dataType={"date"} />
                <Column
                dataField={"Position"}
                width={170} />
                <Column
                dataField={"HireDate"}
                dataType={"date"} />
                <Column
                dataField={"StateID"}
                caption={"State"}
                width={125}>
                <Lookup
                    dataSource={states}
                    displayExpr={"Name"}
                    valueExpr={"ID"}>
                </Lookup>
                </Column>
                <Column
                dataField={"Address"}
                visible={false} />
                <Column
                dataField={"Notes"}
                visible={false} />
                <Column
                dataField={"AddressRequired"}
                setCellValue={setCellValue}
                visible={false} />
            </DataGrid>
            </div>
        );
        }

export default App;
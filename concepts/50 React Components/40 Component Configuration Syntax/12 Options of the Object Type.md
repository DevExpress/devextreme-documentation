Use nested configuration components. In the following example, we configure the [Chart](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Overview/React/Light) widget's [tooltip](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/tooltip '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/tooltip/') option:
 
    <!-- tab: App.js -->
    import Chart, {
        Tooltip
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart>
                    <Tooltip
                        enabled={true}
                        format="thousands"
                    />
                </Chart>
            );
        }
    }

Object type options that depend on other options' values are not implemented as nested configuration components because they cannot be typed ([editorOptions](/api-reference/_hidden/GridBaseColumn/editorOptions.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editorOptions') in the **DataGrid**, [editorOptions](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/editorOptions.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorOptions') in the **Form**, widget [options](/api-reference/_hidden/dxToolbarItem/options.md '/Documentation/ApiReference/UI_Widgets/dxToolbar/Configuration/items/#options') in the **Toolbar**). These options should be specified with an object.

    <!-- tab: App.js -->
    import DataGrid, {
        Column
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        columnEditorOptions = { width: 100 };

        render() {
            return (
                <DataGrid>
                    <Column
                        editorOptions={this.columnEditorOptions}
                    />
                </DataGrid>
            );
        }
    }

[important] We recommend that you declare the object outside the configuration component to prevent possible issues caused by unnecessary re-rendering.

If you use <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank">React Hooks</a> and need to define a configuration object inside a function, wrap this object in the <a href="https://reactjs.org/docs/hooks-reference.html#usememo" target="_blank">useMemo</a> hook to preserve the object's reference between state changes:

    <!-- tab: App.js -->
    import React, { useState, useMemo } from 'react';
    import Form, { Label, SimpleItem } from 'devextreme-react/form';

    const data = { isAddressRequired: false, Address: '' };

    export default function App() {

        let [visible, setVisible] = useState(false);
        const checkBoxOptions = useMemo(() => {
            return {
                text: "Display Address",
                onValueChanged: (e) => {
                    setVisible(e.value);
                }
            }
        }, []);
        const addressOptions = useMemo(() => {
            return {
                placeholder: 'Enter your addresss',
                maxLength: 50
            }
        }, []);
        
        return (
            <Form formData={data}
                width={400}>
                <SimpleItem
                    dataField="isAddressRequired"
                    editorType="dxCheckBox"
                    editorOptions={checkBoxOptions}>
                    <Label visible={false} />
                </SimpleItem>
                <SimpleItem
                    dataField="Address"
                    editorType="dxTextBox"
                    editorOptions={addressOptions}
                    visible={visible}
                />
            </Form>
        );
    }

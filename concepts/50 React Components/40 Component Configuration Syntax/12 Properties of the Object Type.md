Use nested configuration components. In the following example, we configure the [Chart](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Overview) UI component's [tooltip](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/tooltip '/Documentation/ApiReference/UI_Components/dxChart/Configuration/tooltip/') property:
 
    <!-- tab: Function component -->
    import Chart, {
        Tooltip
    } from 'devextreme-react/chart';

    export default function App() {
        return (
            <Chart>
                <Tooltip
                    enabled={true}
                    format="thousands"
                />
            </Chart>
        );
    }
    
    <!-- tab: Class component -->
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

Object type properties that depend on other properties' values are not implemented as nested configuration components because they cannot be typed (**columns[].**[editorOptions](/api-reference/_hidden/GridBaseColumn/editorOptions.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#editorOptions') in the DataGrid, item's [editorOptions](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/editorOptions.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorOptions') in the Form, **items[].**[options](/api-reference/_hidden/dxToolbarItem/options.md '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/#options') in the Toolbar). These properties should be specified with an object.

    <!-- tab: Function component -->
    import DataGrid, {
        Column
    } from 'devextreme-react/data-grid';

    const columnEditorOptions = { width: 100 };

    export default function App() {
        return (
            <DataGrid>
                <Column
                    editorOptions={columnEditorOptions}
                />
            </DataGrid>
        );
    }
    
    <!-- tab: Class component -->
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

If you use <a href="https://react.dev/reference/react/hooks" target="_blank">React Hooks</a> and need to define a configuration object inside a function component, wrap this object in the <a href="https://react.dev/reference/react/useMemo" target="_blank">useMemo</a> hook to preserve the object's reference between state changes:

    <!-- tab: App.js -->
    import React, { useState, useMemo } from 'react';
    import Form, { Label, SimpleItem } from 'devextreme-react/form';

    const data = { isAddressRequired: false, Address: '' };

    export default function App() {
        const [visible, setVisible] = useState(false);
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

#####See Also#####
- [Custom Nested Configuration Components](/Documentation/Guide/React_Components/Component_Configuration_Syntax/#Custom_Nested_Configuration_Components)
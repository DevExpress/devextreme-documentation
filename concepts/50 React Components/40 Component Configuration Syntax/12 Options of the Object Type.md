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

Certain object type options are not implemented as nested configuration components because they depend on other options' values and cannot be typed ([editorOptions](/api-reference/_hidden/GridBaseColumn/editorOptions.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editorOptions') in the **DataGrid**, [editorOptions](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/editorOptions.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorOptions') in the **Form**, widget [options](/api-reference/10%20UI%20Widgets/dxToolbar/5%20Default%20Item%20Template/options.md '/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/#options') in the **Toolbar**). These options should be specified with an object. We recommend that you declare the object outside the configuration component to prevent unnecessary re-rendering.

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

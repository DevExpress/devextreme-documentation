Use nested configuration components. The following example shows how to configure the [DataGrid](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/React/Light)'s [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/') option:

    <!-- tab: App.js -->
    import DataGrid, {
        Column
    } from 'devextreme-react/data-grid'; 

    class App extends React.Component {
        render() {
            return (
                <DataGrid>
                    <Column
                        dataField="firstName"
                        caption="First Name"
                    />
                    <Column
                        dataField="lastName"
                        caption="Last Name"
                        defaultVisible={true}
                    />
                </DataGrid>
            );
        }
    }

DevExtreme collection UI components also support the `Item` element. It allows you to declare collection items in the UI component markup. An `Item` element can contain custom markup and have attributes that control parts of item appearance, such as `badge` in the following code. The attributes are described in the [items](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxList/Configuration/items/') section of each collection UI component.

    <!-- tab: App.js -->
    import List, {
        Item
    } from 'devextreme-react/list';

    class App extends React.Component {
        render() {
            return (
                <List>
                    <Item>Orange</Item>
                    <Item badge="New">White</Item>
                    <Item>Black</Item>
                </List>
            );
        }
    }

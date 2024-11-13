Use nested configuration components. The following example shows how to configure the [DataGrid](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview)'s [columns](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/') property:

    <!-- tab: Function component -->
    import DataGrid, {
        Column
    } from 'devextreme-react/data-grid';

    export default function App() {
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
    
    <!-- tab: Class component -->
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

DevExtreme collection UI components also support the `Item` element. It allows you to declare collection items in the UI component markup. An `Item` element can contain custom markup and have properties that control parts of item appearance, such as `badge` in the following code. The properties are described in the [items](/api-reference/10%20UI%20Components/dxList/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxList/Configuration/items/') section of each collection UI component.

    <!-- tab: Function component -->
    import List, {
        Item
    } from 'devextreme-react/list';

    export default function App() {
        return (
            <List>
                <Item>Orange</Item>
                <Item badge="New">White</Item>
                <Item>Black</Item>
            </List>
        );
    }
    
    <!-- tab: Class component -->
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

#####See Also#####
- [Custom Nested Configuration Components](/concepts/50%20React%20Components/40%20Component%20Configuration%20Syntax/80%20Custom%20Nested%20Configuration%20Components.md '/Documentation/Guide/React_Components/Component_Configuration_Syntax/#Custom_Nested_Configuration_Components')
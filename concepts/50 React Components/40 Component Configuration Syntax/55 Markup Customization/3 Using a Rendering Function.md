Imagine a scenario where you need to render a list of items, each with a unique piece of content or styling. In this case, use *'render'* property. You can create a rendering function that generates the custom content for each item.

In the following code, rendering functions are used to specify the [List](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/React/Light)'s [itemRender](/Documentation/ApiReference/UI_Components/dxList/Configuration/#itemRender') and the [Button](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/PredefinedTypes/React/Light)'s [render](/Documentation/ApiReference/UI_Components/dxButton/Configuration/#render):

    <!-- tab: Function component -->
    import List from 'devextreme-react/list';
    import Button from 'devextreme-react/button';

    const renderListItem = (itemData) => {
        return <p>{itemData.itemProperty}</p>;
    }
    const renderButton = (button) => {
        return <div style={{ padding: 20 }}><p>{button.text}</p></div>;
    }

    export default function App() {
        return (
            <React.Fragment>
                <List itemRender={renderListItem} />
                <Button render={renderButton} />
            </React.Fragment>
        );
    }
    
    <!-- tab: Class component -->
    import List from 'devextreme-react/list';
    import Button from 'devextreme-react/button';

    const renderListItem = (itemData) => {
        return <p>{itemData.itemProperty}</p>;
    }
    const renderButton = (button) => {
        return <div style={{ padding: 20 }}><p>{button.text}</p></div>;
    }
    class App extends React.Component {
        render() {
            return (
                <React.Fragment>
                    <List itemRender={renderListItem} />
                    <Button render={renderButton} />
                </React.Fragment>
            );
        }
    }

If you use local variables within the rendering function, to avoid unnecessary re-renders, wrap the rendering function in a [useMemo](https://react.dev/reference/react/useMemo) callback.

    <!-- Function component -->
    import React, { useState, useMemo } from "react";
    import TextBox from "devextreme-react/text-box";
    import DataGrid, { Column } from "devextreme-react/data-grid";

    const dataSource = [1, 2, 3, 4, 5];

    function App() {
        const [value, setValue] = useState(".");

        const onTextBoxValueChange = (e) => {
            setValue(e);
        };

        const cell = useMemo(
            () => (e) => {
                return <div>{e.data + value}</div>;
            },
            [value]
        );

        return (
            <>
                <TextBox value={value} onValueChange={onTextBoxValueChange} />
                <DataGrid dataSource={dataSource}>
                    <Column caption="Low" cellRender={cell} />
                </DataGrid>
            </>
        );
    }

    export default App;
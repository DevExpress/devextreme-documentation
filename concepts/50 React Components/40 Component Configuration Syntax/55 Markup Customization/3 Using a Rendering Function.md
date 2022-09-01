[note]A rendering function is not a full-fledged <a href="https://en.reactjs.org/docs/render-props.html" target="_blank">React component</a>. A rendering function returns static markup, does not use props or modify the state.

In the following code, rendering functions are used to specify the [List](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/React/Light)'s [itemTemplate](/api-reference/10%20UI%20Components/dxList/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#itemTemplate') and the [Button](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/PredefinedTypes/React/Light)'s [template](/api-reference/10%20UI%20Components/dxButton/1%20Configuration/template.md '/Documentation/ApiReference/UI_Components/dxButton/Configuration/#template'):

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
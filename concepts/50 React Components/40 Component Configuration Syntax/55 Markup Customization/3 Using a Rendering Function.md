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
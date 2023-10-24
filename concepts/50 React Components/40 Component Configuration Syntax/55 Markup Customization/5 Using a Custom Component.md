You can define custom content markup in a separate component. This component is rendered in the virtual DOM, and any changes trigger a rerender of the component.

For example, you need to display a dynamic form in your application, and each time a different form configuration is required. You can implement a component for your form and pass it to the *'component'* property.

For Class components, we recommend using <a href="https://reactjs.org/docs/react-api.html#reactpurecomponent" target="_blank">`React.PureComponent`</a> because `React.Component` can be re-rendered unnecessarily. Alternatively, you can implement the <a href="https://reactjs.org/docs/react-component.html#shouldcomponentupdate" target="_blank">shouldComponentUpdate()</a> method.

In the following code, custom components are used to specify the [List](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/React/Light)'s [itemComponent](/Documentation/ApiReference/UI_Components/dxList/Configuration/#itemComponent) and the [Button](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/PredefinedTypes/React/Light)'s [component](/Documentation/ApiReference/UI_Components/dxButton/Configuration/#component). Template variables are passed to the components as props.
    
    <!-- tab: Function component -->
    import React from 'react';
    import List from 'devextreme-react/list';
    import Button from 'devextreme-react/button';

    const ListItemTmpl = ({ data }) => {
        return (
            <p>{data.itemProperty}</p>
        );
    };

    const ButtonTmpl = ({ data }) => {
        return (
            <div style={{ padding: 20 }}>
                <p>{data.text}</p>
            </div>
        );
    };

    function App() {
        return (
            <div>
                <List itemComponent={ListItemTmpl} />
                <Button component={ButtonTmpl} />
            </div>
        );
    };

    export default App;

    <!-- tab: Class component -->
    import List from 'devextreme-react/list';
    import Button from 'devextreme-react/button';

    class ListItemTmpl extends React.PureComponent {
        render() {
            return (
                <p>{this.props.data.itemProperty}</p>
            );
        }
    }

    class ButtonTmpl extends React.PureComponent {
        render() {
            return (
                <div style={{ padding: 20 }}>
                    <p>{this.props.data.text}</p>
                </div>
            );
        }
    }

    class App extends React.Component {
        render() {
            return (
                <React.Fragment>
                    <List itemComponent={ListItemTmpl} />
                    <Button component={ButtonTmpl} />
                </React.Fragment>
            );
        }
    }
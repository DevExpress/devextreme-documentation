You can define the template markup in a separate component. We recommend using <a href="https://reactjs.org/docs/react-api.html#reactpurecomponent" target="_blank">`React.PureComponent`</a> because `React.Component` can be re-rendered unnecessarily. Alternatively, you can implement the <a href="https://reactjs.org/docs/react-component.html#shouldcomponentupdate" target="_blank">shouldComponentUpdate()</a> method.

In the following code, custom components are used to specify the [List](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/React/Light)'s [itemTemplate](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#itemTemplate') and the [Button](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/PredefinedTypes/React/Light)'s [template](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/template.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#template'). Template variables are passed to the components as props.

    <!-- tab: App.js -->
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
Several properties are not implemented as nested configuration components (**columns[].**[editorOptions](/api-reference/_hidden/GridBaseColumn/editorOptions.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#editorOptions') in the DataGrid, item's [editorOptions](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/editorOptions.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorOptions') in the Form, **items[]**.[options](/api-reference/_hidden/dxToolbarItem/options.md '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/#options') in the Toolbar). These properties do not have the `render` or `component` property to which you would pass your rendering function or custom component. However, you can still customize the markup &mdash; using the `Template` element.

The `Template` element declares a named template. Its `name` property should be assigned to a `...Template` property of the UI component that uses the `Template`. The template's markup can be specified as follows:

- **Rendering function**        
Pass the rendering function to the `Template`'s `render` property:

        <!-- tab: Function component -->
        import Form, { Item } from 'devextreme-react/form';
        import { Template } from 'devextreme-react/core/template';

        import service from './data.js';

        const renderSelectBoxItem = (item) => {
            return <div>{item.toUpperCase()}</div>;
        }
        const employee = service.getEmployee();
        const positions = service.getPositions();
        const positionEditorOptions = {
            items: positions,
            value: '',
            itemTemplate: 'selectBoxItem'
        };

        export default function App() {
            return (
                <Form formData={employee}>
                    <Item
                        dataField="Position"
                        editorType="dxSelectBox"
                        editorOptions={positionEditorOptions}
                    />
                    <Template name="selectBoxItem" render={renderSelectBoxItem} />
                </Form>
            );
        }
        
        <!-- tab: Class component -->
        import Form, { Item } from 'devextreme-react/form';
        import { Template } from 'devextreme-react/core/template';

        import service from './data.js';

        const renderSelectBoxItem = item => {
            return <div>{item.toUpperCase()}</div>;
        }

        class App extends React.Component {
            constructor(props) {
                super(props);
                this.employee = service.getEmployee();
                this.positions = service.getPositions();
                this.positionEditorOptions = {
                    items: this.positions,
                    value: '',
                    itemTemplate: 'selectBoxItem'
                };
            }
            render() {
                return (
                    <Form formData={this.employee}>
                        <Item
                            dataField="Position"
                            editorType="dxSelectBox"
                            editorOptions={this.positionEditorOptions}
                        />
                        <Template name="selectBoxItem" render={renderSelectBoxItem} />
                    </Form>
                );
            }
        }
        export default App;

        <!-- tab: data.js -->
        const employee = {
            ID: 1,
            FirstName: 'John',
            LastName: 'Heart',
            Position: 'CEO',
            BirthDate: '1964/03/16',
            HireDate: '1995/01/15',
            Address: '351 S Hill St., Los Angeles, CA',
            Phone: '360-684-1334',
            Email: 'jheart@dx-email.com'
        };

        const positions = [
            'HR Manager',
            'IT Manager',
            'CEO',
            'Controller',
            'Sales Manager',
            'Support Manager',
            'Shipping Manager'
        ];

        export default {
            getEmployee() {
                return employee;
            },
            getPositions() {
                return positions;
            }
        }

- **Custom component**          
Assign the custom component to the `Template`'s `component` property:

        <!-- tab: Class component -->
        import Form, { Item } from 'devextreme-react/form';
        import { Template } from 'devextreme-react/core/template';

        import service from './data.js';

        class SelectBoxItemTmpl extends React.PureComponent {
            render() {
                return (
                    <div>{this.props.data.toUpperCase()}</div>
                );
            }
        }

        class App extends React.Component {
            constructor(props) {
                super(props);
                this.employee = service.getEmployee();
                this.positions = service.getPositions();
                this.positionEditorOptions = {
                    items: this.positions,
                    value: '',
                    itemTemplate: 'selectBoxItem'
                };
            }
            render() {
                return (
                    <Form formData={this.employee}>
                        <Item
                            dataField="Position"
                            editorType="dxSelectBox"
                            editorOptions={this.positionEditorOptions}
                        />
                        <Template name="selectBoxItem" component={SelectBoxItemTmpl} />
                    </Form>
                );
            }
        }
        export default App;

        <!-- tab: data.js -->
        const employee = {
            ID: 1,
            FirstName: 'John',
            LastName: 'Heart',
            Position: 'CEO',
            BirthDate: '1964/03/16',
            HireDate: '1995/01/15',
            Address: '351 S Hill St., Los Angeles, CA',
            Phone: '360-684-1334',
            Email: 'jheart@dx-email.com'
        };

        const positions = [
            'HR Manager',
            'IT Manager',
            'CEO',
            'Controller',
            'Sales Manager',
            'Support Manager',
            'Shipping Manager'
        ];

        export default {
            getEmployee() {
                return employee;
            },
            getPositions() {
                return positions;
            }
        }
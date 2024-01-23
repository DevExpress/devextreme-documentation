Several properties are not implemented as nested configuration components (**columns[].**[editorOptions](/api-reference/_hidden/GridBaseColumn/editorOptions.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#editorOptions') in the DataGrid, item's [editorOptions](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/editorOptions.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorOptions') in the Form, **items[]**.[options](/api-reference/_hidden/dxToolbarItem/options.md '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/#options') in the Toolbar). These properties do not have a `Render` or `Component` property where you would pass your rendering function or custom component. However, you can still use the `Template` element to customize the markup.

The `Template` element declares a named template. Its `name` property value should be assigned to a `Template` property of the UI component. You can specify the template's markup as follows:

- **Rendering function**        
Pass the rendering function to the `Template`'s `render` property:

        <!-- tab: Function component -->
        import React, { useCallback, useState } from 'react';
        import Form, { Item } from 'devextreme-react/form';
        import { Template } from 'devextreme-react/core/template';
        import service from './data.js';
        import { CheckBox } from 'devextreme-react/check-box';

        const employee = service.getEmployee();
        const positions = service.getPositions();
        const positionEditorOptions = {
            items: positions,
            value: '',
            itemTemplate: 'selectBoxItem'
        };

        export default function App() {
            const [upperCasePositions, setUpperCasePositions] = useState(false);
            const renderSelectBoxItem = useCallback((item) => {
                return <div>{upperCasePositions ? item.toUpperCase() : item}</div>;
            }, [upperCasePositions]);
            const onUpperCaseSettingChange = useCallback((e) => {
                setUpperCasePositions(e.value);
            }, []);
            return (
                <>
                    <CheckBox
                        text="Display positions in upper case"
                        onValueChanged={onUpperCaseSettingChange}
                    />
                    <Form formData={employee}>
                        <Item
                            dataField="Position"
                            editorType="dxSelectBox"
                            editorOptions={positionEditorOptions}
                        />
                        <Template name="selectBoxItem" render={renderSelectBoxItem} />
                    </Form>
                </>
            );
        }
        
        <!-- tab: Class component -->
        import * as React from 'react';
        import Form, { Item } from 'devextreme-react/form';
        import { Template } from 'devextreme-react/core/template';
        import { CheckBox } from 'devextreme-react/check-box';
        import service from './data.js';

        class App extends React.Component {
            constructor(props) {
                super(props);
                this.state = { upperCasePositions: false };
                this.employee = service.getEmployee();
                this.positions = service.getPositions();
                this.renderSelectBoxItem = this.renderSelectBoxItem.bind(this);
                this.onUpperCaseSettingChange = this.onUpperCaseSettingChange.bind(this);
                this.positionEditorOptions = {
                    items: this.positions,
                    value: '',
                    itemTemplate: 'selectBoxItem'
                };
            }
            renderSelectBoxItem(item) {
                return <div>{this.state.upperCasePositions ? item.toUpperCase() : item}</div>;
            }
            onUpperCaseSettingChange(e) {
                this.setState({ upperCasePositions: e.value });
            }
            render() {
                return (
                    <>
                    <CheckBox
                        text="Display positions in upper case"
                        onValueChanged={this.onUpperCaseSettingChange}
                    />
                    <Form formData={this.employee}>
                        <Item
                            dataField="Position"
                            editorType="dxSelectBox"
                            editorOptions={this.positionEditorOptions}
                        />
                        <Template name="selectBoxItem" render={this.renderSelectBoxItem} />
                    </Form>
                </>
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

        <!-- tab: Function component -->
        import React, { useState, useCallback } from 'react';
        import Form, { Item } from 'devextreme-react/form';
        import { Template } from 'devextreme-react/core/template';
        import { Switch } from 'devextreme-react/switch';
        import { RadioGroup } from 'devextreme-react/radio-group';
        import service from './data.js';

        const employee = service.getEmployee();
        const positions = service.getPositions();

        function RadioGroupItemTemplate({ data }) {
            const [lineThrough, setLineThrough] = useState(false);
            const onLineThroughChange = useCallback((e) => {
                setLineThrough(e);
            }, []);
            return (
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Switch onValueChange={onLineThroughChange}/>
                    <div style={{
                        marginLeft: '10px',
                        textDecoration: lineThrough ? 'line-through' : 'none',
                    }}>{data}</div>
                </div>
            );
        };

        function App() {
            const [positionEditorOptions] = useState({
                items: positions,
                value: '',
                itemTemplate: 'radioGroupItem',
            });
            return (
                <div style={{ maxWidth: 400 }}>
                    <Form formData={employee}>
                        <Item
                            dataField="Position"
                            editorType="dxRadioGroup"
                            editorOptions={positionEditorOptions}
                        />
                        <Template name="radioGroupItem" component={RadioGroupItemTemplate} />
                    </Form>
                </div>
            );
        };

        export default App;

        <!-- tab: Class component -->
        import * as React from 'react';
        import Form, { Item } from 'devextreme-react/form';
        import { Template } from 'devextreme-react/core/template';
        import { Switch } from 'devextreme-react/switch';
        import { RadioGroup } from 'devextreme-react/radio-group';
        import service from './data.js';

        class RadioGroupItemTemplate extends React.PureComponent {
            constructor() {
                super();
                this.state = { lineThrough: false };
                this.onLineThroughChange = this.onLineThroughChange.bind(this);
            }
            onLineThroughChange(e) {
                this.setState({ lineThrough: e });
            }
            render() {
                return (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <Switch onValueChange={this.onLineThroughChange}/>
                        <div style={{
                            marginLeft: '10px',
                            textDecoration: this.state.lineThrough ? 'line-through' : 'none',
                        }}>
                            {this.props.data}
                        </div>
                    </div>
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
                    itemTemplate: 'radioGroupItem'
                };
            }
            render() {
                return (
                    <div style={{ maxWidth: 400 }}>
                        <Form formData={this.employee}>
                            <Item
                                dataField="Position"
                                editorType="dxRadioGroup"
                                editorOptions={this.positionEditorOptions}
                            />
                            <Template name="radioGroupItem" component={RadioGroupItemTemplate} />
                        </Form>
                    </div>
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
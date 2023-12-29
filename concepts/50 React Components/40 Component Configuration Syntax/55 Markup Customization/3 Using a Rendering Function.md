The following example customizes a [DataGrid](/concepts/05%20UI%20Components/DataGrid/00%20Getting%20Started%20with%20DataGrid '/Documentation/Guide/UI_Components/DataGrid/Getting_Started_with_DataGrid/') component to display a combination of grid data and a [TextBox](/concepts/05%20UI%20Components/TextBox/00%20Getting%20Started%20with%20TextBox '/Documentation/Guide/UI_Components/TextBox/Getting_Started_with_TextBox/') value within cells. The code wraps a rendering function within a [useCallback](https://react.dev/reference/react/useCallback) hook. This way you can pass the TextBox value to the column's [cellRender](/api-reference/_hidden/dxDataGridColumn/cellRender.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#cellRender') property.

[note] You can also define a rendering function outside of a component if you don't need to pass any dependencies to the *'Render'* property. 

    <!-- tab: Function component -->
    import React, { useState, useCallback } from 'react';
    import TextBox from 'devextreme-react/text-box';
    import DataGrid, { Column } from 'devextreme-react/data-grid';

    const dataSource = [1, 2, 3, 4, 5];

    function App() {
        const [value, setValue] = useState('.');

        const onTextBoxValueChange = (e) => {
            setValue(e);
        };

        const cell = useCallback((cell) => <div>{cell.data + value}</div>, [value]);

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
    
    <!-- tab: Class component -->
    import * as React from 'react';
    import TextBox from 'devextreme-react/text-box';
    import DataGrid, { Column } from 'devextreme-react/data-grid';

    const dataSource = [1, 2, 3, 4, 5];

    class App extends React.Component {
        constructor() {
            super();

            this.renderCell = this.renderCell.bind(this);
            this.onTextBoxValueChange = this.onTextBoxValueChange.bind(this);

            this.state = { value: '.' };
        }

        onTextBoxValueChange(e) {
            this.setState({ value: e });
        };


        renderCell(cell) {
            return <div>{cell.data + this.state.value}</div>;
        }

        render() {
            return (
                <>
                    <TextBox value={this.state.value} onValueChange={this.onTextBoxValueChange} />
                    <DataGrid dataSource={dataSource}>
                        <Column caption="Low" cellRender={this.renderCell} />
                    </DataGrid>
                </>
            );
        }
    }

    export default App;
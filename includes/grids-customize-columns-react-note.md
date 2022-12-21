
---
##### React

Note that the [element_Name]**Render** and [element_Name]**Component** (for example, the **cellRender** and **cellComponent**) do not work within the **customizeColumn** function. Instead, use the [columns](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/columns/) array.

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        // ...
    } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        customizeColumns = (columns) => {
            // ...
            // This code does not work
            // columns[0].cellRender = cellRender;
        }

        render() {
            return (
                <{WidgetName} ...
                    customizeColumns={this.customizeColumns}
                >
                    <!-- ... -->
                    <Column
                        dataField="Picture"
                        cellRender={cellRender} <!-- This code works correctly -->
                    />
                </{WidgetName}>
            );
        }
    }

    function cellRender(data) {
        return <img src={data.value} />;
    }

    export default App;

---
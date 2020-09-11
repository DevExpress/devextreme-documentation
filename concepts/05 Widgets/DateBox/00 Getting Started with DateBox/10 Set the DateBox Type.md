To allow users to specify the date and time, set the [type](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/type.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#type') to *"datetime"*. This will implicitly set [applyValueMode](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/applyValueMode.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#applyValueMode') to *"useButtons"* (i.e., a user must press OK to submit their choices). 

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dateBoxContainer").dxDateBox({
            type: "datetime"
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-date-box    
        type="datetime">
    </dx-date-box>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDateBox
            type="datetime"
        />
    </template>

    <script>
        // ...
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DateBox } from 'devextreme-react/date-box';

    class App extends React.Component {
         render() {
            return (
                <DateBox      
                    type="datetime"
                />
            );
        }
    }
    export default App;

---

Run this code and ensure it is possible to specify the date and time. In the next step, we will set an accepted date range.
The **DateBox** UI component allows an end user to pick or type a value. To specify whether the value should be applied instantly or when a user clicks the **Done** button, set the [applyValueMode](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/applyValueMode.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#applyValueMode') option. Note that this option takes effect only when the [pickerType](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/pickerType.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#pickerType') is *"calendar"* or *"list"*.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dateBoxContainer").dxDateBox({
            value: new Date(),
            type: "date",
            pickerType: "calendar",
            applyValueMode: "useButtons" // or "instantly"
        });
    });

##### Angular

    <!--HTML-->
    <dx-date-box
        [(value)]="date"
        type="date"
        pickerType="calendar"
        applyValueMode="useButtons"> <!-- or "instantly" -->
    </dx-date-box>

    <!--TypeScript-->
    import { DxDateBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        date: Date = new Date()
    }
    @NgModule({
        imports: [
            // ...
            DxDateBoxModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDateBox
            :value="date"
            type="date"
            picker-type="calendar",
            apply-value-mode="useButtons"/> <!-- or "instantly" -->
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDateBox from 'devextreme-vue/date-box';

    export default {
        components: {
            DxDateBox
        },
        data() {
            return {
                date: new Date()
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DateBox from 'devextreme-react/date-box';

    class App extends React.Component {
        constructor(props) {
            constructor(props);

            this.date = new Date();
        }

        render() {
            return (
                <DateBox
                    defaultValue={this.date}
                    type="date"
                    pickerType="calendar"
                    applyValueMode="useButtons" {/* or "instantly" */}
                />
            );
        }
    }
    export default App;

---

#####See Also#####
#include common-link-handleevents
- [DateBox - Handle the Value Change Event](/concepts/05%20Widgets/DateBox/10%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/DateBox/Handle_the_Value_Change_Event')
- [DateBox - Specify Value Range](/concepts/05%20Widgets/DateBox/15%20Specify%20Value%20Range.md '/Documentation/Guide/Widgets/DateBox/Specify_Value_Range')
- [DateBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DateBox/Overview)
- [DateBox API Reference](/api-reference/10%20UI%20Widgets/dxDateBox '/Documentation/ApiReference/UI_Widgets/dxDateBox/')

[tags]date box, dateBox, editor, apply mode, change event, value change event 
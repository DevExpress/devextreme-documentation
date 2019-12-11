---
id: ui.notify(options,type,displayTime)
module: ui/notify
export: default
---
---
##### shortDescription
Creates a toast message.

##### param(options): Object
The **Toast** [configuration](/api-reference/10%20UI%20Widgets/dxToast/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/').

##### param(type): String | undefined
The message's type: *"info"*, *"warning"*, *"error"* or *"success"*.

##### param(displayTime): Number | undefined
The time interval in milliseconds for which the message is displayed.

---
---
#####jQuery

    <!--JavaScript-->
    $(function() {
        DevExpress.ui.notify({ message: "Error message", width: 300, shading: true }, "error", 500);
    })

#####Angular

    <!-- tab: app.component.ts -->
    import { Component, AfterViewInit } from '@angular/core';
    import notify from 'devextreme/ui/notify';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent implements AfterViewInit {
        ngAfterViewInit() { 
            notify({ message: "Error message", width: 300, shading: true }, "error", 500);
        }
    }

#####Vue

    <!-- tab: App.vue -->
    <template>
    </template>
    <script>
    import notify from 'devextreme/ui/notify';

    export default {
        mounted: function() {
            this.$nextTick(() => {
                notify({ message: "Error message", width: 300, shading: true }, "error", 500);
            })
        }
    }
    </script>

#####React

    <!-- tab: App.js -->
    import React from 'react';
    import notify from 'devextreme/ui/notify';

    class App extends React.Component {
        componentDidMount() { 
            notify({ message: "Error message", width: 300, shading: true }, "error", 500);
        }
    }
    export default App;

---

#####See Also#####
- [notify(message, type, displayTime)](/api-reference/50%20Common/utils/ui/notify(message_type_displayTime).md '/Documentation/ApiReference/Common/utils/ui/#notifymessage_type_displayTime')
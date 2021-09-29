---
id: ui.notify(message,type,displayTime)
module: ui/notify
export: default
---
---
##### shortDescription
Creates a toast message.

##### param(message): String
The message's text.

##### param(type): String | undefined
The message's type: *"info"*, *"warning"*, *"error"* or *"success"*.

##### param(displayTime): Number | undefined
The time interval in milliseconds for which the message is displayed.

---
---
#####jQuery

    <!--JavaScript-->
    $(function() {
        DevExpress.ui.notify("Warning message", "warning", 500);
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
            notify("Warning message", "warning", 500);
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
                notify("Warning message", "warning", 500);
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
            notify("Warning message", "warning", 500);
        }
    }
    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/PredefinedTypes/"
}
You can use the following code to create a DropDownButton:

---
##### jQuery

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_21_1/css/dx.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_21_1/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
        </head>
        <body class="dx-viewport">
            <div id="myDropDownButton"></div>
        </body>
    </html>

    <!-- tab: index.js -->
    $(function() {
        $("#myDropDownButton").dxDropDownButton({
            // Configuration goes here
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-drop-down-button
        <!-- Configuration goes here -->
    >
    </dx-drop-down-button>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    #include angular-component-decorator
    export class AppComponent {
        
    }

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDropDownButton
            <!-- Configuration goes here -->
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDropDownButton from 'devextreme-vue/drop-down-button';

    export default {
        components: {
            DxDropDownButton
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import DropDownButton from 'devextreme-react/drop-down-button';

    class App extends React.Component {
        render() {
            return (
                <DropDownButton
                    // Configuration goes here
                />
            );
        }
    }
    export default App;

---
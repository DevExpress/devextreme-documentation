You can use the following library- or framework-specific code to create the ButtonGroup:

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
            <div id="myButtonGroup"></div>
        </body>
    </html>

    <!-- tab: index.js -->
    $(function() {
        $("#myButtonGroup").dxButtonGroup({
            // Configuration goes here
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-button-group
        <!-- Configuration goes here -->
    >
    </dx-button-group>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {

    }

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxButtonGroup
            <!-- Configuration goes here -->
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxButtonGroup } from 'devextreme-vue/button-group';

    export default {
        components: {
            DxButtonGroup
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { ButtonGroup } from 'devextreme-react/button-group';

    class App extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <ButtonGroup
                    // Configuration goes here
                />
            );
        }
    }

    export default App;

##### ASP.NET MVC Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().ButtonGroup()
        @* Configuration goes here *@
    )

---
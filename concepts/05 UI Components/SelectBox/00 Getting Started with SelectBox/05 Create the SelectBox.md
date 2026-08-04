---
##### jQuery

[Add DevExtreme to your jQuery application](/concepts/58%20jQuery%20Components/05%20Add%20DevExtreme%20to%20a%20jQuery%20Application/00%20Add%20DevExtreme%20to%20a%20jQuery%20Application.md '/Documentation/Guide/jQuery_Components/Add_DevExtreme_to_a_jQuery_Application/') and use the following code to create a SelectBox:

    <!-- tab: index.js -->
    $(function() { 
        $("#selectBox").dxSelectBox({
            // Configuration goes here
        });
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_26_2/css/dx.light.css" />
            <link rel="stylesheet" href="index.css" />

            <script src="https://cdn3.devexpress.com/jslib/minor_26_2/js/dx.all.js"></script>
            <script src="index.js"></script>
        </head>
        <body class="dx-viewport">
            <div id="selectBox"></div>
        </body>
    </html>

##### ASP.NET Core Controls

[Add DevExtreme to your ASP.NET Core application](https://docs.devexpress.com/AspNetCore/401034/devextreme-based-controls/get-started/add-controls-to-a-project) and use the following code snippet to create a SelectBox:

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().SelectBox()
        .ID("selectBox")
    )

##### Angular 

[Add DevExtreme to your Angular application](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/') and use the following code to create a SelectBox:

    <!-- tab: app.component.html -->
    <dx-select-box id="select-box">
        <!-- Configuration goes here -->
    </dx-select-box> 

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxSelectBoxModule } from 'devextreme-angular/ui/select-box';

    @Component({ 
        imports: [DxSelectBoxModule],
        // ...
    }) 
    export class AppComponent { 

    }

##### Vue 

[Add DevExtreme to your Vue application](/concepts/55%20Vue%20Components/05%20Add%20DevExtreme%20to%20a%20Vue%20Application/00%20Add%20DevExtreme%20to%20a%20Vue%20Application.md '/Documentation/Guide/Vue_Components/Add_DevExtreme_to_a_Vue_Application/') and use the following code to create a SelectBox:

    <!-- tab: App.vue -->
    <template> 
        <DxSelectBox id="select-box">
            <!-- Configuration goes here -->
        </DxSelectBox>
    </template> 

    <script setup lang="ts">
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import { DxSelectBox } from 'devextreme-vue/select-box';

    </script>

##### React 

[Add DevExtreme to your React application](/concepts/50%20React%20Components/05%20Add%20DevExtreme%20to%20a%20React%20Application/00%20Add%20DevExtreme%20to%20a%20React%20Application.md '/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/') and use the following code to create a SelectBox:

    <!-- tab: App.tsx -->
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import './App.css';

    import { SelectBox } from 'devextreme-react/select-box';

    export default function App() {
        return (
            <SelectBox id="select-box">
                {/* Configuration goes here */}
            </SelectBox>
        );
    }

---

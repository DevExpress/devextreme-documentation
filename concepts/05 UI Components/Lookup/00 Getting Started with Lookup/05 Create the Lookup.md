
---
##### jQuery
[Add DevExtreme to your jQuery application](/concepts/58%20jQuery%20Components/05%20Add%20DevExtreme%20to%20a%20jQuery%20Application/00%20Add%20DevExtreme%20to%20a%20jQuery%20Application.md '/Documentation/Guide/jQuery_Components/Add_DevExtreme_to_a_jQuery_Application/') and use the following code to create a Lookup:

    <!-- tab: index.js -->
    $(function() {
        $("#lookup").dxLookup({ });
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_21_2/css/dx.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_21_2/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
        </head>
        <body>
            <div id="lookup"></div>
        </body>
    </html>


##### Angular

[Add DevExtreme to your Angular application](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/') and use the following code to create a Lookup:

    <!-- tab: app.component.html -->
    <dx-lookup></dx-lookup>

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
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxLookupModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxLookupModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

[Add DevExtreme to your Vue application](/concepts/55%20Vue%20Components/05%20Add%20DevExtreme%20to%20a%20Vue%20Application/00%20Add%20DevExtreme%20to%20a%20Vue%20Application.md '/Documentation/Guide/Vue_Components/Add_DevExtreme_to_a_Vue_Application/') and use the following code to create a Lookup:

    <!-- tab: App.vue -->
    <template>
        <DxLookup>
        </DxLookup>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import { DxLookup } from 'devextreme-vue/lookup';

    export default {
        components: {
            DxLookup
        }
    }
    </script>

##### React

[Add DevExtreme to your React application](/concepts/50%20React%20Components/05%20Add%20DevExtreme%20to%20a%20React%20Application/00%20Add%20DevExtreme%20to%20a%20React%20Application.md '/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/') and use the following code to create a Lookup:

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { Lookup } from 'devextreme-react/lookup';

    function App() {
        return (
            <Lookup>
            </Lookup>
        );
    }

    export default App;


---

On desktops and iOS devices, the Lookup's drop-down menu is the [Popover](/concepts/05%20UI%20Components/Popover/00%20Overview.md '/Documentation/Guide/UI_Components/Popover/Overview/') UI component; on other devices, it is the [Popup](/concepts/05%20UI%20Components/Popup/00%20Getting%20Started%20with%20Popup '/Documentation/Guide/UI_Components/Popup/Getting_Started_with_Popup/') component.

To customize the Popup or Popover, use the [dropDownOptions](/api-reference/10%20UI%20Components/dxLookup/1%20Configuration/dropDownOptions.md '/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#dropDownOptions') object. For example, the following code allows the Lookup to be closed on outside click and removes the item list title:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#lookupContainer").dxLookup({
            // ...
            dropDownOptions: {
                closeOnOutsideClick: true,
                showTitle: false
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-lookup>
        <dxo-drop-down-options
            closeOnOutsideClick="true"
            [showTitle]="false">
        </dxo-drop-down-options>
    </dx-lookup>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxLookup>
            <DxDropDownOptions
                :close-on-outside-click="true"
                :show-title="false"
            />
        </DxLookup>
    </template>

    <script>
    // ...

    import { DxLookup, DxDropDownOptions } from 'devextreme-vue/lookup';

    export default {
        components: {
            DxLookup,
            DxDropDownOptions
        },
        data() {
            return {
                // ...
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import { Lookup, DropDownOptions } from 'devextreme-react/lookup';

    function App() {
        return (
            <Lookup>
                <DropDownOptions
                    closeOnOutsideClick="true"
                    showTitle={false}
                />
            </Lookup>
        );
    }
    export default App;

---
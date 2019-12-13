---
id: dxFormButtonItem.buttonOptions
type: dxButton_Options
default: undefined
---
---
##### shortDescription
Configures the button.

---
See the [Button configuration](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/') for options that you can specify in this object.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            // ...
            items: [{
                itemType: "button",
                buttonOptions: {
                    text: "Do Something",
                    type: "success",
                    onClick: function () {
                        // Implement your logic here
                    }
                }
            }, 
            // ...
            ]
        });
    });

#####Angular

    <!--HTML-->
    <dx-form ...>
        <dxi-item
            itemType="button"
            [buttonOptions]="buttonOptions">
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        buttonOptions = {
            text: "Do Something",
            type: "success",
            onClick: function () {
                // Implement your logic here
            }
        };
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule
        ],
        // ...
    })

---

[note]

#include widgets-config-object-option-note with {
    optionName: "buttonOptions"
}

---
##### Angular

    <!-- tab: app.component.html -->
    <dx-form ... >
        <dxi-item itemType="button">
            <dxo-button-options ...
                [onOptionChanged]="logOption">
            </dxo-button-options>
        </dxi-item>
    </dx-form>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        logOption(e) {
            console.log(e.fullName + ': ' + e.value);
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxFormModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxFormModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-form ... >
            <dx-button-item>
                <dx-button-options ...
                    :on-option-changed="logOption"
                />
            </dx-button-item>
        </dx-form>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxForm, {
        DxButtonItem,
        DxButtonOptions
    } from 'devextreme-vue/form';

    export default {
        components: {
            DxForm,
            DxButtonItem,
            DxButtonOptions
        },
        methods: {
            logOption(e) {
                console.log(e.fullName + ': ' + e.value);
            }
        }
    }
    </script>

---

[/note]
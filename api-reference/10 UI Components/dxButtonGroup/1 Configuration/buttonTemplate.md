---
id: dxButtonGroup.Options.buttonTemplate
type: template
default: 'content'
---
---
##### shortDescription
Specifies a template for all the buttons in the group.

##### param(buttonData): Object
An object from the [items](/api-reference/10%20UI%20Widgets/dxButtonGroup/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxButtonGroup/Configuration/items/') array, extended with the **icon** and **text** fields.

##### param(buttonContent): dxElement
The button content's container.

##### return: String | Element | jQuery
A template name or container.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#buttonGroupContainer").dxButtonGroup({
            // ...
            buttonTemplate: function(itemData, $buttonContent) {
                $buttonContent.append(
                    // Custom jQuery elements go here
                )
                // ===== or =====
                return /* your markup goes here */
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-button-group ... 
        buttonTemplate="myTemplate">
        <div *dxTemplate="let buttonData of 'myTemplate'">
            <!-- your markup goes here -->
        </div>
    </dx-button-group>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxButtonGroupModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxButtonGroupModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxButtonGroup ...
            button-template="myTemplate">
            <template #myTemplate="{ data }">
                <!-- your markup goes here -->
            </template>
        </DxButtonGroup>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxButtonGroup } from 'devextreme-vue';

    export default {
        components: {
            DxButtonGroup
        },
        data() {
            return {
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { ButtonGroup } from 'devextreme-react';

    const renderButton = (data) => {
        return (
            {/* your markup goes here */}
        );
    }

    class App extends React.Component {
        render() {
            return (
                <ButtonGroup ...
                    buttonRender={renderButton}
                />
            );
        }
    }

    export default App;

---
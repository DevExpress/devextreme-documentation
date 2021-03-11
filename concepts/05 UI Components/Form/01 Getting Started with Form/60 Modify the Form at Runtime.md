---
##### jQuery

You can change any properties of the form, its items or editors at runtime. Use the [option(optionName, optionValue)](/Documentation/ApiReference/UI_Components/dxForm/Methods/#optionoptionName_optionValue) method to update a Form property, and the [itemOption(id, option, value)](/api-reference/10%20UI%20Components/dxForm/3%20Methods/itemOption(id_option_value).md '/Documentation/ApiReference/UI_Components/dxForm/Methods/#itemOptionid_option_value') to update the value of an item property. The code below modifies the [readOnly](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#readOnly) property's value:

    <!-- tab: index.js -->
    $(function() {
        const form = $("#form").dxForm({
            formData: {
                // ...
            },
            items: [
                // ...
            ]
        }).dxForm("instance");

        $("#checkBox").dxCheckBox({
            text: "Enable read-only mode",
            value: false,
            onValueChanged: function (e) {
                form.option("readOnly", e.value);
            }
        });
    });

##### Angular

You can change any properties of the form, its items or editors at runtime. To update a property value, bind it to a component property. The code below modifies the [readOnly](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#readOnly) property's value:

    <!-- tab: app.component.html -->
    <dx-form
        [formData]="employee"
        [readOnly]="isFormReadOnly">
        <!-- ... -->
    </dx-form>

    <dx-check-box
        text="Enable read-only mode"
        [(value)]="isFormReadOnly">
    </dx-check-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        employee = {
            // ...
        }

        isFormReadOnly = false
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxFormModule, DxCheckBoxModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxFormModule,
            DxCheckBoxModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

You can change any properties of the form, its items or editors at runtime. To update a property value, bind it to a component property. The code below shows how to modify the [readOnly](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#readOnly) property's value:

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxForm 
                :form-data="employee"
                :read-only="isFormReadOnly">
                <!-- ... -->
            </DxForm>
            <DxCheckBox
                text="Enable read-only mode"
                v-model:value="isFormDisabled"
            />
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, 
        // ... 
    } from 'devextreme-vue/form';
    import { DxCheckBox } from 'devextreme-vue/check-box';
    
    const employee = {
        // ...
    };

    let isFormDisabled = false;

    export default {
        components: {
            DxForm,
            // ...
            DxCheckBox
        },
        data: {
            return: {
                employee,
                isFormDisabled
            }
        }
    }
    </script>

##### React

You can change any properties of the form, its items or editors at runtime. To update a property value, bind it to a component property. The code below shows how to modify the [readOnly](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#readOnly) property's value:

    <!-- tab: App.js -->
    import React, {useState, useCallback } from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        Form,
        // ...
    } from 'devextreme-react/form';

    import { CheckBox } from 'devextreme-react/check-box';

    const employee = {
        // ...
    };

    const App = () => {
        const [isFormDisabled, setIsFormDisabled] = useState(false);

        const onCheckBoxValueChanged = useCallback((e) => {
            setIsFormDisabled(e.value);
        }, []);

        return (
            <div>
                <Form
                    formData={employee}
                    readOnly={isFormDisabled}>
                    {/* ... */}
                </Form>

                <CheckBox
                    text="Enable read-only mode"
                    value={isFormDisabled}
                    onValueChanged={onCheckBoxValueChanged} 
                />
            </div>
        );
    }

    export default App;


---

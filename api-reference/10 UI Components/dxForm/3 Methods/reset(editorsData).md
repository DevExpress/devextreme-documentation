---
id: dxForm.reset(editorsData)
---
---
##### shortDescription
Resets the editors values to the values passed as an argument. Resets all other values to initial values.

##### param(editorsData): Object
New editors data.

---
This method sets the [isDirty]({basewidgetpath}/Configuration/#isDirty) flag to `false`.

---
##### jQuery

    <!--tab: index.js -->
    $(() => {
        const form = $('#form').dxForm({
            // ...
            items: [
                // ...
                {
                    itemType: 'button',
                    buttonOptions: {
                        // ...
                        onClick: () => {
                            form.reset({'name': 'John Smith', 'email': 'johnsmith@example.com'});
                        },
                    }
                }
            ]
        }).dxForm('instance');
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component, ViewChild } from '@angular/core';
    import { DxFormComponent } from 'devextreme-angular';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        @ViewChild('formRef', { static: false }) form: DxFormComponent;

        resetButtonOptions = {
            // ...
            onClick: () => {
                this.form.instance.reset({'name': 'John Smith', 'email': 'johnsmith@example.com'});
            },
        };
    }

    <!-- tab: app.component.html -->
    <dx-form ... 
        #formRef
    >
        <dxi-item
          itemType="button"
          [buttonOptions]="resetButtonOptions"
        >
        </dxi-item>
    </dx-form>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm ...
            :ref="formRef"
        >
            <DxButtonItem ...
                :button-options="resetButtonOptions"
            />
        </DxForm>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxForm, { DxButtonItem }from 'devextreme-vue/form';

    export default {
        components: {
            DxForm,
            DxButtonItem
        },

        data() {
            return {
                formRef,
                resetButtonOptions: {
                    // ...
                    onClick: () => {
                        this.form.reset({'name': 'John Smith', 'email': 'johnsmith@example.com'});
                    },
                }
            }
        },

        computed: {
            form: function() {
                return this.$refs[formRef].instance;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useRef } from 'react';
    import Form, { ButtonItem } from 'devextreme-react/form';
    import 'devextreme/dist/css/dx.light.css';

    const App = () => {
        const formRef = useRef(null);

        const resetButtonOptions = {
            // ...
            onClick: () => {
                this.formRef.current.instance.reset({'name': 'John Smith', 'email': 'johnsmith@example.com'});
            },
        };

        return (
            <Form ...
                ref={formRef}
            >
                <ButtonItem ...
                    buttonOptions={resetButtonOptions}
                />
            </Form>
        );
    };

    export default App;

---

You can use this method without arguments to reset the Form component to initial values.
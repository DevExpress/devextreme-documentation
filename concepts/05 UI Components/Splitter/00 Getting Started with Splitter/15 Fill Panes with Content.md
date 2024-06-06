Splitter panes can include different content types, from simple HTML markup to components. You can declare HTML markup inside the item tag or use the following properties to populate panes with content:

- [text](/api-reference/_hidden/CollectionWidgetItem/text.md '/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/items/#text')   
Specifies the text displayed in the pane.

- [itemTemplate](/api-reference/10%20UI%20Components/dxSplitter/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/#itemTemplate')    
Specifies a custom template for all panes.

- [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/items/#template')    
Specifies a custom template for an individual pane.

This tutorial uses **templates** to define components inside panes: 

- The first pane includes a [Form](/concepts/05%20UI%20Components/Form/01%20Getting%20Started%20with%20Form/00%20Getting%20Started%20with%20Form.md '/Documentation/Guide/UI_Components/Form/Getting_Started_with_Form/') component.
- All changes made in Form are recorded in the second pane.
- The third pane contains a button, and users can click it to erase the output in the second pane and reset the Form. 
- The last pane demonstrates the use of the **text** property. 

---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        const employee = {
            ID: 1,
            FirstName: 'John',
            LastName: 'Heart',
            Position: 'CEO',
            BirthDate: '1964/03/16',
            HireDate: '1995/01/15',
            Notes:
                'John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
            Address: '351 S Hill St., Los Angeles, CA',
            Phone: '360-684-1334',
            Email: 'jheart@dx-email.com',
        };
        const $output = $('<div>Output:</div>');
        $("#splitter").dxSplitter({
            // ...
            items: [
                { 
                    // ...
                    template() {
                        const $form = $("<div id='form'/>");
                        $form.dxForm({
                            formData: employee,
                            onFieldDataChanged(e) {
                                $output.append(`<div>${e.value}</div>`);
                            },
                        });
                        return $form;
                    },
                },
                {
                    splitter: {
                        // ...
                        items: [
                            { 
                                // ...
                                template() {
                                    return $output;
                                },
                            },
                            { 
                                // ...
                                template() {
                                    const $button = $('<div/>');
                                    $button.dxButton({
                                        text: 'Clear all entries',
                                        onClick() {
                                            $('#form').dxForm('reset');
                                            $output.empty();
                                            $output.append('<div>Output:</div>');
                                        },
                                    });
                                    return $button;
                                },
                            },
                            {
                                // ...
                                text: 'All rights are reserved ©',
                            }
                        ]
                    }
                }
            ]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <container>
        <dx-splitter ... >
            <dxi-item ... >
                <dx-form
                    id="form"
                    [formData]="employee"
                    (onFieldDataChanged)="onFieldDataChanged($event)"
                ></dx-form>
            </dxi-item>
            <dxi-item>
                <dx-splitter ... >
                    <dxi-item ... >
                        <div *ngFor="let item of output">{{ item }}</div>
                    </dxi-item>
                    <dxi-item ... >
                        <dx-button
                            text="Clear all entries"
                            (onClick)="resetFormAndOutput()"
                        ></dx-button>
                    </dxi-item>
                    <dxi-item ...
                        text="All rights are reserved ©"
                    ></dxi-item>
                </dx-splitter>
            </dxi-item>
            </dx-splitter>
    </container>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss'],
    })

    export class AppComponent {
        initialEmployee = {
            ID: 1,
            FirstName: 'John',
            LastName: 'Heart',
            Position: 'CEO',
            BirthDate: '1964/03/16',
            HireDate: '1995/01/15',
            Notes: 'John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
            Address: '351 S Hill St., Los Angeles, CA',
            Phone: '360-684-1334',
            Email: 'jheart@dx-email.com',
        };

        employee = { ...this.initialEmployee };

        output: string[] = ['Output:'];

        suppressFieldChangeEvent = false;

        onFieldDataChanged(e: any) {
            if (!this.suppressFieldChangeEvent) {
                this.output.push(e.value);
            }
        }

        resetFormAndOutput() {
            this.suppressFieldChangeEvent = true;
            this.employee = { ...this.initialEmployee };
            this.output = ['Output:'];
            setTimeout(() => {
                this.suppressFieldChangeEvent = false;
            }, 0);
        }
    }


    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser'; 
    import { NgModule } from '@angular/core'; 
    import { AppComponent } from './app.component'; 
    import { DxSplitterModule, DxFormModule, DxButtonModule } from 'devextreme-angular'; 

    @NgModule({ 
        declarations: [ 
            AppComponent 
        ], 
        imports: [ 
            BrowserModule, 
            DxSplitterModule,
            DxFormModule,
            DxButtonModule
        ], 
        providers: [ ], 
        bootstrap: [AppComponent] 
    }) 
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <container>
              <DxSplitter ... >
                <DxItem ... >
                    <DxForm
                        :form-data="employee"
                        @field-data-changed="onFieldDataChanged"
                    />
                </DxItem>
                <DxItem>
                <DxSplitter orientation="vertical" :separator-size="5">
                    <DxItem ... >
                        <div>
                            <div v-for="(item, index) in output" :key="index">{{ item }}</div>
                        </div>
                    </DxItem>
                    <DxItem ... >
                        <DxButton text="Clear all entries" @click="resetFormAndOutput"></DxButton>
                    </DxItem>
                    <DxItem ... 
                        text="All rights are reserved ©" 
                    />
                </DxSplitter>
                </DxItem>
            </DxSplitter>
        </container>
    </template>

    <script setup>  
        import { ref } from 'vue';
        import 'devextreme/dist/css/dx.light.css';
        import DxForm from 'devextreme-vue/form';
        import DxButton from 'devextreme-vue/button';
        import { DxSplitter, DxItem } from 'devextreme-vue/splitter';

        const initialEmployee = {
            ID: 1,
            FirstName: 'John',
            LastName: 'Heart',
            Position: 'CEO',
            BirthDate: '1964/03/16',
            HireDate: '1995/01/15',
            Notes: 'John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
            Address: '351 S Hill St., Los Angeles, CA',
            Phone: '360-684-1334',
            Email: 'jheart@dx-email.com',
        };

        let employee = ref({ ...initialEmployee });
        const output = ref(['Output:']);
        let suppressFieldChangeEvent = ref(false);

        const onFieldDataChanged = (e) => {
            if (!suppressFieldChangeEvent.value) {
                output.value.push(e.value);
            }
        };

        const resetFormAndOutput = () => {
            suppressFieldChangeEvent.value = true;
            employee.value = { ...initialEmployee };
            output.value = ['Output:'];
            setTimeout(() => {
                suppressFieldChangeEvent.value = false;
            }, 0);
        };
    </script>

##### React

    <!-- tab: App.js -->
    import 'devextreme/dist/css/dx.light.css';
    import { useState } from 'react';
    import Form from 'devextreme-react/form';
    import Button from 'devextreme-react/button';
    import Splitter, { Item } from 'devextreme-react/splitter';

    const App = () => {
        const initialEmployee = {
            ID: 1,
            FirstName: 'John',
            LastName: 'Heart',
            Position: 'CEO',
            BirthDate: '1964/03/16',
            HireDate: '1995/01/15',
            Notes: 'John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
            Address: '351 S Hill St., Los Angeles, CA',
            Phone: '360-684-1334',
            Email: 'jheart@dx-email.com',
        };

        const [employee, setEmployee] = useState({ ...initialEmployee });
        const [output, setOutput] = useState(['Output:']);
        const [suppressFieldChangeEvent, setSuppressFieldChangeEvent] = useState(false);

        const onFieldDataChanged = (e) => {
            if (!suppressFieldChangeEvent) {
                setOutput((prevOutput) => [...prevOutput, e.value]);
            }
        };

        const resetFormAndOutput = () => {
            setSuppressFieldChangeEvent(true);
            setEmployee({ ...initialEmployee });
            setOutput(['Output:']);
            setTimeout(() => {
                setSuppressFieldChangeEvent(false);
            }, 0);
        };

        return (
            <Splitter ... >
            <Item ... >
                <Form
                    formData={employee}
                    onFieldDataChanged={onFieldDataChanged}
                />
            </Item>
            <Item>
                <Splitter ... >
                <Item ... >
                    <div>
                        {output.map((item, index) => (
                            <div key={index}>{item}</div>
                        ))}
                    </div>
                </Item>
                <Item ... >
                    <Button
                        text="Clear all entries"
                        onClick={resetFormAndOutput}
                    />
                </Item>
                <Item ...
                    text="All rights are reserved ©" 
                />
                </Splitter>
            </Item>
            </Splitter>
        );
    };

    export default App;

---
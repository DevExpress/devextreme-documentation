---
##### jQuery
[Add DevExtreme to your jQuery application](/concepts/58%20jQuery%20Components/05%20Add%20DevExtreme%20to%20a%20jQuery%20Application/00%20Add%20DevExtreme%20to%20a%20jQuery%20Application.md '/Documentation/Guide/jQuery_Components/Add_DevExtreme_to_a_jQuery_Application/') and use the code below to create a Stepper component with one step. This example utilizes the [items[]](/Documentation/ApiReference/UI_Components/dxStepper/Configuration/items/) array, but you can use [dataSource](/api-reference/10%20UI%20Components/dxStepper/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxStepper/Configuration/dataSource/') to define steps as well. If you do not specify at least one step, Stepper does not display any data.

    <!-- tab: index.js -->
    $(function() {
        $("#stepper").dxStepper({
            items: [
                {}
            ]
        });
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_25_1/css/dx.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_25_1/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
        </head>
        <body>
            <div id="stepper"></div>
        </body>
    </html>


##### Angular

[Add DevExtreme to your Angular application](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/') and use the code below to create a Stepper component with one step. This example utilizes the [items[]](/Documentation/ApiReference/UI_Components/dxStepper/Configuration/items/) array, but you can use [dataSource](/api-reference/10%20UI%20Components/dxStepper/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxStepper/Configuration/dataSource/') to define steps as well. If you do not specify at least one step, Stepper will display no data.

    <!-- tab: app.component.html -->
    <dx-stepper
        [items]="steps">
    </dx-stepper>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxStepperTypes } from 'devextreme-angular/ui/stepper';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        steps: DxStepperTypes.Item[] = [
            {}
        ]
    }

    <!-- tab: app.module.ts -->
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { DxStepperModule } from 'devextreme-angular';
    import { AppRoutingModule } from './app-routing.module';
    import { AppComponent } from './app.component';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            DxStepperModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

[Add DevExtreme to your Vue application](/concepts/55%20Vue%20Components/05%20Add%20DevExtreme%20to%20a%20Vue%20Application/00%20Add%20DevExtreme%20to%20a%20Vue%20Application.md '/Documentation/Guide/Vue_Components/Add_DevExtreme_to_a_Vue_Application/') and use the code below to create a Stepper component with one step. This example utilizes the [items[]](/Documentation/ApiReference/UI_Components/dxStepper/Configuration/items/) array, but you can use [dataSource](/api-reference/10%20UI%20Components/dxStepper/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxStepper/Configuration/dataSource/') to define steps as well. If you do not specify at least one step, Stepper will display no data.

    <!-- tab: App.vue -->
    <script setup lang="ts">
        import { reactive } from 'vue';
        import { DxStepper, DxItem, DxStepperTypes } from 'devextreme-vue/stepper';
        import 'devextreme/dist/css/dx.fluent.blue.light.css';

        const items: DxStepperTypes.Item[] = reactive([
            {}
        ]);
    </script>
    <template>
        <DxStepper ref="stepperRef">
            <DxItem
                v-for="(item, index) in items"
                :key="index"
            />
        </DxStepper>
    </template>

##### React

[Add DevExtreme to your React application](/concepts/50%20React%20Components/05%20Add%20DevExtreme%20to%20a%20React%20Application/00%20Add%20DevExtreme%20to%20a%20React%20Application.md '/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/') and use the code below to create a Stepper component with one step. This example utilizes the [items[]](/Documentation/ApiReference/UI_Components/dxStepper/Configuration/items/) array, but you can use [dataSource](/api-reference/10%20UI%20Components/dxStepper/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxStepper/Configuration/dataSource/') to define steps as well. If you do not specify at least one step, Stepper will display no data.

    <!-- tab: App.tsx -->
    import React, { JSX, useState } from 'react';
    import { Stepper, Item, StepperTypes } from 'devextreme-react/stepper';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    export default function App(): JSX.Element {
        const [steps, setSteps] = useState<any[]>([
            {}
        ]);

        return (
            <Stepper>
                {
                    steps.map((item, index) => (
                        <Item key={index} {...item} />
                    ))
                }
            </Stepper>
        );
    }


---


Specify **items[]**.[template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxStepper/Configuration/items/#template') to customize an individual step, or [itemTemplate](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxStepper/Configuration/#itemTemplate') to customize all steps in the component. This tutorial replaces the first step indicator with a star.

To learn how to define item templates, refer to [Object Structures - template](/Documentation/ApiReference/Common/Object_Structures/template/).

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#stepper").dxStepper({
            items: [{
                label: 'Personal Details',
                template: (data) => `
                    <div class='star dx-step-indicator'></div>
                    <div class='dx-step-caption'>
                        <div class='dx-step-label'>${data.label}</div>
                    </div>
                `,
            }, 
            // ...
            ]
        });
    });

    <!-- tab: index.css -->
    .star { 
        aspect-ratio: 1;
        clip-path: polygon(50% 0,79% 90%,2% 35%,98% 35%,21% 90%); 
        box-shadow: 0 0 0 8px #fafafa;
    }


##### Angular

    <!-- tab: app.component.html -->
    <dx-stepper>
        <dxi-item 
            label="Personal Details"
            template="firstStep"
        ></dxi-item>
        <div *dxTemplate="let data of 'firstStep'">
            <div class='star dx-step-indicator'></div>
            <div class='dx-step-caption'>
                <div class='dx-step-label'>{{ data.label }}</div>
            </div>
        </div>
        <!-- ... -->
    </dx-stepper>

    <!-- tab: app.component.scss -->
    .star { 
        aspect-ratio: 1;
        clip-path: polygon(50% 0,79% 90%,2% 35%,98% 35%,21% 90%); 
        box-shadow: 0 0 0 8px #fafafa;
    }


##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
        // ...
    </script>
    <template>
        <DxStepper>
            <DxItem label='Personal Details' template='star' />
            <template #star="{ data }">
                <div class="star dx-step-indicator"></div>
                <div class="dx-step-caption">
                    <div class="dx-step-label">{{ data.label }}</div>
                </div>
            </template>
            <!-- ... -->
        </DxStepper>
    </template>
    <style>
        .star { 
            aspect-ratio: 1;
            clip-path: polygon(50% 0,79% 90%,2% 35%,98% 35%,21% 90%); 
            box-shadow: 0 0 0 8px #fafafa;
        }
    </style>


##### React

    <!-- tab: App.tsx -->
    const renderFirstItem = (data: StepperTypes.TemplateData) => 
        <React.Fragment>
            <div className="star dx-step-indicator"></div>
            <div className="dx-step-caption">
                <div className="dx-step-label">{data.label}</div>
            </div>
        </React.Fragment>;

    export default function App(): JSX.Element {
        return (
            <Stepper>
                <Item label="Personal Details" render={renderFirstItem} />
                // ...
            </Stepper>
        );
    }

    <!-- tab: index.css -->
    .star { 
        aspect-ratio: 1;
        clip-path: polygon(50% 0,79% 90%,2% 35%,98% 35%,21% 90%); 
        box-shadow: 0 0 0 8px #fafafa;
    }


---
Specify **items[]**.[template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxStepper/Configuration/items/#template') to customize an individual step, or [itemTemplate](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxStepper/Configuration/#itemTemplate') to customize all steps in the component. This tutorial replaces the first step indicator with a star.

For instructions on how to define item templates, refer to [Object Structures - template](/api-reference/50%20Common/Object%20Structures/template '/Documentation/ApiReference/Common/Object_Structures/template/').

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
    <dx-stepper
        [items]="steps"
    >
        <div *dxTemplate="let data of 'starTemplate'">
            <div class="star dx-step-indicator"></div>
            <div class="dx-step-caption">
                <div class="dx-step-label">{{ data.label }}</div>
            </div>
        </div>
    </dx-stepper>

    <!-- tab: app.component.ts -->
    // ...

    @Component({
        // ...
    })
    export class AppComponent {
        steps: DxStepperTypes.Item[] = [
            { label: 'Personal Details', template: 'starTemplate' },
            // ...
        ];
    }

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
        const items: DxStepperTypes.Item[] = reactive([
            { label: 'Personal Details', template: 'star' },
            // ...
        ]);
    </script>
    <template>
        <DxStepper ref="stepperRef" @selection-changed="onSelectionChanged">
            <DxItem
                v-for="(item, index) in items"
                :key="index"
                v-bind="item"
                :template="item.template"
            />
            <template #star="{ data }">
                <div class="star dx-step-indicator"></div>
                <div class="dx-step-caption">
                    <div class="dx-step-label">{{ data.label }}</div>
                </div>
            </template>
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
    // ...

    export default function App(): JSX.Element {
        function renderStarTemplate(data: StepperTypes.Item): JSX.Element {
            return (
                <React.Fragment>
                    <div className="star dx-step-indicator"></div>
                    <div className="dx-step-caption">
                    <div className="dx-step-label">{data.label}</div>
                    </div>
                </React.Fragment>
            );
        }

        const [steps, setSteps] = useState<any[]>([
            { label: 'Personal Details', render: renderStarTemplate },
            // ...
        ]);

        return (
            // ...
        );
    }

    <!-- tab: index.css -->
    .star { 
        aspect-ratio: 1;
        clip-path: polygon(50% 0,79% 90%,2% 35%,98% 35%,21% 90%); 
        box-shadow: 0 0 0 8px #fafafa;
    }


---
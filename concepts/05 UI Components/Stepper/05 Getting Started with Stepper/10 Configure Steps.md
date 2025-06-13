This tutorial specifies the following properties to configure Stepper steps:

- [label](/api-reference/10%20UI%20Components/dxStepper/7%20Interfaces/dxStepperItem/label.md '/Documentation/ApiReference/UI_Components/dxStepper/Configuration/items/#label')    
Assigns a step label.
- [icon](/api-reference/10%20UI%20Components/dxStepper/7%20Interfaces/dxStepperItem/icon.md '/Documentation/ApiReference/UI_Components/dxStepper/Configuration/items/#icon')    
Defines a step icon. For more information on the DevExteme icon library, refer to [DevExtreme Icons](/concepts/60%20Themes%20and%20Styles/30%20Icons/00%20Icons.md '/Documentation/guide/themes_and_styles/icons/').
- [optional](/api-reference/10%20UI%20Components/dxStepper/7%20Interfaces/dxStepperItem/optional.md '/Documentation/ApiReference/UI_Components/dxStepper/Configuration/items/#optional')    
Adds an "Optional" caption.

You can also specify the following properties:

- [isValid](/api-reference/10%20UI%20Components/dxStepper/7%20Interfaces/dxStepperItem/isValid.md '/Documentation/ApiReference/UI_Components/dxStepper/Configuration/items/#isValid')    
Indicates input validation state for a step.
- [text](/api-reference/_hidden/CollectionWidgetItem/text.md '/Documentation/ApiReference/UI_Components/dxStepper/Configuration/items/#text')    
Defines text displayed on a step indicator.
- [hint](/api-reference/10%20UI%20Components/dxStepper/7%20Interfaces/dxStepperItem/hint.md '/Documentation/ApiReference/UI_Components/dxStepper/Configuration/items/#hint')    
Specifies step hint text that appears upon hover or long-press.
- [disabled](/api-reference/_hidden/CollectionWidgetItem/disabled.md '/Documentation/ApiReference/UI_Components/dxStepper/Configuration/items/#disabled')    
Disables a step.

The code below assigns six steps to the component with different configuration options.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#stepper").dxStepper({
            items: [{
                label: 'Personal Details'
            }, {
                label: 'Program Selection',
                icon: 'detailslayout'
            }, {
                label: 'Campus and Start Dates',
                icon: 'map'
            }, {
                label: 'Supporting Documents',
                icon: 'textdocument'
            }, {
                label: 'Scholarship and Aid',
                icon: 'money',
                optional: true
            }, {
                label: 'Review and Submit',
                icon: 'send'
            }]
        });
    });


##### Angular

    <!-- tab: app.component.ts -->
    // ...

    @Component({
        // ...
    })
    export class AppComponent {
        steps = [
            { label: 'Personal Details' },
            { label: 'Program Selection', icon: 'detailslayout' },
            { label: 'Campus and Start Dates', icon: 'map' },
            { label: 'Supporting Documents', icon: 'textdocument' },
            { label: 'Scholarship and Aid', icon: 'money', optional: true },
            { label: 'Review and Submit', icon: 'send' }
        ];
    }


##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
        // ...
        const items = reactive([
            { label: 'Personal Details' },
            { label: 'Program Selection', icon: 'detailslayout' },
            { label: 'Campus and Start Dates', icon: 'map' },
            { label: 'Supporting Documents', icon: 'textdocument' },
            { label: 'Scholarship and Aid', icon: 'money', optional: true },
            { label: 'Review and Submit', icon: 'send' }
        ]);
    </script>
    <template>
        // ...
    </template>


##### React

    <!-- tab: App.tsx -->
    // ...

    export default function App(): JSX.Element {
        const [steps, setSteps] = useState([
            { label: 'Personal Details' },
            { label: 'Program Selection', icon: 'detailslayout' },
            { label: 'Campus and Start Dates', icon: 'map' },
            { label: 'Supporting Documents', icon: 'textdocument' },
            { label: 'Scholarship and Aid', icon: 'money', optional: true },
            { label: 'Review and Submit', icon: 'send' }
        ]);

        return (
            // ...
        );
    }


---
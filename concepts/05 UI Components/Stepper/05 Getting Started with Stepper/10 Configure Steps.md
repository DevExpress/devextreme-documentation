This tutorials specifies the following properties to configure Stepper steps:

- [label](/Documentation/ApiReference/UI_Components/dxStepper/Configuration/items/#label)    
Assigns a step label.
- [icon](/Documentation/ApiReference/UI_Components/dxStepper/Configuration/items/#icon)    
Defines a step icon. For more information on the DevExteme icon library, refer to [DevExtreme Icons](/Documentation/guide/themes_and_styles/icons/).
- [optional](/Documentation/ApiReference/UI_Components/dxStepper/Configuration/items/#optional)    
Adds an "Optional" caption.

You can configure Stepper steps with the following properties as well:

- [isValid](/Documentation/ApiReference/UI_Components/dxStepper/Configuration/items/#isValid)    
A visual indicator for step validation.
- [text](/Documentation/ApiReference/UI_Components/dxStepper/Configuration/items/#text)    
Defines text displayed on a step indicator.
- [hint](/Documentation/ApiReference/UI_Components/dxStepper/Configuration/items/#hint)    
Specifies step hint text that appears upon hover or long-press.
- [disabled](/Documentation/ApiReference/UI_Components/dxStepper/Configuration/items/#disabled)    
Disables a step.

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

    <!-- tab: app.component.html -->
    <dx-stepper>
        <dxi-item 
            label="Personal Details"
        ></dxi-item>
        <dxi-item 
            label="Program Selection"
            icon="detailslayout"
        ></dxi-item>
        <dxi-item 
            label="Campus and Start Dates"
            icon="map"
        ></dxi-item>
        <dxi-item 
            label="Supporting Documents"
            icon="textdocument"
        ></dxi-item>
        <dxi-item 
            label="Scholarship and Aid"
            icon="money"
            [optional]="true"
        ></dxi-item>
        <dxi-item 
            label="Review and Submit"
            icon="send"
        ></dxi-item>
    </dx-stepper>


##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
        // ...
    </script>
    <template>
        <DxStepper>
            <DxItem label='Personal Details' />
            <DxItem label="Program Selection" icon='detailslayout' />
            <DxItem label="Campus and Start Dates" icon='map' />
            <DxItem label="Supporting Documents" icon='textdocument' />
            <DxItem label="Scholarship and Aid" icon='money' :optional='true' />
            <DxItem label="Review and Submit" icon='send' />
        </DxStepper>
    </template>


##### React

    <!-- tab: App.tsx -->
    export default function App(): JSX.Element {
        return (
            <Stepper>
                <Item label="Personal Details" />
                <Item label="Program Selection" icon="detailslayout" />
                <Item label="Campus and Start Dates" icon="map" />
                <Item label="Supporting Documents" icon="textdocument" />
                <Item label="Scholarship and Aid" icon="money" optional={true} />
                <Item label="Review and Submit" icon="send" />
            </Stepper>
        );
    }


---
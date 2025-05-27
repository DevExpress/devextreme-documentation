The Stepper component supports screen readers and complies to <a href="https://www.w3.org/WAI/standards-guidelines/aria/" target="_blank">WAI-ARIA</a> standards. 

Use [elementAttr](/Documentation/ApiReference/UI_Components/dxStepper/Configuration/#elementAttr) to specify the aria-label:

---
##### jQuery

    <!-- tab: index.js -->
    $('#customStepper').dxStepper({
        // ...
        elementAttr: { 'aria-labelledby': 'label-customStepper' },
    });

    <!-- tab: index.html -->
    <div id="label-customStepper">Custom Stepper</div>
    <div id="customStepper"></div>

##### Angular

    <!-- tab: app.component.ts -->
    <div id="label-customStepper">Custom Stepper</div>
    <dx-stepper ...
        [elementAttr]="{ 'aria-labelledby': 'label-customStepper' }"
    >
    </dx-stepper>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="label-customStepper">Custom Stepper</div>
        <DxStepper ... 
            :element-attr="{ 'aria-labelledby': 'label-customStepper' }"
        />
    </template>

##### React

    <!-- tab: App.tsx -->
    export default function App() {
        return (
            <>
                <div id="label-customStepper">Custom Stepper</div>
                <Stepper ...
                    elementAttr={{ 'aria-labelledby': 'label-customStepper' }}
                />
            </>
        );
    }

---
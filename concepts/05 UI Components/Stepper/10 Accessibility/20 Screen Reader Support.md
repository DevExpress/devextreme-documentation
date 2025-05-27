The Stepper component supports screen readers and complies to <a href="https://www.w3.org/WAI/standards-guidelines/aria/" target="_blank">WAI-ARIA</a> standards. 

Use [elementAttr]({basewidgetpath}/Configuration/#elementAttr) to specify the aria-label:

---
##### jQuery

    <!-- tab: index.js -->
    $('#customStepper').dxStepper({
        // ...
        elementAttr: { 'aria-labelledby': 'customStepper' },
    });

##### Angular

    <!-- tab: app.component.ts -->
    <dx-stepper ...
        [elementAttr]="{ 'aria-labelledby': 'customStepper' }"
    >
    </dx-stepper>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxStepper ... 
            :element-attr="{ 'aria-labelledby': 'customStepper' }"
        />
    </template>

##### React

    <!-- tab: App.tsx -->
    <Stepper ...
        elementAttr={{ 'aria-labelledby': 'customStepper' }}
    />

---
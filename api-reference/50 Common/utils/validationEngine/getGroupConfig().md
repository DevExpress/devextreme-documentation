---
id: validationEngine.getGroupConfig()
---
---
##### shortDescription
Gets the default validation group.

##### return: Object
The default validation group.

---
The object returned by the **getGroupConfig(group)** function has the following structure.

- **validators**  
    An array of Validator UI components that are included to the validated group.
- **validate()**   
    The method that allows you to validate the UI components included to the current group.
- **validated**  
    The event that occurs after the group is validated. You can attach/detach a handler using the **on(eventName, eventHandler)**/**off(eventName)** methods of the group.

---
##### jQuery

    <!-- tab: index.js -->
    let defaultValidationGroup = DevExpress.validationEngine.getGroupConfig();
    // ===== or when using modules =====
    import validationEngine from 'devextreme/ui/validation_engine';

    let defaultValidationGroup = validationEngine.getGroupConfig();

##### Angular

    <!-- tab: app.component.ts -->
    import validationEngine from 'devextreme/ui/validation_engine';

    let defaultValidationGroup = validationEngine.getGroupConfig();

##### Vue

    <!-- tab: App.vue -->
    import validationEngine from 'devextreme/ui/validation_engine';

    let defaultValidationGroup = validationEngine.getGroupConfig();

##### React

    <!-- tab: App.js -->
    import validationEngine from 'devextreme/ui/validation_engine';

    let defaultValidationGroup = validationEngine.getGroupConfig();

---
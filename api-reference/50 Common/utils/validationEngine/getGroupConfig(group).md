---
id: validationEngine.getGroupConfig(group)
---
---
##### shortDescription
Gets a validation group with a specific key.

##### return: Object
The validation group.

##### param(group): String | Object
The validation group's name or instance.

---
The object returned by the **getGroupConfig(group)** function has the following structure.

- **group**  
    The string or object passed as the parameter.
- **validators**  
    An array of Validator UI components that are included to the validated group.
- **validate()**   
    The method that allows you to validate the UI components included to the current group.
- **validated**  
    The event that occurs after the group is validated. You can attach/detach a handler using the **on(eventName, eventHandler)**/**off(eventName)** methods of the group.

---
##### jQuery

    <!-- tab: index.js -->
    let validationGroup = DevExpress.validationEngine.getGroupConfig('myGroup');
    // ===== or when using modules =====
    import validationEngine from 'devextreme/ui/validation_engine';

    let validationGroup = validationEngine.getGroupConfig('myGroup');

##### Angular

    <!-- tab: app.component.ts -->
    import validationEngine from 'devextreme/ui/validation_engine';

    let validationGroup = validationEngine.getGroupConfig('myGroup');

##### Vue

    <!-- tab: App.vue -->
    import validationEngine from 'devextreme/ui/validation_engine';

    let validationGroup = validationEngine.getGroupConfig('myGroup');

##### React

    <!-- tab: App.js -->
    import validationEngine from 'devextreme/ui/validation_engine';

    let validationGroup = validationEngine.getGroupConfig('myGroup');

---
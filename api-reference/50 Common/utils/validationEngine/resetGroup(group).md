---
id: validationEngine.resetGroup(group)
---
---
##### shortDescription
Resets the values and validation result of the editors that belong to the specified validation group.

##### param(group): String | Object
The validation group's name or instance.

---
---
##### jQuery

    <!-- tab: index.js -->
    DevExpress.validationEngine.resetGroup('myGroup');
    // ===== or when using modules =====
    import validationEngine from 'devextreme/ui/validation_engine';

    validationEngine.resetGroup('myGroup');

##### Angular

    <!-- tab: app.component.ts -->
    import validationEngine from 'devextreme/ui/validation_engine';

    validationEngine.resetGroup('myGroup');

##### Vue

    <!-- tab: App.vue -->
    import validationEngine from 'devextreme/ui/validation_engine';

    validationEngine.resetGroup('myGroup');

##### React

    <!-- tab: App.js -->
    import validationEngine from 'devextreme/ui/validation_engine';

    validationEngine.resetGroup('myGroup');

---
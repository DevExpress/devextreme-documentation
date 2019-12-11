---
id: validationEngine.validateGroup(group)
---
---
##### shortDescription
Validates editors from a specific validation group.

##### return: dxValidationGroupResult
The validation result.

##### param(group): String | Object
The validation group's name or instance.

---
<!--->

    <!--JavaScript-->
    let validationResult = DevExpress.validationEngine.validateGroup('myGroup');
    // ===== or when using modules =====
    import validationEngine from 'devextreme/ui/validation_engine';

    let validationResult = validationEngine.validateGroup('myGroup');

#####See Also#####
- [Validation Rules](/api-reference/10%20UI%20Widgets/dxValidator/1%20Configuration/validationRules.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#validationRules')
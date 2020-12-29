---
id: globalConfig.useJQuery
type: Boolean
hidden: 
---
---
##### shortDescription
Specifies whether DevExtreme UI components use jQuery.

---
If jQuery scripts are linked above DevExtreme scripts, the flag's default value is **true**. If they are linked below DevExtreme scripts or not linked - **false**. You can change the flag's value manually only in the first case. In the second case, UI components do not use jQuery regardless of the flag's value.

[note]With [modules](/concepts/Common/Modularity '/Documentation/Guide/Common/Modularity/'), this flag is ignored, and the UI components use jQuery if the jQuery integration module is linked.
---
id: globalConfig.useJQuery
type: Boolean
hidden: 
---
---
##### shortDescription
Specifies whether DevExtreme widgets use jQuery.

---
If jQuery scripts are linked above DevExtreme scripts, the flag's default value is **true**. If they are linked below DevExtreme scripts or not linked - **false**. You can change the flag's value manually only in the first case. In the second case, widgets do not use jQuery regardless of the flag's value.

[note]With [modules](/concepts/Common/30%20Modularity '/Documentation/Guide/Common/Modularity/'), this flag is ignored, and the widgets use jQuery if the jQuery integration module is linked.
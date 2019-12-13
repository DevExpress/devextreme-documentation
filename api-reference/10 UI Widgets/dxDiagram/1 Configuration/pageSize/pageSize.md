---
id: dxDiagram.Options.pageSize
type: Object
---
---
##### shortDescription
Specifies a size of pages.

---
The [units](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/units.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/#units') option specifies the page's measurement units.

---
##### jQuery  

    <!--JavaScript-->
    $(function() {
        $("#diagram").dxDiagram({
            units: "cm",
		    pageSize: {
                width: 10,
                height: 10,
            },
        });
    });

---

[note] If you call the [import](/api-reference/10%20UI%20Widgets/dxDiagram/3%20Methods/import(data_updateExistingItemsOnly).md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Methods/#importdata_updateExistingItemsOnly') method, the **import** method applies the imported page settings and the **pageColor** option is ignored.

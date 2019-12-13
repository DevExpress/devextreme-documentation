---
id: dxDiagram.Options.pageSize.items
type: Array<Object>
---
---
##### shortDescription
An array that specifies the page size items in the _Paze Size_ combobox on _Properties_ panel.

---

---

##### jQuery 
    <!--JavaScript-->
    $(function() {
        $("#diagram").dxDiagram({
            viewUnits: "cm",
            units: "cm",
  		    pageSize: {
                width: 21,
                height: 29.7,
                items: [
                    { text: "A4", width: 21, height: 29.7 },{ text: "A3", width: 29.7, height: 42 }
                ]
            },
        });
    });

---

![Diagram control data toolbox](/images/diagram/pageSize.png)

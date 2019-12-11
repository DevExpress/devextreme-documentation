---
id: dxDiagram.getData()
---
---
##### shortDescription
Gets the diagram data.

##### return: String
The diagram data in JSON format.

---
The **getData** method allows you to save information about a diagram's layout, appearance, and the diagram's shape positions. You can call the [setData](/api-reference/10%20UI%20Widgets/dxDiagram/3%20Methods/setData(data_updateExistingItemsOnly).md '{basewidgetpath}/Methods/#setDatadata_updateExistingItemsOnly') method to save this data and load it on demand.

---
#####jQuery

    <!--JavaScript-->
    $("#diagram").dxDiagram({
        onDataChanged: function(e) { 
            if(e.component.isReady()) {
                var data = e.component.getData();
                window.localStorage.setItem("foo", data); // store layout data in storage
            }
        },
        // ...
        onContentReady: function(e) { 
            var foo = window.localStorage.getItem("foo"); // load layout data and apply it to the generated shapes
            if(foo)
                e.component.setData(foo, true);
        }
    });

---

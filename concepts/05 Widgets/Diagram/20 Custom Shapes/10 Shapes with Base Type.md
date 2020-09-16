**Shapes with Base Type**

Use the [baseType](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/customShapes/baseType.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/customShapes/#baseType') option to specify a base type for a shape. The built-in shape types are shown in the [Shape Types](/concepts/05%20Widgets/Diagram/40%20Shape%20Types.md '/Documentation/Guide/Widgets/Diagram/Shape_Types/') section.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/CustomShapesWithTexts/"
}

![Diagram control custom shapes](/images/diagram/type-based-shapes.png)

---

#####jQuery

    <!--JavaScript-->
    $(function() {
        var diagram = $("#diagram").dxDiagram({
            customShapes: employees.map(
                function(emp) {
                    return {
                        category: "employees",
                        type: "employee" + emp.ID,
                        baseType: "rectangle",
                        defaultText: emp.Full_Name,
                        allowEditText: false
                    }
                }
            ),
            toolbox: {
                groups: [{ category: "employees", title: "Employees", displayMode: "texts" }]
            }
        }).dxDiagram("instance");
    });

    
---

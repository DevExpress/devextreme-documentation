**Shapes with Base Type**

Use the [baseType](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/customShapes/baseType.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/customShapes/#baseType') property to specify a base type for a shape. The built-in shape types are shown in the [Shape Types](/concepts/05%20UI%20Components/Diagram/40%20Shape%20Types.md '/Documentation/Guide/UI_Components/Diagram/Shape_Types/') section.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/CustomShapesWithTexts/"
}

![Diagram control custom shapes](/images/diagram/type-based-shapes.png)

---
##### jQuery

    <!-- tab: index.js -->
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

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram #diagram id="diagram">
        <dxi-custom-shape *ngFor="let emp of employees"
            category="employees"
            [type]='"employee" + emp.ID'
            baseType="rectangle"
            [defaultText]="emp.Full_Name"
            [allowEditText]="false">
        </dxi-custom-shape>
        <dxo-toolbox>
            <dxi-group category="employees" title="Employees" displayMode="texts"></dxi-group>
        </dxo-toolbox>
    </dx-diagram>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDiagram
            id="diagram"
            ref="diagram"
        >
            <DxCustomShape
            v-for="employee in employees"
            :category="'employees'"
            :type="'employee' + employee.ID"
            :base-type="'rectangle'"
            :default-text="employee.Full_Name"
            :allow-edit-text="false"
            :key="employee.ID"
            />
            <DxToolbox :visible="true">
                <DxGroup
                    :category="'employees'"
                    :title="'Employees'"
                    :display-mode="'texts'"
                />
            </DxToolbox>
        </DxDiagram>
    </template>
    <script>
    / ...
    data() {
        return {
        employees: service.getEmployees()
        };
    },
    </script>
##### React

    <!-- tab: App.js -->
    class App extends React.Component {
    // ...
        render() {
            return (
                <Diagram id="diagram" ref={this.diagramRef}>
                    {this.employees.map(function(employee, index) {
                        return <CustomShape category="employees" type={`employee${employee.ID}`} baseType="rectangle"
                            defaultText={employee.Full_Name} allowEditText={false} key={index} />;
                    })}
                    <Toolbox>
                        <Group category="employees" title="Employees" displayMode="texts" />
                    </Toolbox>
                </Diagram>
            );
        }
    }

---

You can use the [style](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/defaultItemProperties/#style) and [textStyle](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/defaultItemProperties/#textStyle) properties to specify the default style settings for a shape and a shape’s text.

---
##### jQuery

    <!-- tab: index.js -->
    var diagram = $("#diagram").dxDiagram({
        defaultItemProperties: {
            style: "fill: yellow;",
            textStyle: "font-size: 14pt;"
        },
        // ...
    }).dxDiagram("instance");

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram #diagram id="diagram">
        <dxo-default-item-properties
            style="fill: yellow;"
            textStyle="font-size: 14pt;">
        </dxo-default-item-properties>
        <!-- ... -->
    </dx-diagram>

##### Vue

    <!-- tab: App.vue -->
    <DxDiagram
        id="diagram"
        ref="diagram"
    >
        <DxDefaultItemProperties
            :style="'fill: yellow;'"
            :textStyle="'font-size: 14pt;'"
        />
        <!-- ... -->
    </DxDiagram>
##### React

    <!-- tab: App.js -->
    class App extends React.Component {
    // ...
        render() {
            return (
                <Diagram id="diagram" ref={this.diagramRef}>
                    <DefaultItemProperties style="fill: yellow;" textStyle="font-size: 14pt;"/>
                    <!-- ... -->
                </Diagram>
            );
        }
    }

---

![Diagram custom shape styles](/images/diagram/custom-shape-with-base-type.png)
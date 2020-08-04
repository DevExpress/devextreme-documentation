The **Diagram** widget allows you to create templates for shapes and their presentation in the toolbox.

[important] Template content must be presented as SVG elements.

**Shape Template**

Use the following options to create a shape template:

* The [customShapeTemplate](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/#customShapeTemplate) option defines a common template for all shapes in the widget.
* The [template](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/customShapes/#template) option defines a template for an individual shape.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/CustomShapesWithTemplates/jQuery/Light/"
}

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        var diagram = $("#diagram").dxDiagram({
            customShapeTemplate: function(item, $container) {
                var employee = item.dataItem;
                var $content = $("<svg class='template'>" +
                    "<text class='template-name' x='50%' y='20%'>" + (employee ? employee.Full_Name : "Employee's Name") + "</text>" +
                    "<text class='template-title' x='50%' y='45%'>" + (employee ? employee.Title : "Employee's Title") + "</text>" +
                    "<text class='template-button' id='employee-edit' x='40%' y='85%'>Edit</text>" +
                    "<text class='template-button' id='employee-delete' x='62%' y='85%'>Delete</text>" +
                    "</svg >");
                $container.append($content);
                $content.find("#employee-edit").click(function() { editEmployee(employee); });
                $content.find("#employee-delete").click(function() { deleteEmployee(employee); });
            },
            ...

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram id="diagram" #diagram customShapeTemplate="customShapeTemplate">
        <svg *dxTemplate="let item of 'customShapeTemplate'" class="template">
            <text class="template-name" x="50%" y="20%">{{item.dataItem ? item.dataItem.Full_Name : "Employee's Name"}}</text>
            <text class="template-title" x="50%" y="45%">{{item.dataItem ? item.dataItem.Title : "Employee's Title"}}</text>
            <text class="template-button" x="40%" y="85%" (click)="editEmployee(item.dataItem)">Edit</text>
            <text class="template-button" x="62%" y="85%" (click)="deleteEmployee(item.dataItem)">Delete</text>
        </svg>
        ...

##### Vue

    <!-- tab: App.vue -->
    <DxDiagram
      id="diagram"
      ref="diagram"
      custom-shape-template="CustomShapeTemplate"
    >
      <template #CustomShapeTemplate="{ data }">
        <CustomShapeTemplate
          :employee="data.dataItem"
          :edit-employee="editEmployee"
          :delete-employee="deleteEmployee"
        />
      </template>
      ...

    <!-- tab: CustomShapeTemplate.vue -->
    <template>
    <svg class="template">
        <text
        class="template-name"
        x="50%"
        y="20%"
        >
        {{ employeeName }}
        </text>
        <text
        class="template-title"
        x="50%"
        y="45%"
        >
        {{ employeeTitle }}
        </text>
        <text
        class="template-button"
        x="40%"
        y="85%"
        @click="editEmployeeFunc"
        >
        Edit
        </text>
        <text
        class="template-button"
        x="62%"
        y="85%"
        @click="deleteEmployeeFunc"
        >
        Delete
        </text>
    </svg>
    </template>
    ...

##### React

    <!-- tab: App.js -->
    import Diagram, { CustomShape, ContextToolbox, PropertiesPanel, Group, Tab, Toolbox, Nodes, AutoLayout } from 'devextreme-react/diagram';

    class App extends React.Component {
    constructor(props) {
        this.diagramRef = React.createRef();
        this.customShapeTemplate = this.customShapeTemplate.bind(this);
        ...
    }

    render() {
        return (
        <div id="container">
            <Diagram id="diagram" ref={this.diagramRef} customShapeRender={this.customShapeTemplate}>
            ...

    <!-- tab: CustomShapeTemplate.js -->
    export default function CustomShapeTemplate(employee, editEmployee, deleteEmployee) {
        var employeeName = employee ? employee.Full_Name : 'Employee\'s Name';
        var employeeTitle = employee ? employee.Title : 'Employee\'s Title';
        return (
            <svg className="template">
            <text className="template-name" x="50%" y="20%">{employeeName}</text>
            <text className="template-title" x="50%" y="45%">{employeeTitle}</text>
            <text className="template-button" x="40%" y="85%" onClick={editEmployee}>Edit</text>
            <text className="template-button" x="62%" y="85%" onClick={deleteEmployee}>Delete</text>
            </svg>
        );
    }


##### ASP.NET Core Controls

    <!-- tab: CustomShapesWithTemplatesWithEditing.cshtml -->
    @(Html.DevExtreme().Diagram()
        .ID("diagram")
        .CustomShapeTemplate(@<text>
            <svg class="template">
                <text class="template-name" x="50%" y="20%"><%- dataItem ? dataItem.FullName : "Employee's Name" %></text>
                <text class="template-title" x="50%" y="45%"><%- dataItem ? dataItem.Title : "Employee's Title" %></text>
                <text class="template-button" x="40%" y="85%" onclick="editEmployee(<%- dataItem && JSON.stringify(dataItem) %>)">Edit</text>
                <text class="template-button" x="62%" y="85%" onclick="deleteEmployee(<%- dataItem && JSON.stringify(dataItem) %>)">Delete</text>
            </svg>
            </text>)
        ...

##### ASP.NET MVC Controls

    <!-- tab: CustomShapesWithTemplatesWithEditing.cshtml -->
    @(Html.DevExtreme().Diagram()
        .ID("diagram")
        .CustomShapeTemplate(@<text>
            <svg class="template">
                <text class="template-name" x="50%" y="20%"><%- dataItem ? dataItem.FullName : "Employee's Name" %></text>
                <text class="template-title" x="50%" y="45%"><%- dataItem ? dataItem.Title : "Employee's Title" %></text>
                <text class="template-button" x="40%" y="85%" onclick="editEmployee(<%- dataItem && JSON.stringify(dataItem) %>)">Edit</text>
                <text class="template-button" x="62%" y="85%" onclick="deleteEmployee(<%- dataItem && JSON.stringify(dataItem) %>)">Delete</text>
            </svg>
            </text>)
            ...

---

![Diagram - Shape Template](/images/diagram/shape-template.png) 

**Toolbox Shape Template**

Use the following options to create a template for a shape in the toolbox:

- The [customShapeToolboxTemplate](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/#customShapeToolboxTemplate) option defines a common template for all shapes in the toolbox.
- The [toolboxTemplate](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/customShapes/#toolboxTemplate) option defines a template for a shape in the toolbox.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/CustomShapesWithTemplatesWithEditing/jQuery/Light/"
}

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        var diagram = $("#diagram").dxDiagram({
            customShapeToolboxTemplate: function(item, $container) {
                var employee = item.dataItem;
                var $content = $("<svg class='template'>" +
                    "<text class='template-name' x='50%' y='40%'>New</text>" +
                    "<text class='template-title' x='50%' y='70%'>Employee</text>" +
                    "</svg >");
                $container.append($content);
            },
            ...

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram id="diagram" #diagram customShapeToolboxTemplate="customShapeToolboxTemplate">
        <svg *dxTemplate="let item of 'customShapeToolboxTemplate'" class="template">
            <text class="template-name" x="50%" y="40%">New</text>
            <text class="template-title" x="50%" y="70%">Employee</text>
        </svg>
        ...

##### Vue

    <!-- tab: App.vue -->
    <DxDiagram
      id="diagram"
      ref="diagram"
      custom-shape-toolbox-template="CustomShapeToolboxTemplate"
    >
      <template #CustomShapeToolboxTemplate="{ data }">
        <CustomShapeToolboxTemplate/>
      </template>
      ...

    <!-- tab: CustomShapeTemplate.vue -->
    <template>
    <svg class="template">
        <text
        class="template-name"
        x="50%"
        y="20%"
        >
        {{ employeeName }}
        </text>
        <text
        class="template-title"
        x="50%"
        y="45%"
        >
        {{ employeeTitle }}
        </text>
        <text
        class="template-button"
        x="40%"
        y="85%"
        @click="editEmployeeFunc"
        >
        Edit
        </text>
        <text
        class="template-button"
        x="62%"
        y="85%"
        @click="deleteEmployeeFunc"
        >
        Delete
        </text>
    </svg>
    </template>
    ...

##### React

    <!-- tab: App.js -->
    import Diagram, { CustomShape, ContextToolbox, PropertiesPanel, Group, Tab, Toolbox, Nodes, AutoLayout } from 'devextreme-react/diagram';

    class App extends React.Component {
    constructor(props) {
        this.diagramRef = React.createRef();
        this.customShapeTemplate = this.customShapeTemplate.bind(this);
        ...
    }

    render() {
        return (
        <div id="container">
            <Diagram id="diagram" ref={this.diagramRef} customShapeRender={this.customShapeTemplate}>
            ...

    <!-- tab: CustomShapeTemplate.js -->
    export default function CustomShapeTemplate(employee, editEmployee, deleteEmployee) {
        var employeeName = employee ? employee.Full_Name : 'Employee\'s Name';
        var employeeTitle = employee ? employee.Title : 'Employee\'s Title';
        return (
            <svg className="template">
            <text className="template-name" x="50%" y="20%">{employeeName}</text>
            <text className="template-title" x="50%" y="45%">{employeeTitle}</text>
            <text className="template-button" x="40%" y="85%" onClick={editEmployee}>Edit</text>
            <text className="template-button" x="62%" y="85%" onClick={deleteEmployee}>Delete</text>
            </svg>
        );
    }


##### ASP.NET Core Controls

    <!-- tab: CustomShapesWithTemplatesWithEditing.cshtml -->
    @(Html.DevExtreme().Diagram()
        .ID("diagram")
        .CustomShapeTemplate(@<text>
            <svg class="template">
                <text class="template-name" x="50%" y="20%"><%- dataItem ? dataItem.FullName : "Employee's Name" %></text>
                <text class="template-title" x="50%" y="45%"><%- dataItem ? dataItem.Title : "Employee's Title" %></text>
                <text class="template-button" x="40%" y="85%" onclick="editEmployee(<%- dataItem && JSON.stringify(dataItem) %>)">Edit</text>
                <text class="template-button" x="62%" y="85%" onclick="deleteEmployee(<%- dataItem && JSON.stringify(dataItem) %>)">Delete</text>
            </svg>
            </text>)
        ...

##### ASP.NET MVC Controls

    <!-- tab: CustomShapesWithTemplatesWithEditing.cshtml -->
    @(Html.DevExtreme().Diagram()
        .ID("diagram")
        .CustomShapeTemplate(@<text>
            <svg class="template">
                <text class="template-name" x="50%" y="20%"><%- dataItem ? dataItem.FullName : "Employee's Name" %></text>
                <text class="template-title" x="50%" y="45%"><%- dataItem ? dataItem.Title : "Employee's Title" %></text>
                <text class="template-button" x="40%" y="85%" onclick="editEmployee(<%- dataItem && JSON.stringify(dataItem) %>)">Edit</text>
                <text class="template-button" x="62%" y="85%" onclick="deleteEmployee(<%- dataItem && JSON.stringify(dataItem) %>)">Delete</text>
            </svg>
            </text>)
            ...

---

![Diagram - Toolbox Shape Template](/images/diagram/shape-toolbox-template.png) 
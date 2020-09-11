Use the following options to create a template for a shape in the toolbox:

- The [customShapeToolboxTemplate](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/customShapeToolboxTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/#customShapeToolboxTemplate') option defines a common template for all shapes in the toolbox.
- The [toolboxTemplate](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/customShapes/toolboxTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/customShapes/#toolboxTemplate') option defines a template for a shape in the toolbox.

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

    <!-- tab: CustomShapeToolboxTemplate.vue -->
    <template>
    <svg class="template">
        <text
        class="template-name"
        x="50%"
        y="40%"
        >
        New
        </text>
        <text
        class="template-title"
        x="50%"
        y="70%"
        >
        Employee
        </text>
    </svg>
    </template>
        ...

##### React

    <!-- tab: App.js -->
    import Diagram, { CustomShape, ContextToolbox, PropertiesPanel, Group, Tab, Toolbox, Nodes, AutoLayout } from 'devextreme-react/diagram';
    import CustomShapeToolboxTemplate from './CustomShapeToolboxTemplate.js';

    class App extends React.Component {
    constructor(props) {
        this.diagramRef = React.createRef();
        this.customShapeToolboxTemplate = this.customShapeToolboxTemplate.bind(this);
        ...
    }

    render() {
        return (
        <div id="container">
            <Diagram id="diagram" ref={this.diagramRef} customShapeToolboxRender={this.customShapeToolboxTemplate}>
            ...

    <!-- tab: CustomShapeToolboxTemplate.js -->
    export default function CustomShapeToolboxTemplate() {
    return (
        <svg className="template">
        <text className="template-name" x="50%" y="40%">New</text>
        <text className="template-title" x="50%" y="70%">Employee</text>
        </svg>
    );
    }


##### ASP.NET Core Controls

    <!-- tab: CustomShapesWithTemplatesWithEditing.cshtml -->
    @(Html.DevExtreme().Diagram()
        .ID("diagram")
        .CustomShapeToolboxTemplate(@<text>
            <svg class="template">
                <text class="template-name" x="50%" y="40%">New</text>
                <text class="template-title" x="50%" y="70%">Employee</text>
            </svg>
        </text>)
        ...

##### ASP.NET MVC Controls

    <!-- tab: CustomShapesWithTemplatesWithEditing.cshtml -->
    @(Html.DevExtreme().Diagram()
        .ID("diagram")
        .CustomShapeToolboxTemplate(@<text>
            <svg class="template">
                <text class="template-name" x="50%" y="40%">New</text>
                <text class="template-title" x="50%" y="70%">Employee</text>
            </svg>
        </text>)
            ...

---

![Diagram - Toolbox Shape Template](/images/diagram/shape-toolbox-template.png)
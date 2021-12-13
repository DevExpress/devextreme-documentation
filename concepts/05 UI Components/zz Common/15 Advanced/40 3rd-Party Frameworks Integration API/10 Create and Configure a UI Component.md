To create a UI component, call its constructor passing the target element and a configuration object. You may need to set additional properties for the target element (for example, the **display** property of data visualization UI components should be set to "block").
k
    import Accordion from "devextreme/ui/accordion";
    ...
    let container = document.getElementById("root");
    let element = document.createElement("div");
    container.appendChild(element);
    let instance = new Accordion(element, options);
    ...

If you do not use modules, you can use the **DevExpress.ui** namespace to access constructors of most of the UI components. The exceptions are data visualization components: [VectorMap](/api-reference/10%20UI%20Components/dxVectorMap '/Documentation/ApiReference/UI_Components/dxVectorMap/'), [RangeSelector](/api-reference/10%20UI%20Components/dxRangeSelector '/Documentation/ApiReference/UI_Components/dxRangeSelector/'), and all types of Charts and Gauges. These components belong to the **DevExpress.viz** namespace.

    let instance = new DevExpress.ui.dxAccordion(element, options);
    let dataVizInstance = new DevExpress.viz.dxPolarChart(element, options);

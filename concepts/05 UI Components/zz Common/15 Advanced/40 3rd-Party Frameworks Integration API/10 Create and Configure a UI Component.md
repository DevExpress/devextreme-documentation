To create a UI component, call its constructor passing the target element and a configuration object. The target element may need to have additional style properties set, for example, data visualization UI components' **display** should be set to "block".

    import Accordion from "devextreme/ui/accordion";
    ...
    let container = document.getElementById("root");
    let element = document.createElement("div");
    container.appendChild(element);
    let instance = new Accordion(element, options);
    ...

If you do not use modules, you can use the **DevExpress.ui** namespace to access constructors of most of the UI components. The exceptions are data visualization components: [VectorMap](/Documentation/ApiReference/UI_Components/dxVectorMap/), [RangeSelector](/Documentation/ApiReference/UI_Components/dxRangeSelector/), and all types of Charts and Gauges. These components belong to the **DevExpress.viz** namespace.

    let instance = new DevExpress.ui.dxAccordion(element, options);
    let dataVizInstance = new DevExpress.viz.dxPolarChart(element, options);

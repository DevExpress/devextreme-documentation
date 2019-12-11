To create a widget, call its constructor passing the target element and a configuration object. The target element may need to have additional style properties set, for example, data visualization widgets' **display** should be set to "block".

    import Accordion from "devextreme/ui/accordion";
    ...
    let container = document.getElementById("root");
    let element = document.createElement("div");
    container.appendChild(element);
    let instance = new Accordion(element, options);
    ...

If you do not use modules, access the widget's constructor via the **DevExpress.ui** namespace.

    let instance = new DevExpress.ui.dxAccordion(element, options);

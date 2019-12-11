---
default: undefined
type: String
---
---
##### shortDescription
Specifies a div container that holds the widget to be exported.

---
Every DevExtreme data visualization widget is created inside a div container. In order to export the widget from this container, assign one of the [jQuery selectors](https://api.jquery.com/category/selectors) to the **sourceContainer** option. For example, if a chart is placed in a div container that has the *'id'* attribute set to *'chartContainer'*, you can specify the **sourceContainer** option using the [ID selector](https://api.jquery.com/id-selector) as follows.

    <!--JavaScript-->$('#exporterConainter').dxExporter({
        // ...
        sourceContainer: '#chartContainer'
    });

[note] If several containers match the utilized selector, only a widget from the first container will be exported.

To export more than one widget into a single document, put these widgets into a div container and pass that container to the exporter.

    <!--HTML--><div id="charts">
        <div id="chartA"></div>
        <div id="chartB"></div>
    </div>

    <!--JavaScript-->$('#exporterConainter').dxExporter({
        // ...
        sourceContainer: '#charts'
    });

[note]You cannot export several widgets into SVG format.
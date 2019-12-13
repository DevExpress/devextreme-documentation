To load and save a diagram to a string variable, use the [import](/api-reference/10%20UI%20Widgets/dxDiagram/3%20Methods/import(data_updateExistingItemsOnly).md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Methods/#importdata_updateExistingItemsOnly') and [export](/api-reference/10%20UI%20Widgets/dxDiagram/3%20Methods/export().md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Methods/#export') methods.

    <!--JavaScript-->
    var diagram = $("#diagram").dxDiagram("instance");
    var diagramContent = diagram.export(); // load diagram content to a variable
    diagram.import(newDiagramContent); // replace the existing diagram with a new diagram

[note] The **Diagram** widget stores an opened diagram's data in its own text format. Thereby we recommend you to not modify data returned by the [export](/api-reference/10%20UI%20Widgets/dxDiagram/3%20Methods/export().md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Methods/#export') method. A manually modified document can be loaded incorrectly.
To load and save a diagram to a string variable, use the [setData](/api-reference/10%20UI%20Widgets/dxDiagram/3%20Methods/setData(data_updateExistingItemsOnly).md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Methods/#setDatadata_updateExistingItemsOnly') and [getData](/api-reference/10%20UI%20Widgets/dxDiagram/3%20Methods/getData().md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Methods/#getData') methods.

    <!--JavaScript-->
    var diagram = $("#diagram").dxDiagram("instance");
    var diagramContent = diagram.getData(); // load diagram content to a variable
    diagram.setData(newDiagramContent); // replace the existing diagram with a new diagram

[note] The **Diagram** widget stores an opened diagram's data in its own text format. Thereby we recommend you to not modify data returned by the [getData](/api-reference/10%20UI%20Widgets/dxDiagram/3%20Methods/getData().md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Methods/#getData') method. A manually modified document can be loaded incorrectly.
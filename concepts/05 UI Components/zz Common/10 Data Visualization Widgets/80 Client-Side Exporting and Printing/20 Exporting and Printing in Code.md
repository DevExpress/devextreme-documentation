To export a UI component in code, call its [exportTo(fileName, format)](/api-reference/10%20UI%20Components/BaseWidget/3%20Methods/exportTo(fileName_format).md '/Documentation/ApiReference/UI_Components/dxChart/Methods/#exportTofileName_format') method passing the needed file name and format (*'PNG'*, *'PDF'*, *'JPEG'*, *'SVG'* or *'GIF'*) as the arguments.

    <!--JavaScript-->widgetInstance.exportTo('Test Chart', 'PDF');
    
To print a UI component, call its [print()](/api-reference/10%20UI%20Components/BaseWidget/3%20Methods/print().md '/Documentation/ApiReference/UI_Components/dxChart/Methods/#print') method. Like the **Print** command in the [**Exporting/Printing** menu](/concepts/05%20UI%20Components/zz%20Common/10%20Data%20Visualization%20Widgets/80%20Client-Side%20Exporting%20and%20Printing/10%20Exporting%20and%20Printing%20in%20the%20UI.md '/Documentation/Guide/UI_Components/Common/Data_Visualization_Widgets/Client-Side_Exporting_and_Printing/#Exporting_and_Printing_in_the_UI'), this method opens the Print window in the browser.

    <!--JavaScript-->widgetInstance.print();
    
Also, the DevExtreme Data Visualization UI components fire the following exporting-related events.

- [exporting](/api-reference/10%20UI%20Components/BaseWidget/4%20Events/exporting.md '/Documentation/ApiReference/UI_Components/dxChart/Events/#exporting')  
Allows you to request export details or prevent exporting.
- [exported](/api-reference/10%20UI%20Components/BaseWidget/4%20Events/exported.md '/Documentation/ApiReference/UI_Components/dxChart/Events/#exported')  
Allows you to notify an end user when exporting is completed.
- [fileSaving](/api-reference/10%20UI%20Components/BaseWidget/4%20Events/fileSaving.md '/Documentation/ApiReference/UI_Components/dxChart/Events/#fileSaving')        
Allows you to access exported data in the <a href="https://en.wikipedia.org/wiki/Binary_large_object" target="_blank">BLOB</a> format and/or prevent it from being saved in a file on the user's local storage.
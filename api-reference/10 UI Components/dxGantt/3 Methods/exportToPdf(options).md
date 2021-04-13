---
id: dxGantt.exportToPdf(options)
---
---
##### shortDescription
Exports the Gantt chart data to the PDF document.

##### return: Promise<any>
A Promise that is resolved after the Gantt chart is exported. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(options): Object
PDF export options.

---

The **export** method allows you to save information about the Gantt chart's layout, appearance, and tasks. This method supports the following options:

- **format** {string | width?: number, height?: number } - Specifies the document's size.
- **landscape** {boolean} - Specifies whether to use horizontal orientation for the document.
- **fileName** {string} - Specifies the file name.
- **exportMode** {"all", "treeList", "chart"} -  Specifies which part of the component to export (chart area, tree list area or the entire component).
- **dateRange**: {"all" | "visible" | startDate? : Date, endDate? : Date, startIndex? : number, endIndex? : number } - Specifies the date range for which to export tasks.
- **margins** { left?: number, top?: number, right?: number, bottom?: number } - Specifies the outer indents of the exported area.

---

How to export the Gantt chart to PDF document with settings:

##### jQuery

    <!-- tab: index.js -->
    var gantt = $("#ganttContainer").dxGantt("instance");
    gantt.exportToPdf(
        format: "A4",
        landscape: true,
        exportMode: "chart",
        dateRange: "visible"
    )


---

How to process the PDF document when the export is complete:

---

##### jQuery

    <!-- tab: index.js -->
    var gantt = $("#ganttContainer").dxGantt("instance");
    gantt.exportToPdf(
        format: "A4",
        landscape: true,
        exportMode: "chart",
        dateRange: "visible"
    ).then(function(doc) { 
        doc.addPage(); 
        // your code
        doc.save('customDoc.pdf');
    });

---

How to print the exported PDF document:

---

##### jQuery

    <!-- tab: index.js -->
    var gantt = $("#ganttContainer").dxGantt("instance");
    gantt.exportToPdf(
        format: "A4",
        landscape: true,
        exportMode: "chart",
        dateRange: "visible"
    ).then(function(doc) { 
        doc.autoPrint(); 
        window.open(doc.output('your_url'), '_blank');
    });


---
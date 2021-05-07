---
id: dxFileManager.Options.onSelectionChanged
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a file system item is selected or selection is canceled.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): dxFileManager
The UI component's instance.

##### field(e.currentDeselectedItemKeys): Array<String>
The keys of the file system items whose selection has been cleared.

##### field(e.currentSelectedItemKeys): Array<String>
The keys of the file system items that have been selected.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.selectedItemKeys): Array<String>
The keys of all selected file system items.

##### field(e.selectedItems): Array<FileSystemItem>
The currently selected file system items.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            // ...
            onSelectionChanged: function(e) {
                // Your code goes here
            }
        });
    });

---
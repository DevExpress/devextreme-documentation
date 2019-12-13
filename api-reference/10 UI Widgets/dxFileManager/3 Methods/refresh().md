---
id: dxFileManager.refresh()
---
---
##### shortDescription
Reloads data and repaints the widget.

##### return: Promise<any>
A Promise that is resolved after data is loaded. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/UICustomization/"
}

The following example illustrates how to use this method:

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        var fileManager = $("#file-manager").dxFileManager({
            name: "fileManager",
            fileProvider: fileSystem,
            contextMenu: {
                items: [
                    // ...
                    {
                        text: "Share",
                        icon: "arrowright",
                        beginGroup: true,
                        onClick: shareItem
                    },
                    {
                        text: "Unshare",
                        icon: "revert",
                        onClick: unshareItem
                    }
                    // ...
                ]
            }
        }).dxFileManager("instance");

        // ...
        
        function shareItem() {
            changeSharedState(true);
        }

        function unshareItem() {
            changeSharedState(false);
        }

        function changeSharedState(isShared) {
            fileManager.getSelectedItems().forEach(function(item) {
                item.dataItem.shared = isShared;
            });
            fileManager.refresh();
        }
    });

---

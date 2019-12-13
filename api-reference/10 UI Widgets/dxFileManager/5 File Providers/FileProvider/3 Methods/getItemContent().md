---
id: FileProvider.getItemContent()
---
---
##### shortDescription
Gets the specified items' content.

##### return: Promise<Object>
A Promise that is resolved after the items are obtained. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(items): Array<Object>
The specified items.

---

The **getItemContent** returns the binary content ([ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)) of the specified items.

The following example illustrates how to obtain the specified item's image:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        // ...
        function showFileContent() {
            const items = fileManager.getSelectedItems();
            const file = items[0];
            fileProvider.getItemContent([file])
                .done(function(arrayBuffer) {
                    showImage(arrayBuffer);
                });
        };        
    });

---
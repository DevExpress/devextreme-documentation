Frequently, the user requires changing the summary type at runtime. Although this capability is not provided out-of-the-box, you can easily implement it using the [onContextMenuPreparing](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/onContextMenuPreparing.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#onContextMenuPreparing') event handler. For example, consider the following self-explanatory code sample.

    <!--JavaScript-->var pivotGridOptions = {
        // ...
        onContextMenuPreparing: function (e) {
            // Filtering off all non-data fields
            if (e.field && e.field.area == 'data') {
                // Obtaining the PivotGrid's data source
                var dataSource = e.component.getDataSource();
                
                // Implementing a click event handler for the context menu items
                var changeSummaryType = function (clickedItem) {
                    dataSource.field(e.field.index, {
                        summaryType: clickedItem.itemData.value
                    });
                    dataSource.load();
                };
                
                // Declaring an array of summary types to be present in the context menu
                var items = [
                    { text: 'Sum', value: 'sum', onItemClick: changeSummaryType },
                    { text: 'Avg', value: 'avg', onItemClick: changeSummaryType },
                    { text: 'Min', value: 'min', onItemClick: changeSummaryType },
                    { text: 'Max', value: 'max', onItemClick: changeSummaryType },
                    { text: 'Count', value: 'count', onItemClick: changeSummaryType },
                    // { text: 'Custom', value: 'custom', onItemClick: changeSummaryType },
                ];
                
                // Applying the "selected" style to the item that represents the current summary type
                $.each(items, function (_, item) {
                    if (item.value == dataSource.field(e.field.index).summaryType)
                        item.selected = true;
                });
                    
                // Pushing the array of summary types to the array of context menu items
                Array.prototype.push.apply(e.items, items)
            }
        }
    };

[note]Applying the *"custom"* summary type demands implementing the [calculateCustomSummary](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/calculateCustomSummary.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#calculateCustomSummary') callback function.

Altering certain parts of this code, you can enable the user to perform a wide range of actions using the context menu. For example, to allow the user to change the [summaryDisplayMode](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/summaryDisplayMode.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryDisplayMode') option at runtime, slightly modify the click handler and the array of items.

    <!--JavaScript-->var pivotGridOptions = {
        // ...
        onContextMenuPreparing: function (e) {
            if (e.field && e.field.area == 'data') {
                // ...
                var changeSummaryDisplayMode = function (clickedItem) {
                    dataSource.field(e.field.index, {
                        summaryDisplayMode: clickedItem.itemData.value
                    });
                    dataSource.load();
                };

                var items = [
                    { text: 'Absolute Variation', value: 'absoluteVariation', onItemClick: changeSummaryDisplayMode },
                    { text: 'Percent Variation', value: 'percentVariation', onItemClick: changeSummaryDisplayMode },
                    { text: 'Percent of Column Total', value: 'percentOfColumnTotal', onItemClick: changeSummaryDisplayMode },
                    // ...
                ];
                
                $.each(items, function (_, item) {
                    if (item.value == dataSource.field(e.field.index).summaryDisplayMode)
                        item.selected = true;
                });
                
                // ...
            }
        }
    };

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Pivot_Grid/SummaryDisplayModes/"
}

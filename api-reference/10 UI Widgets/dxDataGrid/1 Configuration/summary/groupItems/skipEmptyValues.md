---
type: Boolean
---
---
##### shortDescription
Specifies whether or not to skip *empty strings*, *null* and *undefined* values when calculating a summary.

---
Specified in a summary configuration object, this option affects an individual summary item. If you need to apply a single setting to all summaries in a grid, specify the **skipEmptyValues** option in the **summary** object.

    <!--JavaScript-->var dataGridOptions = {
        // ...
        summary: {
            // ...
            skipEmptyValues: false
        }
    }

[note]This option does not have any effect when you use a remote data source.

[note]Summaries of the *count* type do not skip empty values regardless of the **skipEmptyValues** option. However, you can implement a custom summary, which skips empty values, as follows.
    
    <!--JavaScript-->var dataGridOptions = {
        // ...
        summary: {
            groupItems: [{
                // ...
                name: 'customSummary1',
                summaryType: 'custom'
            }],
            calculateCustomSummary: function (options) {
                if (options.name == 'customSummary1') {
                    if (options.summaryProcess == 'start') {
                        options.totalValue = 0;
                    }
                    if (options.summaryProcess == 'calculate') {
                        if (e.value) {
                            options.totalValue++;
                        }
                    }
                }
            }
        }
    }
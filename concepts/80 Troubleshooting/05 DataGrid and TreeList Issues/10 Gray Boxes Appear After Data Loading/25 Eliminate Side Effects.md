Follow the steps below to eliminate possible side effects:

- Disable the [stateStoring](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/stateStoring/) property. Check if the issue still persists. If the issue disappears, it is possible that the saved state is corrupted. Clear the saved state, enable **stateStoring**, and check again.

- FireFox and Safari browsers raise native scrolling events asynchronously. This behavior forces asynchronous row rendering in native scrolling mode even when [renderAsync](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/scrolling/#renderAsync) is disabled. To avoid this side effect, disable the scrolling.[useNative](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/scrolling/#useNative) property. Call the [defaultOptions(rule)](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#defaultOptionsrule) method to resolve the issue for all DataGrid components in the application.

- If you bind DataGrid or TreeList to one DataSource instance, reset the DataSource page index once you destroy the component. DataSource does not reset the index automatically. A new component bound to this DataSource may attempt to display the first data page while DataSource may contain only other data pages. The component displays gray boxes in such case.
Call the DataSource.[pageIndex(newIndex)](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#pageIndexnewIndex) method to reset the page index.

---

##### Angular

- If you use conditional rendering to display DataGrid or TreeList, and virtual scrolling is enabled, the following happens:

    - **on hide**    
    The scroll position is discarded.

    - **on show**    
    The scroll position is set to the first page.

    If DataGrid or TreeList was opened, for example, on the page 5 before it was hidden, the gray boxes are displayed after the component is shown for the second time. This happens because the data source is loaded for the page 5 only.

    In such cases, save the scroll position on hide and restore it on show:

        <!-- tab: app.component.ts -->
        export class AppComponent {
            // ...
            onContentVisibilityChange(visible) {
                if (!visible) {
                    this.gridScrollPosition = this.dataGrid.instance.getScrollable().scrollTop();
                } else if (this.gridScrollPosition > 0) {
                    this.dataGrid.instance.getScrollable().scrollTo({ top: this.gridScrollPosition }); 
            }
        }
    
    Alternatively, you can use CSS to hide the component. In this case, call the [updateDimensions](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#updateDimensions) method.

##### Vue

- If you use conditional rendering to display DataGrid or TreeList, and virtual scrolling is enabled, the following happens:

    - **on hide**    
    The scroll position is discarded.

    - **on show**    
    The scroll position is set to the first page.

    If DataGrid or TreeList was opened, for example, on page 5 before it was hidden, the gray boxes are displayed after the component is shown for the second time. This happens because the data source is loaded for page 5 only.

    In such cases, save the scroll position on hide and restore it on show:

        <!-- tab: App.vue -->
        <script>
            export default {
                // ...
                methods: {
                    onContentVisibilityChange(visible) {
                        if (!visible) {
                            this.gridScrollPosition = this.dataGrid.instance.getScrollable().scrollTop();
                        } else if (this.gridScrollPosition > 0) {
                            this.dataGrid.instance.getScrollable().scrollTo({ top: this.gridScrollPosition }); 
                        }
                    }
                }
            }
        </script>
    
    Alternatively, you can use CSS to hide the component. In this case, call the [updateDimensions](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#updateDimensions) method.

##### React

- In certain cases, row placeholders appear due to redundant re-rendering. To learn more about such issues, refer to the following guide: [Optimize Performance](/Documentation/Guide/React_Components/Optimize_Performance).

- If you use conditional rendering to display DataGrid or TreeList, and virtual scrolling is enabled, the following happens:

    - **on hide**    
    The scroll position is discarded.

    - **on show**    
    The scroll position is set to the first page.

    If DataGrid or TreeList was opened, for example, on page 5 before it was hidden, the gray boxes are displayed after the component is shown for the second time. This happens because the data source is loaded for page 5 only.

    In such cases, save the scroll position on hide and restore it on show:

        <!-- tab: App.js -->
        onContentVisibilityChange(visible) {
            if (!visible) {
                this.gridScrollPosition = this.dataGrid.instance.getScrollable().scrollTop();
            } else if (this.gridScrollPosition > 0) {
                this.dataGrid.instance.getScrollable().scrollTo({ top: this.gridScrollPosition }); 
            }
        }

        function App() {
            // ...
        }
        export default App;
    
    Alternatively, you can use CSS to hide the component. In this case, call the [updateDimensions](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#updateDimensions) method.

---
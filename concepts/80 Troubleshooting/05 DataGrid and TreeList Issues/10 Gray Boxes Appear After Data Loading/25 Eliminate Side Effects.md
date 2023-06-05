Follow the steps below to eliminate possible side effects:

- Disable the [stateStoring](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/stateStoring/) property. Check if the issue still persists. If the issue disappears, it is possible that the saved state is corrupted. Clear the saved state, enable **stateStoring**, and check again.

- FireFox and Safari browsers raise native scrolling events asynchronously. This behavior forces asynchronous row rendering in native scrolling mode even when [renderAsync](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/scrolling/#renderAsync) is disabled. To avoid this side effect, disable the scrolling.[useNative](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/scrolling/#useNative) property. Call the [defaultOptions(rule)](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#defaultOptionsrule) method to eliminate the issue for all DataGrid components in the application.

- If you bind DataGrid or TreeList to one DataSource instance, reset the DataSource page index once you destroy the component. DataSource does not reset the index automatically. A new component bound to this DataSource may attempt to display the first data page while DataSource may contain only other data pages. The component displays gray boxes in such case.
Call the DataSource.[pageIndex(newIndex)](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#pageIndexnewIndex) method to reset the page index.

---

##### Angular

- Conditional rendering does not reload data. If you use conditional rendering to display DataGrid or TreeList, the component's scrollable container resets its scroll position while hiding the component and does not restore it while showing the component. After the component has been hidden and shown, the scroll position is reset to the first DataSource page. Once the data of the first page is not loaded, the gray boxes are displayed. Save the scroll position on hiding the component and restore it on showing so that the component displays the loaded page.

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

- Conditional rendering does not reload data. If you use conditional rendering to display DataGrid or TreeList, the component's scrollable container resets its scroll position while hiding the component and does not restore it while showing the component. After the component has been hidden and shown, the scroll position is reset to the first DataSource page. Once the data of the first page is not loaded, the gray boxes are displayed. Save the scroll position on hiding the component and restore it on showing so that the component displays the loaded page.

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

- Conditional rendering does not reload data. If you use conditional rendering to display DataGrid or TreeList, the component's scrollable container resets its scroll position while hiding the component and does not restore it while showing the component. After the component has been hidden and shown, the scroll position is reset to the first DataSource page. Once the data of the first page is not loaded, the gray boxes are displayed. Save the scroll position on hiding the component and restore it on showing so that the component displays the loaded page.

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
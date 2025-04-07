The following code integrate a [load panel](/concepts/05%20UI%20Components/LoadPanel/00%20Overview.md '/Documentation/Guide/UI_Components/LoadPanel/Overview/') into the application. The panel appears when the app requests card data from the remote service. This step is optional.

---
##### jQuery

To integrate the DevExtreme LoadPanel component:

1. Add a LoadPanel to the code.
2. [Display](/api-reference/10%20UI%20Components/dxLoadPanel/3%20Methods/show().md '/Documentation/ApiReference/UI_Components/dxLoadPanel/Methods/#show') it before calling the render function.
3. [Hide](/api-reference/10%20UI%20Components/dxOverlay/3%20Methods/hide().md '/Documentation/ApiReference/UI_Components/dxLoadPanel/Methods/#hide') it after render.
<!-- ... -->

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
        </head>
        <body>
            <div id="pagination"></div>
            <div id="cards"></div>
            <div id="load-panel"></div>
        </body>
    </html>

    <!-- tab: index.js -->
    $(() => {
        const loadPanel = $('#load-panel')
            .dxLoadPanel({
                position: {
                    my: 'top',
                    at: 'top',
                    of: '#cards',
                },
                visible: false,
                showIndicator: true,
                showPane: true,
                hideOnOutsideClick: false,
            })
            .dxLoadPanel('instance');

        const pagination = $('#pagination')
            .dxPagination({
                // ...
                onOptionChanged: (e) => {
                    if (e.name === 'pageSize' || e.name === 'pageIndex') {
                        const pageIndex = pagination.option('pageIndex');
                        const pageSize = pagination.option('pageSize');
                        loadPanel.show();
                        renderCards(pageSize, pageIndex).finally(() => loadPanel.hide());
                    }
                },
            })
        .dxPagination('instance');
        // ...
        loadPanel.show();
        renderCards(pageSize, pageIndex).finally(() => loadPanel.hide());
    });

##### Angular

To integrate the DevExtreme LoadPanel component:

1. Add a LoadPanel to the code.
2. [Display](/api-reference/10%20UI%20Components/dxLoadPanel/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#visible') it before calling the render function.
3. Hide it after render.
<!-- ... -->

    <!-- tab: app.component.html -->
    <dx-pagination ... ></dx-pagination>
    <!-- ... -->
    <dx-load-panel
        [(visible)]="loadPanelVisible"
        [showIndicator]="true"
        [showPane]="true"
        [hideOnOutsideClick]="false"
    >
        <dxo-position my="top" at="top" of="#cards"></dxo-position>
    </dx-load-panel>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        // ...
        loadPanelVisible = false;

        async fetchColorsForPage(): Promise<void> {
            const startIndex = (this.pageIndex - 1) * this.pageSize;
            const endIndex = this.pageIndex * this.pageSize;
            const hexSubset = this.hexCodes.slice(startIndex, endIndex);

            const promises: Promise<Color>[] = hexSubset.map((hex) => {
                // ...
            });

            this.loadPanelVisible = true;
            try {
                const fetchedColors = await Promise.all(promises);
                this.visibleCards = fetchedColors;
            } catch (error) {
                console.error('Error fetching colors:', error);
            } finally {
                this.loadPanelVisible = false;
            }
        }
    }

##### Vue

To integrate the DevExtreme LoadPanel component:

1. Add a LoadPanel to the code.
2. [Display](/api-reference/10%20UI%20Components/dxLoadPanel/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#visible') it before calling the render function.
3. Hide it after render.
<!-- ... -->

    <!-- tab: App.vue -->
    <template>
        <DxPagination ... />
        <!-- ... -->
        <DxLoadPanel
            v-model:visible="loadPanelVisible"
            :show-indicator="true"
            :show-pane="true"
            :hide-on-outside-click="false"
        >
            <DxPosition my="top" at="top" of="#cards" />
        </DxLoadPanel>
    </template>

    <script setup lang="ts">
    // ...
    import { DxLoadPanel, DxPosition } from 'devextreme-vue/load-panel';

    const loadPanelVisible = ref(false);

    const fetchColorsForPage = async () => {
        loadPanelVisible.value = true;
        const startIndex = (pageIndex.value - 1) * pageSize.value;
        const endIndex = startIndex + pageSize.value;
        const hexSubset = hexCodes.value.slice(startIndex, endIndex);

        const promises = hexSubset.map((hex) => {
            // ...
        });

        try {
            const results = await Promise.all(promises);
            visibleCards.value = results.filter((color): color is Color => color !== null);
        } catch (error) {
            console.error('Error fetching colors:', error);
        } finally {
            loadPanelVisible.value = false;
        }
    };

    // ...
    </script>

##### React

To integrate the DevExtreme LoadPanel component:

1. Add a LoadPanel to the code.
2. [Display](/api-reference/10%20UI%20Components/dxLoadPanel/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#visible') it before calling the render function.
3. Hide it after render.
<!-- ... -->

    <!-- tab: App.tsx -->
    // ...
    import LoadPanel, { Position } from 'devextreme-react/load-panel';

    function App(): JSX.Element {
        // ...
        const [loadPanelVisible, setLoadPanelVisible] = useState<boolean>(false);

        const fetchColorsForPage = useCallback(async (): Promise<void> => {
            setLoadPanelVisible(true);
            const startIndex = (pageIndex - 1) * pageSize;
            const endIndex = startIndex + pageSize;
            const hexSubset = hexCodes.current.slice(startIndex, endIndex);

            const promises = hexSubset.map((hex) => {
                // ...
            });

            try {
                const results = await Promise.all(promises);
                const filteredColors = results.filter((color): color is Color => color !== null);
                setVisibleCards(filteredColors);
            } catch (error) {
                console.error('Error fetching colors:', error);
            } finally {
                setLoadPanelVisible(false);
            }
        }, [pageIndex, pageSize]);

        // ...

        return (
            <Pagination ... />
            <!-- ... -->
            <LoadPanel
                visible={loadPanelVisible}
                showIndicator={true}
                showPane={true}
                hideOnOutsideClick={false}
            >
                <Position my="top" at="top" of="#cards" />
            </LoadPanel>
        );
    }

    export default App;

---
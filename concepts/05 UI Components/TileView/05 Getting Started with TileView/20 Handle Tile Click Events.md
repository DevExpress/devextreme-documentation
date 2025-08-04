Specify the [onItemClick](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#onItemClick) function to handle tile click events. This example implements the [notify()](/Documentation/ApiReference/Common/Utils/ui/#notifymessage_stack) utility method to display clicked item prices:

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $('#tileview').dxTileView({
            onItemClick(e) {
                DevExpress.ui.notify(`Price: ${DevExpress.localization.formatNumber(e.itemData.price, 'currency')}`);
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-tile-view
        (onItemClick)="handleItemClick($event)"
    >
        <!-- ... -->
    </dx-tile-view>

    <!-- tab: app.component.ts -->
    import { DxTileViewTypes } from 'devextreme-angular/ui/tile-view';
    import notify from 'devextreme/ui/notify';
    import { formatNumber } from 'devextreme/localization';

    export class AppComponent {
        handleItemClick(e: DxTileViewTypes.ItemClickEvent): void {
            notify(`Price: ${formatNumber(e.itemData.price, 'currency')}`);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import { DxTileView, type DxTileViewTypes } from 'devextreme-vue/tile-view';
    import notify from 'devextreme/ui/notify';
    import { formatNumber } from 'devextreme/localization';

    function handleItemClick(e: DxTileViewTypes.ItemClickEvent) {
        notify(`Price: ${formatNumber(e.itemData.price, 'currency')}`);
    }
    </script>
    <template>
        <DxTileView
            @item-click="handleItemClick"
        >
            <!-- ... -->
        </DxTileView>
    </template>

##### React

    <!-- tab: App.tsx -->
    import { TileView, type TileViewTypes } from 'devextreme-react/tile-view';
    import notify from 'devextreme/ui/notify';
    import { formatNumber } from 'devextreme/localization';

    function HandleTileClick(e: TileViewTypes.ItemClickEvent): void {
        notify(`Price: ${formatNumber(e.itemData.price, 'currency')}`);
    }

    export default function App(): JSX.Element {
        return (
            <TileView
                onItemClick={HandleTileClick}
            />
        );
    }

---

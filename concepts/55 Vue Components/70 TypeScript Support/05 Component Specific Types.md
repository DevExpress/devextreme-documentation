To import component-specific types, use the `DxComponentTypes` declaration where `Component` is the component name:

    <!-- tab: App.vue -->
    <template>
        <DxDateBox :type="dateType" />
    </template>

    <script setup lang="ts">
    import DxDateBox from "devextreme-vue/date-box";
    import type { DxDateBoxTypes } from "devextreme-vue/date-box";

    const dateType: DxDateBoxTypes.DateType = "datetime";
    </script>

You can also [import component-specific types](/concepts/Common/Modularity/02%20DevExtreme%20Modules%20Structure '/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/') from the `devextreme/ui` package.
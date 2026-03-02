---
id: DataSource
module: common/data
export: DataSource
---
---
##### shortDescription
Allows you to read, write, and process data from a [store](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/store '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/store/').

##### lib
dx.web.js, dx.viz.js, dx.all.js

---
---
##### jQuery  

    <!-- tab: index.js -->
    const dataSource = new DevExpress.data.DataSource({
        // DataSource is configured here
    });

##### Angular  

    <!-- tab: app.component.ts -->
    import DataSource from "devextreme/data/data_source";

    // ...
    export class AppComponent {
        dataSource = new DataSource({
            // DataSource is configured here
        });
    }

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import DataSource from 'devextreme/data/data_source';

    const dataSource = new DataSource({
        // DataSource is configured here
    });
    </script>

##### React

    <!-- tab: App.tsx -->
    import DataSource from 'devextreme/data/data_source';

    const dataSource = new DataSource({
        // DataSource is configured here
    });

---

[note]

---

##### jQuery

- If you create a **DataSource** instance outside a DevExtreme component, make sure to call [dispose()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/dispose().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#dispose') when this instance is no longer required. **DataSource** instances created in DevExtreme components are disposed of automatically.

- Do not use a **DataSource** instance in multiple DevExtreme components. To share data across components, use a common [data store](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores').

- In filtering and sorting operations, **DataSource** ignores letter cases. To implement case-sensitive filtering and sorting, specify **langParams**.[collatorOptions](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/langParams/#collatorOptions) and set [sensitivity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#sensitivity) to *"case"* or *"variant"*:

        <!-- tab: index.js -->
        const dataSource = new DevExpress.data.DataSource({
            langParams: {
                locale: 'en',
                collatorOptions: {
                    sensitivity: 'case',
                }
            }
        });

- **DataSource** is immutable. Call DataSource [methods](/Documentation/ApiReference/Data_Layer/DataSource/Methods/) to manipulate an instance of this object.

##### Angular

- If you create a **DataSource** instance outside a DevExtreme component, make sure to call [dispose()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/dispose().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#dispose') when this instance is no longer required. **DataSource** instances created in DevExtreme components are disposed of automatically.

- Do not use a **DataSource** instance in multiple DevExtreme components. To share data across components, use a common [data store](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores').

- In filtering and sorting operations, **DataSource** ignores letter cases. To implement case-sensitive filtering and sorting, specify **langParams**.[collatorOptions](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/langParams/#collatorOptions) and set [sensitivity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#sensitivity) to *"case"* or *"variant"*:

        <!-- tab: app.component.ts -->
        dataSource = new DataSource({
            langParams: {
                locale: 'en',
                collatorOptions: {
                    sensitivity: 'case',
                }
            }
        });

- **DataSource** is immutable. Call DataSource [methods](/Documentation/ApiReference/Data_Layer/DataSource/Methods/) to manipulate an instance of this object.

##### Vue

- If you create a **DataSource** instance outside a DevExtreme component, make sure to call [dispose()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/dispose().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#dispose') when this instance is no longer required. **DataSource** instances created in DevExtreme components are disposed of automatically.

- Do not use a **DataSource** instance in multiple DevExtreme components. To share data across components, use a common [data store](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores').

- In filtering and sorting operations, **DataSource** ignores letter cases. To implement case-sensitive filtering and sorting, specify **langParams**.[collatorOptions](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/langParams/#collatorOptions) and set [sensitivity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#sensitivity) to *"case"* or *"variant"*:

        <!-- tab: App.vue -->
        const dataSource = new DataSource({
            langParams: {
                locale: 'en',
                collatorOptions: {
                    sensitivity: 'case',
                }
            }
        });

- **DataSource** is immutable. Call DataSource [methods](/Documentation/ApiReference/Data_Layer/DataSource/Methods/) to manipulate an instance of this object.

##### React

- If you create a **DataSource** instance outside a DevExtreme component, make sure to call [dispose()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/dispose().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#dispose') when this instance is no longer required. **DataSource** instances created in DevExtreme components are disposed of automatically.

- Do not use a **DataSource** instance in multiple DevExtreme components. To share data across components, use a common [data store](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores').

- In filtering and sorting operations, **DataSource** ignores letter cases. To implement case-sensitive filtering and sorting, specify **langParams**.[collatorOptions](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/langParams/#collatorOptions) and set [sensitivity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#sensitivity) to *"case"* or *"variant"*:

        <!-- tab: App.tsx -->
        const dataSource = new DataSource({
            langParams: {
                locale: 'en',
                collatorOptions: {
                    sensitivity: 'case',
                }
            }
        });

- **DataSource** is immutable. Call DataSource [methods](/Documentation/ApiReference/Data_Layer/DataSource/Methods/) to manipulate an instance of this object.

- **DataSource** does not support React serialization. To use **DataSource** in apps that use [React Server Components](https://react.dev/reference/rsc/server-components) (such as Next.js applications), configure instances in client components. For more information about server components, refer to the following guide: [Next.js - Server and Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components#using-client-components-in-nextjs).

---

[/note]

#####See Also#####

- [DevExtreme Data Layer](/concepts/70%20Data%20Binding/5%20Data%20Layer '/Documentation/Guide/Data_Binding/Data_Layer/')
- [Data Source Examples](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples '/Documentation/Guide/Data_Binding/Data_Source_Examples/')

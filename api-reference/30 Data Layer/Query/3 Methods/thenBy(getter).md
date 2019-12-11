---
##### shortDescription
Sorts data items by one more [getter](/concepts/30%20Data%20Layer/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters') in ascending order.

##### param(getter): Object
A getter; in most cases, the name of the data field to sort by.

##### return: Query
The **Query** with transformed data.

---
This method can only follow the [sortBy(getter)](/api-reference/30%20Data%20Layer/Query/3%20Methods/sortBy(getter).md '/Documentation/ApiReference/Data_Layer/Query/Methods/#sortBygetter'), [sortBy(getter, desc)](/api-reference/30%20Data%20Layer/Query/3%20Methods/sortBy(getter_desc).md '/Documentation/ApiReference/Data_Layer/Query/Methods/#sortBygetter_desc'), [thenBy(getter, desc)](/api-reference/30%20Data%20Layer/Query/3%20Methods/thenBy(getter_desc).md '/Documentation/ApiReference/Data_Layer/Query/Methods/#thenBygetter_desc'), or another **thenBy(getter)** method call.

---
##### jQuery

    <!--JavaScript-->
    var dataObjects = [
        { name: "Amelia", birthYear: 1991, gender: "female" },
        { name: "Benjamin", birthYear: 1983, gender: "male" },
        { name: "Daniela", birthYear: 1987, gender: "female" },
        { name: "Lee", birthYear: 1981, gender: "male" }
    ];

    var sortedData = DevExpress.data.query(dataObjects)
        .sortBy("gender")
        .thenBy("birthYear")
        .toArray();

    console.log(sortedData);
    /* outputs
    [
        { name: "Daniela", birthYear: 1987, gender: "female" },
        { name: "Amelia", birthYear: 1991, gender: "female" },
        { name: "Lee", birthYear: 1981, gender: "male" },
        { name: "Benjamin", birthYear: 1983, gender: "male" }
    ] */

##### Angular

    <!--TypeScript-->
    import Query from "devextreme/data/query";
    // ...
    export class AppComponent {
        constructor () {
            let dataObjects = [
                { name: "Amelia", birthYear: 1991, gender: "female" },
                { name: "Benjamin", birthYear: 1983, gender: "male" },
                { name: "Daniela", birthYear: 1987, gender: "female" },
                { name: "Lee", birthYear: 1981, gender: "male" }
            ];

            let sortedData = Query(dataObjects)
                .sortBy("gender")
                .thenBy("birthYear")
                .toArray();

            console.log(sortedData);
            /* outputs
            [
                { name: "Daniela", birthYear: 1987, gender: "female" },
                { name: "Amelia", birthYear: 1991, gender: "female" },
                { name: "Lee", birthYear: 1981, gender: "male" },
                { name: "Benjamin", birthYear: 1983, gender: "male" }
            ] */
        };
    }

---

#####See Also#####
- [Sorting](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/1%20Sorting.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Sorting')
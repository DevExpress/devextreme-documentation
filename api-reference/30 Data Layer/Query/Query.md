---
type: Object
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz.js, dx.viz-web.js, dx.all.js

##### shortDescription
An universal chainable data query interface object.

---
To create a Query, call the [query(array)](/api-reference/30%20Data%20Layer/Utils/query(array).md '/Documentation/ApiReference/Data_Layer/Utils/#queryarray') or [query(url, queryOptions)](/api-reference/30%20Data%20Layer/Utils/query(url_queryOptions).md '/Documentation/ApiReference/Data_Layer/Utils/#queryurl_queryOptions') utility function, depending on the type of storage you access. The Query enables you to execute several methods in a single statement, as it supports method chaining.

    <!--JavaScript-->
    var processedArray = DevExpress.data.query(inputArray)
        .filter([ [ "value", ">=", 10 ], "and", [ "value", "<=", 90 ]])
        .sortBy("lastName")
        .thenBy("firstName")
        .select("lastName", "firstName", "value")
        .toArray();

For more information on the Query concept, refer to the [Data Layer](/concepts/30%20Data%20Layer/5%20Data%20Layer/6%20Query%20Concept.md '/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept') article.
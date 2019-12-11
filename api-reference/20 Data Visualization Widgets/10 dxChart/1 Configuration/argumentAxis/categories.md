---
type: array
---
---
##### shortDescription
Specifies the order of categories on an axis of the *"discrete"* [type](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#type').

---
By default, arguments on a discrete axis keep the order of objects in the data source. For example, objects in the following data source are sorted by decreasing **area** value. The resulting arguments will be sorted the same way.

    <!--JavaScript-->var continentsByArea = [
        { continent: 'Asia', area: 43820000 },
        { continent: 'Africa', area: 30370000 },
        { continent: 'North America', area: 24490000 },
        { continent: 'South America', area: 17840000 },
        { continent: 'Antarctica', area: 13720000 },
        { continent: 'Europe', area: 10180000 },
        { continent: 'Australia', area: 9008500 }
    ];

To sort the arguments, for example, alphabetically, you need to assign an array of properly sorted arguments to the **categories** option.

    <!--JavaScript-->var chartOptions = {
        // ...
        argumentAxis: {
            categories: ['Africa', 'Antarctica', 'Asia', 'Australia',
                'Europe', 'North America', 'South America']
        }
    };

[note]Arguments missing from the **categories** array will be added to its end automatically.
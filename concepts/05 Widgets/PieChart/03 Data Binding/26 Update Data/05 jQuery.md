[note]Use the technique described here only if your data source is a [JavaScript array](/concepts/05%20Widgets/PieChart/03%20Data%20Binding/05%20Simple%20Array/05%20Array%20Only.md '/Documentation/Guide/Widgets/PieChart/Data_Binding/Simple_Array/Array_Only/'). Otherwise, update **PieChart** data [through the DataSource instance](/concepts/05%20Widgets/PieChart/03%20Data%20Binding/26%20Update%20Data/01%20DevExtreme%20DataSource.md '/Documentation/Guide/Widgets/PieChart/Data_Binding/Update_Data/#DevExtreme_DataSource'). 

Make changes to the array using [standard methods](https://www.w3schools.com/js/js_array_methods.asp). Then, reassign the updated array to the **PieChart** using the [option(optionName, optionValue)](/api-reference/10%20UI%20Widgets/Component/3%20Methods/option(optionName_optionValue).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#optionoptionName_optionValue') method.

    <!--JavaScript-->var fruits = [
        { fruit: 'Apples', count: 10 },
        { fruit: 'Oranges', count: 12 },
        { fruit: 'Lemons', count: 15 }
    ];

    fruits.push({ fruit: 'Pineapples', count: 3 });
    // Reassigns the "fruits" array to the PieChart 
    $("#pieChartContainer").dxPieChart("option", "dataSource", fruits);

#####See Also#####
- [Get and Set Options - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/05%20Get%20and%20Set%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Get_and_Set_Options/')
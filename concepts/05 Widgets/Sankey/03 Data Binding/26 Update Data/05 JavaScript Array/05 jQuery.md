You can use the <a href="http://www.w3schools.com/js/js_array_methods.asp" target="_blank">standard methods</a> to make changes to the array. Then, use the [option(optionName, optionValue)](/api-reference/10%20UI%20Widgets/Component/3%20Methods/option(optionName_optionValue).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Methods/#optionoptionName_optionValue') method to reassign the updated array to the **Sankey**.

    <!--JavaScript-->var sankeyData = [
        { source: "Brazil", target: "Spain", weight: 4 },
        { source: "Brazil", target: "Portugal", weight: 5 },
        { source: "Brazil", target: "England", weight: 2 },
        { source: "Canada", target: "Portugal", weight: 2 },
        { source: "Canada", target: "England", weight: 1 },
        { source: "Mexico", target: "Portugal", weight: 9 },
        { source: "Mexico", target: "Spain", weight: 5 }
    ];

    sankeyData.push({ source: "Mexico", target: "Spain", weight: 2 });
    // Reassigns the "sankeyData" array to the Sankey 
    $("#sankeyContainer").dxSankey("option", "dataSource", sankeyData);

#####See Also#####
- [Get and Set Options - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/05%20Get%20and%20Set%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Get_and_Set_Options/')

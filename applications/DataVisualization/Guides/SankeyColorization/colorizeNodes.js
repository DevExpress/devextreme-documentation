$(function() {
    var palettes = ["Material", "Bright", "Harmony Light", "Ocean", "Pastel", "Soft", "Soft Pastel", "Vintage", "Violet", "Carmine", "Dark Moon", "Dark Violet", "Green Mist", "Soft Blue", "Office"];
    var paletteExtensionModes = ["blend", "alternate", "extrapolate"];
    var linkColorModes = ["none", "source", "target", "gradient"];

    var sankeyData = [
        { source: "Brazil", target: "Portugal", weight: 5 },
        { source: "Brazil", target: "France", weight: 1 },
        { source: "Brazil", target: "Spain", weight: 1 },
        { source: "Brazil", target: "England", weight: 1 },
        { source: "Canada", target: "Portugal", weight: 1 },
        { source: "Canada", target: "France", weight: 5 },
        { source: "Canada", target: "England", weight: 1 },
        { source: "Canada", target: "Morocco", weight: 20 },
        { source: "Mexico", target: "Portugal", weight: 1 },
        { source: "Mexico", target: "France", weight: 1 },
        { source: "Mexico", target: "Spain", weight: 5 },
        { source: "Mexico", target: "England", weight: 1 },
        { source: "USA", target: "Portugal", weight: 1 },
        { source: "USA", target: "France", weight: 1 },
        { source: "USA", target: "Spain", weight: 1 },
        { source: "USA", target: "England", weight: 5 },
        { source: "Portugal", target: "Angola", weight: 2 },
        { source: "Portugal", target: "Senegal", weight: 1 },
        { source: "Portugal", target: "Morocco", weight: 1 },
        { source: "Portugal", target: "South Africa", weight: 3 },
        { source: "France", target: "Angola", weight: 1 },
        { source: "France", target: "Senegal", weight: 3 },
        { source: "France", target: "Mali", weight: 3 },
        { source: "France", target: "Morocco", weight: 3 },
        { source: "France", target: "South Africa", weight: 1 },
        { source: "Spain", target: "Senegal", weight: 1 },
        { source: "Spain", target: "Morocco", weight: 3 },
        { source: "Spain", target: "South Africa", weight: 1 },
        { source: "England", target: "Angola", weight: 1 },
        { source: "England", target: "Senegal", weight: 1 },
        { source: "England", target: "Morocco", weight: 2 },
        { source: "England", target: "South Africa", weight: 7 },
        { source: "South Africa", target: "China", weight: 5 },
        { source: "South Africa", target: "India", weight: 1 },
        { source: "South Africa", target: "Japan", weight: 3 },
        { source: "Angola", target: "China", weight: 5 },
        { source: "Angola", target: "India", weight: 1 },
        { source: "Angola", target: "Japan", weight: 3 },
        { source: "Senegal", target: "China", weight: 5 },
        { source: "Senegal", target: "India", weight: 1 },
        { source: "Senegal", target: "Japan", weight: 3 },
        { source: "Mali", target: "China", weight: 5 },
        { source: "Mali", target: "India", weight: 1 },
        { source: "Mali", target: "Japan", weight: 3 },
        { source: "Morocco", target: "China", weight: 5 },
        { source: "Morocco", target: "India", weight: 1 },
        { source: "Morocco", target: "Japan", weight: 3 }            
    ];
    
    var chart = $("#chart").dxSankey({
        dataSource: sankeyData,
        palette: palettes[0],
        paletteExtensionMode: paletteExtensionModes[0],
        link: {
            colorMode: linkColorModes[3]
        }
    }).dxSankey("instance");
    
    $("#palette").dxSelectBox({
        items: palettes,
        value: palettes[0],
        onValueChanged: function(e) {
            changeOption("palette", e.value)
        }
    });

    $("#paletteExtensionMode").dxSelectBox({
        items: paletteExtensionModes,
        value: paletteExtensionModes[0],
        onValueChanged: function(e) {
            changeOption("paletteExtensionMode", e.value)
        }
    });

    $("#linkColorMode").dxSelectBox({
        items: linkColorModes,
        value: linkColorModes[3],
        onValueChanged: function(e) {
            changeOption("link.colorMode", e.value)
        }
    });

    var changeOption = function(name, newValue) {
        if(chart.option(name) !== newValue) {
            chart.option(name, newValue)
        }
    }
});
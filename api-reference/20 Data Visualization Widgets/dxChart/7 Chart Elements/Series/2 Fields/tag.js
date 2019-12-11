var dataSource = [
    { year: 1950, europe: 546, americas: 332, africa: 227 },
    { year: 2050, europe: 650, americas: 1231, africa: 1937 },
    { year: 2040, europe: 680, americas: 1178, africa: 1665 },
    { year: 2030, europe: 704, americas: 1110, africa: 1416 },
    { year: 2020, europe: 721, americas: 1027, africa: 1189 },
    { year: 2010, europe: 728, americas: 935, africa: 982 },
    { year: 2000, europe: 730, americas: 836, africa: 797 },
    { year: 1990, europe: 721, americas: 721, africa: 623 },
    { year: 1980, europe: 694, americas: 614, africa: 471 },
    { year: 1970, europe: 656, americas: 513, africa: 361 },
    { year: 1960, europe: 605, americas: 417, africa: 283 }
];

$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'year'
        },
        series: [
            { valueField: 'europe', name: 'Europe', tag: 'Europe is the world&#39;s second-smallest continent by surface area, covering about 10,180,000 square kilometres (3,930,000 sq mi) or 2% of the Earth&#39;s surface and about 6.8% of its land area. Of Europe&#39;s approximately 50 countries, Russia is by far the largest by both area and population, taking up 40% of the continent (although the country has territory in both Europe and Asia), while Vatican City is the smallest.' },
            { valueField: 'americas', name: 'Americas', tag: 'The Americas, or America, are lands in the Western Hemisphere that are also known as the New World. Comprising the continents of North America and South America, along with their associated islands, they cover 8.3% of the Earth&#39;s total surface area (28.4% of its land area). The topography is dominated by the American Cordillera, a long chain of mountains that run the length of the west coast. The flatter eastern side of the Americas is dominated by large river basins, such as the Amazon, Mississippi, and La Plata. Extending 14,000 km (8,699 mi) in a north-south orientation, the climate and ecology varies strongly across the Americas, from arctic tundra of Northern Canada, Greenland, and Alaska, to the tropical rain forests in Central America and South America.' },
            { valueField: 'africa', name: 'Africa', tag: 'Africa is the world&#39;s second-largest continent. At about 30.2 million km² (11.7 million sq mi) including adjacent islands, it covers six percent of the Earth&#39;s total surface area and 20.4 percent of the total land area. With 1.0 billion people (as of 2009, see table), it accounts for about 15% of the world&#39;s human population. The continent is surrounded by the Mediterranean Sea to the north, both the Suez Canal and the Red Sea along the Sinai Peninsula to the northeast, the Indian Ocean to the southeast, and the Atlantic Ocean to the west. The continent includes Madagascar and various archipelagoes. It has 54 fully recognized sovereign states ("countries"), 9 territories and two de facto independent states with limited or no recognition.' }
        ],
        onSeriesClick: function (info) {
            var clickedSeries = info.target;
            clickedSeries.select();
        },
        onSeriesSelectionChanged: function (e) {
            $('#selectionSpan').html(e.target.tag);
        }
    });
});
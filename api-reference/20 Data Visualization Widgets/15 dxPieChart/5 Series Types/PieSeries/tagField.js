var dataSource = [
    { continent: 'Africa', population: 1022234000, info: "Africa is the second largest of the continents, covers around 22% of the world’s land area. The Equator intersects it and the expansive landmass covers the Sahara, which is the world’s largest desert, and the Nile, the longest river on earth, as well as 53 nations. Most of Africa is a desert region. This continent is basically divided into three regions, which are the Northern Plateau, the Central and Southern Plateau, and the Eastern Highlands. This includes plains, swampy coastal regions, lush tropical forests with Savannah's and hilly plateaus inland. It is the home for many exotic large mammals, which include the zebras, giraffes, gazelles, elephants, hippopotamuses, and rhinoceroses, antelopes and carnivores such as lions, leopards, hyenas, and panthers." },
    { continent: 'Europe', population: 738199000, info: "Europe is the fifth largest of the continents. It is also conventionally known as «Europa». Europa was the daughter of Phoenix in Greek mythology. Some say it is possibly from «Ereb», a Phoenician word for sunset. The Ural Mountains, the Ural River, part of the Caspian Sea, and the Caucasus Mountains forms the main boundary between Europe and Asia. Lots of geographers also see the two continents as one and call it Eurasia. Europe has a more or less a radial pattern of drainage. Most streams flow outward from the core of the continent. A wide variety of mineral resources are found in Europe, including coal, petroleum and natural gas, copper, lead, and tin." },
    { continent: 'Australia', population: 29127000, info: "Australia is the smallest of the seven continents. The interiors of the continent are predominantly plains. The Southeast and the Southwest plains are the most densely settled areas of Australia. The climate of Australia is variable, but weather extremes are rare. The Northern part of Australia has a monsoon sort of climate while in the south it is temperate. Australia is known for it’s vast wildlife with rare species and it’s known as the land of the kangaroos. Aborigines are the original inhabitants of Australia. Australians are known to have an ethnic sort of origin. One of the interesting features of Australia is the «Great Barrier Reef», which is the world’s largest coral reef. Learn more about the continents and the nations within them online. You can research any country and all the flags of the world. Wherever you are from a flag is a major source of national pride from the US flag to the Jamaican flag, these icons inspire patriotism." },
    { continent: 'North America', population: 542056000, info: "North America is around twice the size of Europe. It stretches from the vast wintry environment of the Arctic regions to the Yucatan Peninsula. America is sort of wedge shaped featuring an exceedingly irregular coastline with many prominent offshore islands, including Greenland, which is the largest island in the world. It is basically divided into five geographical regions. The North American wildlife was once abundant but after people started inhabiting this land, the numbers have decreased. The large mammals include several kinds of bear, bighorn sheep, caribou, deer, elk, and antelope. Bison, which had a population of about 60 million once, are now found only in protected herds. The Gila monster and the beaded lizard of the southwestern United States and Mexico are the only poisonous lizards in the world. We also get to see a great variety of coastal regions as well as the freshwater rivers and lakes of North America. More than 1,700 species of birds live and breed on this continent." },
    { continent: 'Asia', population: 4164252000, info: "Asia being the largest of the continents covers around one-third of the world’s total land area. Asia is known for its vast size and incomparable character. It stretches all the way east from Japan to the Southeast Arabian Peninsula, which is more than 8500 kilometers away. It is interesting to see the geographical composition of Asia. It encompasses the entire climate and expanse, be it the equatorial rain forest or the arctic tundra. We also get to see the highest and the lowest points of the Earth’s surface in Asia. The highest being, Mount Everest (8,848 meters) and the lowest is the shore of the Dead Sea (397 meters below sea level)." },
    { continent: 'Antarctica', population: 4490, info: "Antarctica the sixth largest of the continents, is ice bound through out the year. Penguins and seals, accompanied by a few invertebrates such as mites and ticks—the only land animals that can tolerate the low temperatures, primarily inhabit it. The marine life is rich and it includes krill, a shrimp like organism that is a food source for large numbers of whales in the surrounding waters. Antarctica has no trees, flowering plants, or grasses. The sparse vegetation is limited to about 350 species, which mostly encompass lichens, mosses and algae. Antarctica is a true desert due to its extreme cold climate making it the coldest, windiest, and driest continent. It’s average temperature is around -50°C (-58°F), and the land is swept by hurricanes and the annual rainfall is only around 50 millimeters a year. This continent has no native civilization but the United Kingdom, Norway, France, Australia, New Zealand, Chile, and Argentina have made territorial claims. Due to the climate it makes it impossible for people to settle down here." },
    { continent: 'South America', population: 392555000, info: "South America is the fourth largest continent of the world although it contains less than 12% of the world’s population. The Andes, world’s second largest mountain range is seen in South America. The second largest river- Amazon also runs through South America. The lowland consists mainly of the Amazon Basin, which is covered in the equatorial region. These areas are of the wet tropical climate and have a dense cover of rain forest. The largest forest area in the world is seen in South America. South America has diverse mineral resources, like gold, silver, iron, bauxite, tin, lead and zinc many of which have not been thoroughly exploited." }
];

$(function () {
    $("#pieChartContainer").dxPieChart({
        dataSource: dataSource,
        series: {
            argumentField: 'continent',
            valueField: 'population',
            tagField: 'info',
            label: {
                visible: true,
                format: {
                    type: 'largeNumber',
                    precision: 2
                },
                connector: { visible: true }
            },
            minSegmentSize: 5
        },
        legend: {
            horizontalAlignment: 'center',
            verticalAlignment: 'bottom'
        },
        title: 'Population by Continent',
        palette: ['#8B7355', '#EE9A49', '#808000', '#A2CD5A', '#DEB887', '#87CEFA', '#BDBDBD'],
        onPointClick: function (info) {
            var clickedPoint = info.target;
            clickedPoint.isSelected() ? clickedPoint.clearSelection() : clickedPoint.select();
        },
        onPointSelectionChanged: function (e) {
            $('#selectionSpan').html(e.target.tag);
        }
    });
});
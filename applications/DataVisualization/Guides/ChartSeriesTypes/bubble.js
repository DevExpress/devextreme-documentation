$(function() {
    var yearlyTopFiveMovies = [
    // 2013
    {
        year: 2013, place: 1,
        title: "Iron Man 3",
        gross: 174144585, theaters: 4253
    }, {
        year: 2013, place: 2,
        title: "The Hunger Games: Catching Fire",
        gross: 158074286, theaters: 4163
    }, {
        year: 2013, place: 3,
        title: "Man of Steel",
        gross: 116619362, theaters: 4207
    }, {
        year: 2013, place: 4,
        title: "Fast & Furious 6",
        gross: 97375245, theaters: 3658
    }, {
        year: 2013, place: 5,
        title: "Thor: The Dark World",
        gross: 85737841, theaters: 3841
    },
    // 2014
    {
        year: 2014, place: 1,
        title: "The Hunger Games: Mockingjay - Part 1",
        gross: 121897634, theaters: 4151
    }, {
        year: 2014, place: 2,
        title: "Transformers: Age of Extinction",
        gross: 100038390, theaters: 4233
    }, {
        year: 2014, place: 3,
        title: "Captain America: The Winter Soldier",
        gross: 95023721, theaters: 3938
    }, {
        year: 2014, place: 4,
        title: "Guardians of the Galaxy",
        gross: 94320883, theaters: 4080
    }, {
        year: 2014, place: 5,
        title: "Godzilla",
        gross: 93188384, theaters: 3952
    },
    // 2015
    {
        year: 2015, place: 1,
        title: "Star Wars: The Force Awakens",
        gross: 247966675, theaters: 4134
    }, {
        year: 2015, place: 2,
        title: "Jurassic World",
        gross: 208806270, theaters: 4274
    }, {
        year: 2015, place: 3,
        title: "Avengers: Age of Ultron",
        gross: 191271109, theaters: 4276
    }, {
        year: 2015, place: 4,
        title: "Furious 7",
        gross: 147187040, theaters: 4004
    }, {
        year: 2015, place: 5,
        title: "Minions",
        gross: 115718405, theaters: 4301
    },
    // 2016
    {
        year: 2016, place: 1,
        title: "Captain America: Civil War",
        gross: 179139142, theaters: 4226
    }, {
        year: 2016, place: 2,
        title: "Batman v Superman: Dawn of Justice",
        gross: 166007347, theaters: 4242
    }, {
        year: 2016, place: 3,
        title: "Rogue One: A Star Wars Story",
        gross: 155081681, theaters: 4157
    }, {
        year: 2016, place: 4,
        title: "Finding Dory",
        gross: 135060273, theaters: 4305
    }, {
        year: 2016, place: 5,
        title: "Suicide Squad",
        gross: 133682248, theaters: 4255
    }];

    $("#chart").dxChart({
        dataSource: new DevExpress.data.DataSource({
            store: {
                type: "array",
                data: yearlyTopFiveMovies
            },
            map: function (item) {
                return $.extend({
                    grossPerTheater: item.gross / item.theaters
                }, item)
            }
        }),
        commonSeriesSettings: {
            argumentField: "theaters",
            valueField: "grossPerTheater",
            sizeField: "gross",
            type: "bubble",
            tagField: "title"
        },
        seriesTemplate: {
            nameField: "year"
        },
        title: "Opening Weekend Domestic Grosses",
        tooltip: {
            enabled: true,
            format: {
                type: "currency",
                precision: 0
            },
            customizeTooltip: function (pointInfo) {
                return {
                    html: "<h5>" + pointInfo.point.tag + " (" + pointInfo.seriesName + ")" + "</h5>" + "<hr>" +
                            "Opening Weekend Total Gross: " + pointInfo.sizeText + "<br />" +
                            "Theaters: " + pointInfo.argumentText + "<br />" +
                            "Gross per Theater: " + pointInfo.valueText
                }
            }
        },
        argumentAxis: {
            title: "Number of Theaters"
        },
        valueAxis: {
            label: {
                format: {
                    type: "currency largeNumber"
                }
            },
            title: "Gross per Theater"
        },
        legend: {
            position: "inside",
            horizontalAlignment: "left",
            verticalAlignment: "top",
            border: {
                visible: true
            }
        }
    });
});
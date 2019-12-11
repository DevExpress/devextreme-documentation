var dataSource = [
    { candidate: 'John', value: 0 },
    { candidate: 'Mike', value: 0 }
];

$(function () {
    $("#chartContainer").dxChart({
        animation: false,
        dataSource: dataSource,
        series: {
            argumentField: 'candidate',
            valueField: 'value',
            type: 'bar'
        },
        valueAxis: { max: 50 },
        legend: { visible: false }
    });

    $("#pieChartContainer").dxPieChart({
        animation: false,
        dataSource: dataSource,
        series: {
            argumentField: 'candidate',
            valueField: 'value'
        }
    });

    $("#voteJohnButton").dxButton({
        text: 'John',
        onClick: function () {
            vote('John');
        }
    });

    $("#voteMikeButton").dxButton({
        text: 'Mike',
        onClick: function () {
            vote('Mike');
        }
    });
});

function vote (name) {
    updateCandidateVotes(name);
    $('#chartContainer').dxChart('instance').option('dataSource', dataSource);
    $('#pieChartContainer').dxPieChart('instance').option({ dataSource: dataSource });
};

function updateCandidateVotes(name) {
    $.each(dataSource, function (_, vote) {
        if (vote.candidate === name) {
            vote.value = vote.value + 1;
        }
    });
};

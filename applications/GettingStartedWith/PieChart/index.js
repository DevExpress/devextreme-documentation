$(function () {
  const billionaires = [
    {
      country: "China",
      amount: 1002
    },
    {
      country: "United States",
      amount: 716
    },
    {
      country: "India",
      amount: 215
    },
    {
      country: "United Kingdom",
      amount: 150
    },
    {
      country: "Germany",
      amount: 145
    }
  ]
  $("#pie-chart").dxPieChart({
    dataSource: billionaires,
    series: {
        argumentField: "country",
        valueField: "amount",
        label: {
            visible: true,
            connector: {
                visible: true
            },
            position: "columns",
            customizeText: function (pointInfo) {
                return pointInfo.value + " billionaires";
            }
        }
    },
    type: "doughnut",
    title: "Top-5 Countries by Number of Billionaires",
    tooltip: {
        enabled: true,
        contentTemplate: function (data) {
            return data.argumentText;
        }
    },
    onPointClick: function (e) {
        const point = e.target;
        if (point.isSelected()) {
            point.clearSelection();
        } else {
            point.select();
        }
    }
});
});
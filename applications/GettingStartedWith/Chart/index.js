const registerGradient = DevExpress.common.charts.registerGradient;
const formatNumber = DevExpress.localization.formatNumber;

$(() => {
  $('#chart').dxChart({
    dataSource: chartData,
    title: 'Target vs Actual Spending 2024',
    series: [{
      type: 'bar',
      argumentField: 'month',
      valueField: 'targetSpend',
      name: 'Budget',
      color: '#5996ff',
    }, {
      type: 'spline',
      argumentField: 'month',
      valueField: 'actualSpend',
      name: 'Amount Spent',
      color: '#cb4bfa',
    }],
    valueAxis: [{
      constantLines: [{
        value: averageSpend,
        color: '#0000c7',
        label: {
          text: 'Yearly Spend Average',
        },
      }],
    }],
    tooltip: {
      enabled: true,
      customizeTooltip,
    },
    commonPaneSettings: {
      backgroundColor: {
        base: '#ffffff',
        fillId: registerGradient('linear', {
          colors: [{
            offset: '20%',
            color: '#dee4ff',
          }, {
            offset: '90%',
            color: '#ffdeff',
          }],
        }),
      },
    },
  });
});

const chartData = [
  { month: 'January', targetSpend: 12000, actualSpend: 9500 },
  { month: 'February', targetSpend: 15500, actualSpend: 16500 },
  { month: 'March', targetSpend: 13500, actualSpend: 12000 },
  { month: 'April', targetSpend: 16000, actualSpend: 14000 },
  { month: 'May', targetSpend: 17000, actualSpend: 18500 },
  { month: 'June', targetSpend: 20000, actualSpend: 17500 },
  { month: 'July', targetSpend: 14500, actualSpend: 11000 },
  { month: 'August', targetSpend: 21000, actualSpend: 22500 },
  { month: 'September', targetSpend: 19000, actualSpend: 18000 },
  { month: 'October', targetSpend: 22000, actualSpend: 25000 },
  { month: 'November', targetSpend: 16000, actualSpend: 14500 },
  { month: 'December', targetSpend: 25000, actualSpend: 27000 },
];

// A function cannot directly be assigned to the constantLines[].value property of Chart axes.
const averageSpend = calculateAverageSpend();

function calculateAverageSpend() {
  const sum = chartData.reduce((accumulator, { actualSpend }) => accumulator + actualSpend, 0);

  return sum / chartData.length;
}

function customizeTooltip(data) {
  if (data.seriesName === 'Budget') {
    return { text: formatNumber(data.value, 'currency') };
  }
  const isValueAboveAverage = data.value > averageSpend;
  if (isValueAboveAverage) {
    return { text: `${formatNumber(data.value, 'currency')}\n${formatNumber(data.value - averageSpend, 'currency')} above average spending.` };
  }

  return { text: `${formatNumber(data.value, 'currency')}\n${formatNumber(averageSpend - data.value, 'currency')} below average spending.` };
}

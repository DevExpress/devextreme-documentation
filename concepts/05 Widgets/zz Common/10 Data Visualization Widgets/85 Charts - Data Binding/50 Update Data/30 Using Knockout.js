var t, i, data = [];

for (i = 0; i <= 9; i++) {
    data.push({ time: i, velocity: Math.sin(i) });
};

var viewModel = { 
    observableChartDataSource: ko.observableArray(data),

    isStarted: ko.observable(false),

    start: function () {
        var data = this.observableChartDataSource;
        var addPoint = function () {
            if (i > 9) { data.shift(); }
            data.push({ time: i, velocity: Math.sin(i) });
            i = i + 1;
        };
        t = setInterval(addPoint, 100);
        this.isStarted(true);
    },

    stop: function () {
        clearInterval(t);
        this.isStarted(false);
    }
};

ko.applyBindings(viewModel);
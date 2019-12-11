var myTheme = {
    name: 'bulletGreenTheme',
    bullet: {
        color: 'lightgreen',
        targetColor: 'forestgreen',
        tooltip: {
            color: 'limegreen'
        }
    }
};
DevExpress.viz.registerTheme(myTheme, 'generic.light');
$(function () {
    $("#bulletContainer").dxBullet({
        theme: 'bulletGreenTheme',
        startScaleValue: 5,
        endScaleValue: 100,
        target: 68,
        value: 50
    });
})


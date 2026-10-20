**calculateRoute** can return route geometry in one of the following [OsmRouteResult](/Documentation/ApiReference/UI_Components/dxMap/Types/OsmRouteResult/) formats:

    <!--JavaScript-->
    // An array of coordinate pairs (latitude then longitude)
    const coordinatePairs = [
        [40.749825, -73.987963],
        [40.753182, -73.982253]
    ];

    // A GeoJSON LineString object (longitude then latitude)
    const lineString = {
        type: 'LineString',
        coordinates: [
            [-73.987963, 40.749825],
            [-73.982253, 40.753182]
        ]
    };

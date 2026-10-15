**calculateRoute** can return predefined coordinates instead of requesting route geometry from a routing service. The function receives only route waypoints and the transportation mode, so use waypoints to identify predefined routes:

    <!--JavaScript-->
    const predefinedRoutes = {
        // Key: route waypoints. Value: route geometry (latitude then longitude).
        '40.749825,-73.987963;40.753182,-73.982253': [
            [40.749825, -73.987963],
            [40.753634, -73.985198],
            [40.752408, -73.982291],
            [40.753182, -73.982253]
        ]
    };

    async function calculateRoute({ locations }) {
        const key = locations.map(({ lat, lng }) => `${lat},${lng}`).join(';');
        const coordinates = predefinedRoutes[key];
        if (!coordinates) {
            throw new Error(`No predefined route for ${key}`);
        }
        return coordinates;
    }

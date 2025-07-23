To enable selection of all items within a group, add group fields to your data source. For instance, to group an array of cities by state, add a *"State"* field to each array item:

---

##### jQuery

    <!-- tab: data.js -->
    const cities = [{
        ID: 1,
        City: 'Bentonville',
        State: 'Arkansas',
    }, {
        ID: 2,
        City: 'Atlanta',
        State: 'Georgia',
    }, {
        // ...
    }]

##### Angular

    <!-- tab: data.ts -->
    cities = [{
        ID: 1,
        City: 'Bentonville',
        State: 'Arkansas',
    }, {
        ID: 2,
        City: 'Atlanta',
        State: 'Georgia',
    }, {
        // ...
    }]

##### Vue

    <!-- tab: data.ts -->
    const cities = [{
        ID: 1,
        City: 'Bentonville',
        State: 'Arkansas',
    }, {
        ID: 2,
        City: 'Atlanta',
        State: 'Georgia',
    }, {
        // ...
    }]

##### React

    <!-- tab: data.ts -->
    const cities = [{
        ID: 1,
        City: 'Bentonville',
        State: 'Arkansas',
    }, {
        ID: 2,
        City: 'Atlanta',
        State: 'Georgia',
    }, {
        // ...
    }]

---
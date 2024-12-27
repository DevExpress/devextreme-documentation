The following code snippet demonstrates how to fetch data from the Color API:

---
##### jQuery

    <!-- tab: index.js -->
    // ...
    const apiEndpoint = 'https://www.thecolorapi.com/id?hex=';
    const cache = new Map();

    function fetchData(colorId) {
        return new Promise((resolve, reject) => {
            if (cache.has(colorId)) {
                resolve(cache.get(colorId));
            } else {
            $.getJSON(apiEndpoint + colorId, (data) => {
                const colorData = {
                    image: data.image.bare,
                    name: data.name.value,
                };
                cache.set(colorId, colorData);
                resolve(colorData);
            }).fail(() => {
                reject(new Error(`Error loading color for hex: ${colorId}`));
            });
            }
        });
    }

    $(() => {
        // ...
        const pagination = $('#pagination')
            .dxPagination({
                // ...
            })
        .dxPagination('instance');
    });

##### Angular

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    @Injectable({
        providedIn: 'root',
    })
    export class ColorService {
        // ...
        fetchColorData(hex: string): Observable<Color> {
            return this.http.get<any>(`${this.apiEndpoint}${hex}`)
                .pipe(
                    catchError((error: any) => throwError(() => new Error(`Error fetching color: ${error.message || error}`))),
                )
                .pipe(map((data: any) => ({
                    name: data.name.value,
                    image: data.image.bare,
                })));
        }
    }

##### Vue

    <!-- tab: colorService.ts -->
    import axios from 'axios';

    const apiEndpoint = 'https://www.thecolorapi.com/id?hex=';

    export const fetchColorData = async (
        hex: string,
    ): Promise<{ name: string; image: string } | null> => {
        try {
            const response = await axios.get(`${apiEndpoint}${hex}`);
            return {
                name: response.data.name.value,
                image: response.data.image.bare,
            };
        } catch (error) {
            console.error(`Error fetching color for hex ${hex}:`, error);
            return null;
        }
    };

##### React

    <!-- tab: colorService.ts -->
    import axios from 'axios';

    const apiEndpoint = 'https://www.thecolorapi.com/id?hex=';

    export async function fetchColorData(hex: string): Promise<{ name: string; image: string } | null> {
        try {
            const response = await axios.get(`${apiEndpoint}${hex}`);
            return {
                name: response.data.name.value,
                image: response.data.image.bare,
            };
        } catch (error) {
            console.error(`Error fetching color for hex ${hex}:`, error);
            return null;
        }
    }

---
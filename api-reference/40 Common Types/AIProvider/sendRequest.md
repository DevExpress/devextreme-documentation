---
id: AIProvider.sendRequest
type: function(params)
---
---
##### shortDescription
A function that sends a request to a language model.

##### param(params): RequestParams
Request parameters.

##### return: Response
An object with AI response.

---
---
##### jQuery

    <!-- tab: index.js -->
    const aiIntegration = new DevExpress.aiIntegration({
        sendRequest({ prompt }) {
            const promise = fetch('/** API URL */', {
                method: '/** method name */',
                headers: { /** headers */ },
                body: JSON.stringify({ prompt }),
            })
                .then(async (response) => {
                    const result = await response.json();

                    return result.output || '';
                })

            return {
                promise,
                abort: () => {
                    // Abort request here
                },
            };
        },
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { HttpClient, HttpHeaders } from '@angular/common/http';
    import { AIIntegration } from 'devextreme-angular/ai-integration';
    // ...
    export class AppComponent {
        constructor(private http: HttpClient) {}
        provider = {
            sendRequest: ({ prompt }) => {
            const controller = new AbortController();

            const headers = new HttpHeaders({
                // Add any custom headers here
                'Content-Type': 'application/json',
            });

            const body = JSON.stringify({ prompt });

            const promise = this.http
                .post<{ output?: string }>('/** API URL */', body, {
                    headers,
                    signal: controller.signal,
                })
                .toPromise()
                .then((result) => result.output || '');

            return {
                promise,
                abort: () => controller.abort(),
            };
            },
        };
        aiIntegration = new AIIntegration(provider);
    }

##### Vue

    <!-- tab: App.vue -->
    <script lang="ts" setup>
    import { ref } from 'vue';
    import { AIIntegration } from 'devextreme-vue/ai-integration';

    const provider = {
        sendRequest: ({ prompt }) => {
        const controller = new AbortController();

        const headers = {
            'Content-Type': 'application/json',
            // Add any custom headers here
        };

        const promise = fetch('/** API URL */', {
            method: 'POST',
            headers,
            body: JSON.stringify({ prompt }),
            signal: controller.signal,
        })
            .then(async (response) => {
                const result = await response.json();
                return result.output || '';
            });

        return {
            promise,
            abort: () => controller.abort(),
        };
        },
    };

    const aiIntegration = new AIIntegration(provider);
    </script>

##### React

    <!-- tab: App.tsx -->
    import { AIIntegration } from 'devextreme-react/ai-integration';

    const provider = {
        sendRequest: ({ prompt }) => {
        const controller = new AbortController();

        const headers = {
            'Content-Type': 'application/json',
            // Add any custom headers here
        };

        const promise = fetch('/** API URL */', {
            method: 'POST',
            headers,
            body: JSON.stringify({ prompt }),
            signal: controller.signal,
        })
            .then(async (response) => {
                const result = await response.json();
                return result.output || '';
            });

        return {
            promise,
            abort: () => controller.abort(),
        };
        },
    };
    const aiIntegration = new AIIntegration(provider);

---
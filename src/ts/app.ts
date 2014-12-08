/// <reference path="../../typings/tsd.d.ts" />

module GuestBook {

    export class App {
        constructor() {
            new SimpleController();
        }
    }

    $(() => {
        new App();
    });
}

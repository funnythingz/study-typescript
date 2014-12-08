/// <reference path="../../typings/tsd.d.ts" />

module Study {

    export class App {
        constructor() {
            new SimpleController();
        }
    }

    $(() => {
        new App();
    });
}

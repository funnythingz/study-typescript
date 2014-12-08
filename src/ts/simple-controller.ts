/// <reference path="../../typings/tsd.d.ts" />

module GuestBook {

    export class SimpleController {

        layout: Layout = new Layout();

        constructor() {
            var simpleView = new SimpleView();
            this.layout.display(simpleView.render());
        }
    }

}

/// <reference path="../../typings/tsd.d.ts" />

module Study {

    export class SimpleController {

        layout: Layout = new Layout();

        constructor() {
            var simpleView = new SimpleView();
            this.layout.display(simpleView.render());
        }
    }

}

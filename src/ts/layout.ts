/// <reference path="../../typings/tsd.d.ts" />

module Study {

    export class Layout {

        $yield: JQuery = $('#yield');

        display($el: JQuery) {
            this.$yield.append($el);
        }
    }

}

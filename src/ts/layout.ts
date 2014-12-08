/// <reference path="../../typings/tsd.d.ts" />

module GuestBook {

    export class Layout {

        $yield: JQuery = $('#yield');

        display($el: JQuery) {
            this.$yield.append($el);
        }
    }

}

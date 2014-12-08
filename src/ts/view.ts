/// <reference path="../../typings/tsd.d.ts" />

module Study {

    export class InputView {
        $el: JQuery = $('<input type="text" id="input-text">');
    }

    export class PostView {
        $el: JQuery = $('<button id="post">Post</button>');
    }

    export class UlView {
        $el: JQuery = $('<ul>');
    }

    export class ListView {
        $el: JQuery = $('<li>');
    }

    export class SimpleView {

        $el: JQuery = $('<div>');

        inputView = new InputView();
        postView = new PostView();
        ulView = new UlView();

        render(): JQuery {
            return this.$el.append(this.inputView.$el, this.postView.$el, this.ulView.$el);
        }

    }

}

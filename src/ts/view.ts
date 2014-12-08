/// <reference path="../../typings/tsd.d.ts" />

module GuestBook {

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

        private post() {
            var val: string = this.inputView.$el.val();

            if(val !== '') {
                var listView = new ListView();
                listView.$el.html(val);
                this.ulView.$el.prepend(listView.$el);
                this.inputView.$el.val('');
            }
        }

        events() {
            this.postView.$el.on('click', e => { this.post(); });
            this.inputView.$el.on('keydown', e => {
                if(e.keyCode === 13) {
                    this.post();
                }
            });
        }

        render(): JQuery {
            this.events();
            return this.$el.append(this.inputView.$el, this.postView.$el, this.ulView.$el);
        }

    }

}

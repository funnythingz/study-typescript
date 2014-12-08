/// <reference path="../../typings/tsd.d.ts" />

module GuestBook {

    export class Input {
        $el: JQuery = $('<input type="text" id="input-text">');
    }

    export class Post {
        $el: JQuery = $('<button id="post">Post</button>');
    }

    export class Ul {
        $el: JQuery = $('<ul>');
    }

    export class List {
        $el: JQuery = $('<li>');
    }

    export class SimpleView {

        $el: JQuery = $('<div>');

        input = new Input();
        post = new Post();
        ul = new Ul();

        private update() {
            var val: string = this.input.$el.val();

            if(val !== '') {
                var list = new List();
                list.$el.html(val);
                this.ul.$el.prepend(list.$el);
                this.input.$el.val('');
            }
        }

        events() {
            this.post.$el.on('click', e => { this.update(); });
            this.input.$el.on('keydown', e => {
                if(e.keyCode === 13) {
                    this.update();
                }
            });
        }

        render(): JQuery {
            this.events();
            return this.$el.append(this.input.$el, this.post.$el, this.ul.$el);
        }

    }

}

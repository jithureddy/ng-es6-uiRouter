export default class HomeDirective {

    constructor($interval) {
        this.template = '<div>I\'m a directive!</div>';
        this.restrict = 'E';
        this.scope = {}
        this.$interval = $interval;
    }

    // optional compile function
    compile(tElement) {
        tElement.css('position', 'absolute');
        tElement.css('background-color', '#fff');
    }

    // optional link function
    link(scope, element) {
        this.$interval(() => this.move(element), 1000);
    }

    move(element) {
        element.css('left', (Math.random() * 500) + 'px');
        element.css('top', (Math.random() * 500) + 'px');
    }
}
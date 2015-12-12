var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angular2_1 = require('angular2/angular2');
var todoList_ts_1 = require('./todoList.ts');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'app',
            directives: [todoList_ts_1.TodoList],
            template: "\n    <h1>Todo App</h1>\n    <todo-list></todo-list>\n  "
        })
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);

//https://angular.io/docs/ts/latest/tutorial/toh-pt1.html
import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2'
import {PouchDBService} from './service/pouchDbService.ts'
import {IStorageService} from './service/interface/storageService.ts'
import {Item} from './model/item'

@Component({
    selector: 'awesome-knowledge-app',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
    template: `
    <h1>{{title}}</h1>
    <div>
        <button (click)="onClick()" class="btn btn-primary">add</button>
    </div>
    <!-- iterate over items -->
    <ul class="items">
      <li *ngFor="#item of items"  [ngClass]="getSelectedClass(hero)" (click)="onSelect(item)">
        <span class="badge">{{item.id}}</span>
        {{item.name}}
      </li>
    </ul>
    <!-- on select show item details -->
    <div *ngIf="selectedItem">
    <h2>{{selectedItem.name}} details!</h2>
        <div class="form-group">
        <label>name: </label>
        <input id="tags" [(ngModel)]="selectedItem.name" placeholder="tags" class="form-control">
        </div>
        <div class="form-group">
        <label>tags: </label>
        <input id="tags" [(ngModel)]="selectedItem.tags" placeholder="tags" class="form-control">
        </div>
    </div>
    `,
    styles: [`
  .items {list-style-type: none; margin-left: 0; padding: 0;}
  .items li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; padding: 2px 3px;}
  .items li:hover {color: #369; background-color: #EEE; left: .2em;}
  .items .badge {
    font-size: small;
    color: white;
    padding: 0.1em 0.7em;
    background-color: #369;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -1px;
  }
  .selected { background-color: #EEE; color: #369; }
  `],
})
class AwesomeKnowledgeApp {
    private StorageService:IStorageService;

    public title = 'Awesome Knowledge';
    public items:Item[];
    public selectedItem:Item = null;

    constructor(StorageService:PouchDBService) {
        this.StorageService = StorageService;
        this.items = [];
        StorageService.findAll()
            .then(storedItems => {
                storedItems.forEach(i => {
                    this.items.push(i);
                });
            });
    }

    onSelect(item:Item) {
        this.selectedItem = item;
    }

    onClick() {
        this.items.push({id: this.items.length + 1, name: 'New awesome item', tags: []});
    }

    getSelectedClass(item:Item) {
        return {'selected': item === this.selectedItem};
    }
}

bootstrap(AwesomeKnowledgeApp, [PouchDBService]);

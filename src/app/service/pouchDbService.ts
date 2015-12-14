import {IStorageService} from './interface/storageService.ts'
import {Item} from "../model/item";

declare var PouchDB:any; // Magic

export class PouchDBService implements IStorageService<Item> {
    private db:PouchDB;

    constructor() {
        this.db = new PouchDB('items');
        //FIXME: check if eleements are contained already, if so skip put...
        this.add(
            {
                id: 1,
                name: 'http://www.fullstackradio.com/31',
                tags: ['architecture', 'estimate', 'design'],
            }
        );
    }

    add(item:Item) {
        this.db.put({ _id: new Date().toISOString(), data: item}, this.handle);
    }

    handle(err:any, result:any) {
        if (!err) {
            console.log('Successfully posted a todo!', result);
        } else {
            console.log(err);
        }
    }

    findAll():Promise<Item[]> {
        return this.db.allDocs({include_docs: true, descending: true}, function(err, doc) {
        //    ?
        })
        .then(result => result.rows.map (d => d.doc.data));
    }

    findById(id:String):Item {
        return {
            id: 1,
            name: 'http://www.fullstackradio.com/31',
            tags: ['architecture', 'estimate', 'design'],
        }
    }
}

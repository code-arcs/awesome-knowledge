export interface IStorageService<E> {
    findById(id : String) : E
    findAll() : E[];
}

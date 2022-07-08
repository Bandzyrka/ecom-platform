export enum COLLECTIONS_ACTION_TYPES {
    FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START',
    FETCH_COLLECTIONS_SUCCES ='FETCH_COLLECTIONS_SUCCES',
    FETCH_COLLECTIONS_FAILURE = 'FETCH_COLLECTIONS_FAILURE'
}
export type CollectionItem = {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
}
export type Collection = {
    title: string;
    imageUrl: string;
    items: CollectionItem[];
}
export type CollectionMap = {
    [key: string]: CollectionItem[]
}
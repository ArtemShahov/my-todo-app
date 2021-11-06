type CategoryName = string;

export interface category_interface {
    _id: string,
    name: CategoryName,
    items?: string[],
    parent?: string,
    __v?: any,
}
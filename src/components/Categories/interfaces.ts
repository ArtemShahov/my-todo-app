type CategoryName = string;

export interface category_interface {
    _id: string,
    name: CategoryName,
    items?: string[],
    parentId?: string,
    __v?: any,
}
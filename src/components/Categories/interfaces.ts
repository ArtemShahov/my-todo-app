type CategoryName = string;

export interface category_interface {
  id: string;
  name: CategoryName;
  items: string[];
  parentId: string;
  childrenId: string[];
  __v?: any;
}

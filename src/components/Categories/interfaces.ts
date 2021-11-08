type CategoryName = string;

export interface category_interface {
  id: string;
  name: CategoryName;
  items?: string[];
  parentId?: string;
  __v?: any;
}

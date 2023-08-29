import { FilterTypes } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";

export function GetCategoryByType(type: FilterTypes){
  if(type === FilterTypes.MUG) return 'mugs'
  if(type === FilterTypes.SHIRT) return 't-shirts'
  return ''
}

export function getFieldByPriority(priority: PriorityTypes){
  if(priority === PriorityTypes.NEWS) return { field: 'created_at', order: 'DSC' }
  if(priority === PriorityTypes.BIGGEST_PRICE) return { field: 'price_in_cents', order: 'ASC' }
  if(priority === PriorityTypes.MINOR_PRICE) return { field: 'price_in_cents', order: 'DSC' } 
  return { field: 'sales', order: 'DSC' }
}

export const mountQuery = (type: FilterTypes, priority: PriorityTypes) => {
  const sortSettings = getFieldByPriority(priority)
  if(type === FilterTypes.ALL){
    return `
      query {
        allProducts(sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}") {
          id
          name
          price_in_cents
          image_url
        }
      }
    `
  }

  

  return `
    query {
      allProducts(filter: { category: "${GetCategoryByType(type)}" }, sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}") {
        id
        name
        price_in_cents
        image_url
      }
    }
  `
}
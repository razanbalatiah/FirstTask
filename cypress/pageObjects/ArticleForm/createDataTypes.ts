export interface Article {
  title:string,
  slug?:string,
  body:string,
  createdAt?: string,
  updatedAt?: string,
  tagList?: string [],
  description: string,
  favorited?: boolean,
  favoritesCount?: number
}

export interface Author {
  username?:string,
  bio?:string,
  image?:string,
  following?:boolean
}
 

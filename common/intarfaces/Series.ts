export interface Serial {
  id: string
  url: string
  name: string
  type: string
  genres: string[]
  status: string
  runtime: number
  avarageRuntime: number
  premiered: string
  ended: string
  officialSite: string
  shedle: {
    time: string
    days: string[]
  }
  rating: {
    average: number
  }
  externals: {
    imdb: string
  }
  image: {
    medium: string
    original: string
  }
  summary: string
}
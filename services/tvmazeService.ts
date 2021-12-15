import { range } from "rxjs"
import { Filter } from "../common/intarfaces"
import { Serial } from "../common/intarfaces"

const URL = 'https://api.tvmaze.com/'
const searchSeriesURL = 'https://api.tvmaze.com/search/shows?q='
const getSerialURL = 'https://api.tvmaze.com/shows/'

const seriesByPageURL = 'https://api.tvmaze.com/shows?page='
const LIMIT = 40

async function searchSeries(...filters: Filter<Serial>[]) {
  const res: Serial[] = []

  for (let i = 0; i < 230 && res.length !== LIMIT; i++) {
    const response = await fetch(seriesByPageURL + i)
    const jsonArr: Serial[] = await response.json()
    jsonArr.every(s => {
      if (filters.every( f => f(s) )) res.push(s)
      return res.length !== LIMIT
    })
  }

  return res
}

async  function getSerialById(id: number) {
  const response = await fetch(getSerialURL + id)
  const json: Serial = await response.json()
  return json
}

const tvmazeService = {
  searchSeries,
  getSerialById
}

export default tvmazeService
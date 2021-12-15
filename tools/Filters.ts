import { Serial, Filter } from "../common/intarfaces";

export const nameFilter = (name: string): Filter<{name: string}> => 
obj => {
  const serialNormalName = obj.name.toLowerCase()
  const normalName = name.toLowerCase()

  return serialNormalName.startsWith(normalName) || serialNormalName.includes(normalName)
}

export const genresFilter = (genres: string[]): Filter<Serial> =>
serial => {
  const serialG = serial.genres.map(g => g.toLowerCase())
  const normalG = genres.map(g => g.toLowerCase())

  return serialG.some(g => normalG.includes(g)) || normalG.length === 0
}
  
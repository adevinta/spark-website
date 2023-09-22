import path from 'node:path'
import fsPromises from 'fs/promises'

export async function getLocalData(fileName) {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), fileName)
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath)
  // Parse data as json
  const objectData = JSON.parse(jsonData)

  return objectData
}

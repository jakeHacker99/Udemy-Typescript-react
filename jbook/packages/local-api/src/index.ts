export const serve = (port: number, fileName: string, dir: string) => {
    console.log(`Jakob is listening on port`, port)
    console.log(`Starting fetch from `, fileName)
    console.log(`This file is in the`, dir, " directory")
}

const { getNameFile } = require('../utils/getNameFile')

module.exports = class FirmwaresService {
  static isHigherVersion(lastData, versionMajor, versionMinor, versionPatch) {
    const versioning = lastData.length ? lastData[0] : null

    if (!versioning) return false

    const lastVersion =
      versioning.version_major * 100 + versioning.version_minor * 10 + versioning.version_patch
    const thisVersion = versionMajor * 100 + versionMinor * 10 + versionPatch

    const result = lastVersion >= thisVersion

    return result
  }

  static addNameFile(data) {
    if (!data.length) return data

    const dataOutput = data.map((firmware) => {
      const rootName = getNameFile(
        firmware.name_project,
        firmware.version_major,
        firmware.version_minor,
        firmware.version_patch
      )

      const extensionFile = firmware.name_file.slice(firmware.name_file.length - 5)
      const name_file = rootName + extensionFile

      return { ...firmware, name_file }
    })

    return dataOutput
  }
}

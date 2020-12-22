const axios = require("axios")

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const b64 = await axios
    .get("https://github.com/bigspeedfpv.png", {
      responseType: 'arraybuffer'
    })
    .then(response => Buffer.from(response.data, 'binary').toString('base64'))

  const node = {
    name: "Profile",
    id: createNodeId(`Profile`),
    data: b64,
    internal: {
      type: "Profile",
      contentDigest: createContentDigest(b64)
    }
  }
  actions.createNode(node)
}
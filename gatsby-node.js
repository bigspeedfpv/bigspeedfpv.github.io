const axios = require("axios")

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  var b64 = ""
  
  axios
    .get("https://github.com/bigspeedfpv.png", {
      responseType: 'arraybuffer'
    })
    .then(response => {
      b64 = Buffer.from(response.data, 'binary').toString('base64')

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
    })
}
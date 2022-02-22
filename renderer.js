// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { remote } = require("electron")

function loadVideoCall() {
  const url = remote.app.url[0].replace('myapp://','').split('&');
  let opts = null
  if (url.length > 0) {
    console.log('Renderer-L10', url)
    const urlParams = url
    const params = [];
    console.log('Renderer-L13', urlParams);
    for (const param of urlParams) {
      params.push(param)
      console.log('Renderer-L16', param)
    }
    opts = params;
    console.log('Renderer-L19',params)
  }
  return opts;
}

module.exports = {
  loadVideoCall
}
import preprocess from "svelte-preprocess"
import autoprefixer from "autoprefixer"
import image from "svelte-image"
import adapterStatic from "@sveltejs/adapter-static"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    postcss: {
      plugins: [autoprefixer()]
    },
    ...image()
  }),

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    adapter: adapterStatic()
  }
}

export default config

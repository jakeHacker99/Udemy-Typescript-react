import axios from 'axios';
import * as esbuild from 'esbuild-wasm';
import localforage from 'localforage';


const fileCacha = localforage.createInstance({
    name: "filecache"
});


export const fetchPlugin = (inputCode: string) => {
    return {
        name: "fetch-plugin",
        setup(build: esbuild.PluginBuild) {
            build.onLoad({ filter: /.*/ }, async (args: any) => {
                if (args.path === 'index.js') {
                    return {
                        loader: 'jsx',
                        contents: inputCode,
                    };
                }

                const cachedResult = await fileCacha.getItem<esbuild.OnLoadResult>(args.path)

                if (cachedResult) {
                    return cachedResult
                }

                const { data, request } = await axios.get(args.path)

                const result: esbuild.OnLoadResult = {
                    loader: "jsx",
                    contents: data,
                    resolveDir: new URL("./", request.responseURL).pathname
                }
                await fileCacha.setItem(args.path, result)

                return result

            });
        }
    }
}

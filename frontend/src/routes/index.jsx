import { createBrowserRouter } from "react-router-dom";

const modules = Object.entries(import.meta.glob('../modules/*/routes/index.jsx'))
const moduleRoutes = []

for (const [path, importFn] of modules) {
    const module = await importFn()
    moduleRoutes.push(...module.default)
}

console.log(moduleRoutes);


export default createBrowserRouter(moduleRoutes);


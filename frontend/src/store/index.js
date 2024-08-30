
const modulesStore = Object.entries(import.meta.glob('@/modules/*/store/index.jsx'))
let Store = null

const moduleRE = /\/src\/modules\/(\w+)\/store\/index.jsx/g

if(!Store) await initStore()

async function initStore() {
    Store = {}
    for (const [path, importFn] of modulesStore) {
        const name = path.replace(moduleRE, '$1')
        const module = await importFn()
        Store[name] = module.default
    }
}

export default Store
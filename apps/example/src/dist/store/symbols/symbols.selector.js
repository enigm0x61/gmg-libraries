export const getSymbolsState = (store) => store.symbols;
export const getSymbolsList = (store) => getSymbolsState(store).list;
export const getSymbolsByIds = (store, ids) => {
    const list = getSymbolsList(store);
    return ids.reduce((accumulator, currentValue) => {
        if (list.hasOwnProperty(currentValue)) {
            accumulator[currentValue] = list[currentValue];
        }
    }, {});
};
export const getSymbolsById = (store, id) => {
    const list = getSymbolsList(store);
    if (list.hasOwnProperty(id)) {
        return list[id];
    }
    return null;
};

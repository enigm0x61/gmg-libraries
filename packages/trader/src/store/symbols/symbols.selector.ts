export const getSymbolsState = (store: any) => store.symbols;

export const getSymbolsList = (store: any) => getSymbolsState(store).list;

export const getSymbolsByIds = (store: any, ids: any) => {
  const list = getSymbolsList(store);

  return ids.reduce((accumulator: any, currentValue: any) => {
    if (list.hasOwnProperty(currentValue)) {
      accumulator[currentValue] = list[currentValue];
    }
  }, {})
}

export const getSymbolsById = (store: any, id: string|number) => {
  const list = getSymbolsList(store);

  if (list.hasOwnProperty(id)) {
    return list[id];
  }

  return null;
}
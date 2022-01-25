export const getReportState = (store: any) => store.report;

export const getReportList = (store: any) => getReportState(store).list;

export const getReportByIds = (store: any, ids: any) => {
  const list = getReportList(store);

  return ids.reduce((accumulator: any, currentValue: any) => {
    if (list.hasOwnProperty(currentValue)) {
      accumulator[currentValue] = list[currentValue];
    }
  }, {})
}

export const getReportById = (store: any, id: string|number) => {
  const list = getReportList(store);

  if (list.hasOwnProperty(id)) {
    return list[id];
  }

  return null;
}
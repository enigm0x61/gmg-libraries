export const getReportState = (store) => store.report;
export const getReportList = (store) => getReportState(store).list;
export const getReportByIds = (store, ids) => {
    const list = getReportList(store);
    return ids.reduce((accumulator, currentValue) => {
        if (list.hasOwnProperty(currentValue)) {
            accumulator[currentValue] = list[currentValue];
        }
    }, {});
};
export const getReportById = (store, id) => {
    const list = getReportList(store);
    if (list.hasOwnProperty(id)) {
        return list[id];
    }
    return null;
};

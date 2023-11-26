export const paramsCreator = (page?: string | null, per_page?: string | null, q?: string | null) => {

    const newPage= (page && Number(page)) ? 'page=' + String(Number(page)) : undefined;
    const newPerPage = (per_page && Number(per_page)) ? 'per_page=' + String(Number(per_page)) : undefined;
    const newQ = q ? 'q=' + q : undefined;

    const newParams = [];
    if (newPage) newParams.push(newPage);
    if (newPerPage) newParams.push(newPerPage);
    if (newQ) newParams.push(newQ);

    return newParams.length ? '?' + newParams.join('&') : '';

}

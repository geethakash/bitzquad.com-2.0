function Parse(req) {
    const query = { options: {} };
    if (req.query.limit) {
        query.options.limit = Number.parseInt(req.query.limit.toString());
    }
    if (req.query.page && req.query.limit) {
        query.options.skip = Number.parseInt(req.query.page.toString()) * Number.parseInt(req.query.limit.toString());
    }

    if (req.query.sort) {
        query.options.sort = req.query.sort.toString();
    }

    if (req.query.select) {
        query.select = JSON.parse(req.query.select.toString());
    } else query.select = {};

    if (req.query.search) {
        query.search = JSON.parse(req.query.search.toString());
    } else query.search = {};

    return query;
}

function Build(search, select = {}, limit = 10, page = 0, sort = "-createdAt") {
    let strQuery = "";
    if (search) {
        strQuery += `search=${JSON.stringify(search)}&`;
    }
    if (select) {
        strQuery += `select=${JSON.stringify(select)}&`;
    }
    if (sort) {
        strQuery += `sort=${sort}&`;
    }
    if (limit) {
        strQuery += `limit=${limit}&`;
    }
    if (page) {
        strQuery += `page=${page}&`;
    }
    return strQuery;
}

export default { Parse, Build };

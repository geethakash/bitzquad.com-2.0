function Parse(req) {
  const query = {};
  if (req.query.limit) {
    query.limit = req.query.limit;
  }
  if (req.query.page && req.query.limit) {
    query.skip = JSON.parse(req.query.page * req.query.limit);
  }

  if (req.query.sort) {
    query.sort = req.query.sort;
  }

  if (req.query.select) {
    query.select = JSON.parse(req.query.select);
  } else query.select = {};

  if (req.query.search) {
    query.search = JSON.parse(req.query.search);
  } else query.search = {};

  return query;
}

function Build(search, select={}, limit = 10, page = 0, sort = "-createdAt") {
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

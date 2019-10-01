const store = new SteinStore(key);

const searchTable = (query, callback) => {
  store
    .read(sheet, {
      authentication: { username: "ming", password: "ming" },
      search: query
    })
    .then((data) => {
      callback(data);
    });
}

const updateTable = (condition, data, success, error) => {
  store
    .edit(sheet, {
      search: condition,
      set: data
    })
    .then(res => {
      if (isEmpty(res)) {
        error();
      } else {
        success();
      }
    });
}
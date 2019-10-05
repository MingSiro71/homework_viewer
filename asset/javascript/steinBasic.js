const store = new SteinStore(key);

const error = () => {
  alert("apiエラーが発生しました。");
}

const searchTable = (query, callback) => {
  store
    .read(sheet, {
      authentication: { username: "ming", password: "ming" },
      search: query
    })
    .then((data) => {
      if(!data){
        alert("api not working!");
      }
      callback(data);
    });
}

const updateTable = (condition, data, success, error) => {
  store
    .edit(sheet, {
      authentication: { username: "ming", password: "ming" },
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
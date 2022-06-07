const productsModel = require("../model/productsModel");

async function read(filter = {}) {
  const list = await productsModel.find({ ...filter, isActive: true });
  console.log(list);
  return list;
}
async function create(body) {
  await productsModel.create(body);
  return "success";
}
async function put(id, newData) {
  const res = await productsModel.findByIdAndUpdate(id, newData);
  console.log(res);
  return "success"
}

async function del(id) {
  const res = await productsModel.findByIdAndUpdate(id, { isActive: false });
  console.log(res);
  return "success"
}

module.exports = { read, create, put, del };

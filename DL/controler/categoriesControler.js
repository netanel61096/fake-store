const categoriesModel=require("../model/categoriesModel")

async function read(filter={}){
    const list = await categoriesModel.find({ ...filter, isActive: true });
    return list
}
async function create(body){
    await categoriesModel.create(body)
    return "success"
}
async function put(id, newData) {
    const res = await categoriesModel.findByIdAndUpdate(id, newData);
    console.log(res);
    return "success"
  }
  
  async function del(id) {
    const res = await categoriesModel.findByIdAndUpdate(id, { isActive: false });
    console.log(res);
    return "success"
  }
categoriesModel.insertMany("ojdj")
  module.exports={read,create,put,del}

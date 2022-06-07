const DL=require("../DL/controler/categoriesControler")

async function read(filter={}){
  const list=await DL.read(filter)
  console.log(list);
  return list
}

async function create(body){
try {
  const list=await read()
  if(list.find(p=>p.id==body.id))throw "this id all ready exist"
  else{
  const res=await DL.create(body)
  console.log(res);
  return res}
} catch (error) {
  console.log(error.message||error);
}
}

async function put(id,newData){
  try {
    const list=await read()
    if(!id)throw "not enter id"
    if(!newData)throw "not enter newdata"
    if(!list.find(p=>p._id==id))throw "this category with this id not exist"
    else{
    const res=await DL.put(id,newData)
    console.log(res);
    return res}
  } catch (error) {
  console.log(error.message||error);
  }
}
async function del(id){
  const list =await read()
  if(!id){
    throw "please enter id"
  }
  else{
    const user =list.findIndex(u=>u._id==id)
    if(user!=-1){
      const res=await DL.del(id)
      console.log(res);
      return res
    }
    else throw `this category with this id: ${id} not defiend`
  }
}
 

  module.exports= {read,create,put,del} 
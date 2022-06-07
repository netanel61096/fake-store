const DL=require("../DL/controler/productsControler")

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
    if(typeof(body.title)!="string")throw "title must to be a string"
    if(typeof(body.description)!="string")throw "description must to be a string"
    if(typeof(body.category)!="string")throw "catgory must to be a string"
   if (typeof(body.image)!="string")throw "image must to be a string"
   if(typeof(body.rating)!="object")throw "this key must to be obeject"
    if(typeof(body.price)!="number")throw "this price must to be number"
    if(typeof(body.id)!="number")throw "this id to be number"
    if(typeof(body.rating.rate)!="number")throw "this rate must to be number"
    if(typeof(body.rating.count)!="number")throw "this count to be number"
  }
  const res=await DL.create(body)
  console.log(res);
  return res
} catch (error) {
  console.log(error.message||error);
}
}

async function put(id,newData){
  try {
    const list=await read()
    if(!id)throw "not enter id"
    if(!newData)throw "not enter newdata"
    if(!list.find(p=>p._id==id))throw "this product with this id not exist"
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
    else throw `this product with this id: ${id} not defiend`
  }
}
 

  module.exports= {read,create,put,del} 






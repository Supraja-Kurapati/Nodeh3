const authforAll=(req,res,next)=>{
console.log("This middleware get called to all Routes");
next()
}

const specificAuth=(req,res,next)=>{
    console.log("This middleWare get called to specific route");
    next()
}

module.exports= {authforAll,specificAuth}
const login=(req,res)=>{
res.send ({
message:"Successfully Login"
})
}

const register=(req,res)=>{
    res.send ({
    message:"Successfully Registered"
    })
    }

const about=(req,res)=>{
        res.send ({
        message:"About page"
        })
        }

const contact=(req,res)=>{
            res.send ({
            message:"Contact page"
            })
            }

module.exports={login,register,about,contact}            
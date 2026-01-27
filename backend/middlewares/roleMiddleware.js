const isMember = (req,res,next) => {
    let role = req.user.role
    if(role !== "member"){
        return res.status(403).json({
            success:false,
            message: "you don't have access of Member Panel"
        })
    }
    next()
}

const isTrainer = (req,res,next) => {
    let role = req.user.role
    if(role !== "trainer"){
        return res.status(403).json({
            success:false,
            message: "you don't have access of Trainner Panel"
        })
    }
    next()
}

const isAdmin = (req,res,next) => {
    let role = req.user.role
    if(role !== "admin"){
        return res.status(403).json({
            success:false,
            message: "you don't have access of Admin Panel"
        })
    }
    next()
}

module.exports = { isMember, isTrainer, isAdmin }
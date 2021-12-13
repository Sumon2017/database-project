const logout = async (req,res) => {
    res.clearCookie('cse334dbproject');
    res.json({
        msg : 'logged out'
    });
};

module.exports=logout;
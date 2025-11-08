/* GET HOMEPAGE*/
const index = (req, res) =>{
    res.render('index',{title : "Travlr Getaways"});
};

MediaSourceHandle.exports = {
    index
}
const Stadium = require('../models/stadium');

function stadiumsIndex(req, res){
  Stadium
    .find()
    .populate('user')
    .exec()
    .then(stadiums => {
      res.render('stadiums/index', {stadiums});
    });
}

function stadiumsShow(req, res){
  Stadium
    .findById(req.params.id)
    .populate('comments.user')
    .exec()
    .then(stadiums => res.render('stadiums/show', {stadiums}));
}

function stadiumsNew(req, res){
  res.render('stadiums/new', {error: null});
}

function stadiumsCreate(req, res) {
  console.log(req.body);
  req.body.user = req.currentUser;

  Stadium
    .create(req.body)
    .then(() => res.redirect('/stadiums'))
    .catch((error) => {
      if (error.name === 'ValidationError'){
        res.badRequest('/stadiums/new', error.toString());
      }
    });
}

function stadiumsEdit(req, res) {
  Stadium
    .findById(req.params.id)
    //.populate('photos')
    .exec()
    .then(stadiums => res.render('stadiums/edit', {stadiums}));
}

function stadiumsUpdate(req, res){
  Stadium
    .findById(req.params.id)
    .exec()
    .then(stadiums => {
      stadiums =Object.assign(stadiums, req.body);
      return stadiums.save();
    })
    .then(stadiums => res.redirect(`/stadiums/${stadiums._id}`));
}

function stadiumsDelete (req, res) {
  Stadium
    .findById(req.params.id)
    .exec()
    .then(stadiums => stadiums.remove())
    .then(() => res.redirect('/stadiums'));
}

function commentsCreate(req, res) {
  // adding the current user to the comment form data
  req.body.user = req.currentUser;
  // finding the photo that the comment must be added to
  Stadium
    .findById(req.params.id)
    .exec()
    .then(stadium => {
      // creating a new comment with the form data.
      // pushing the comment into the array of comments for the photo
      stadium.comments.push(req.body);

      // saving the photo
      return stadium.save();
    })
    .then(stadium => {
      // redirecting back to the photos show view
      res.redirect(`/stadiums/${stadium._id}`);
    })
    .catch(err => console.log(err));
}

function commentsDelete(req, res) {
  // finding the photo that the comment must be added to
  Stadium
    .findById(req.params.id)
    .exec()
    .then(stadium => {
      console.log(stadium);
      // finding comment to delete by it's id
      const comment = stadium.comments.id(req.params.commentId);
      // deleting that comment
      comment.remove();

      // saving the photo
      return stadium.save();
    })
    .then(stadium => {
      // redirecting back to the photos show view
      res.redirect(`/stadiums/${stadium._id}`);
    })
    .catch(err => console.log(err));
}


module.exports = {
  index: stadiumsIndex,
  show: stadiumsShow,
  delete: stadiumsDelete,
  new: stadiumsNew,
  create: stadiumsCreate,
  edit: stadiumsEdit,
  update: stadiumsUpdate,
  createComment: commentsCreate,
  deleteComment: commentsDelete
};

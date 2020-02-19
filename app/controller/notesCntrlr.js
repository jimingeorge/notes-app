const Note = require("../model/Note");
const pick = require("lodash/pick");

module.exports.create = (req, res) => {
  const body = pick(req.body, ["title", "body", "user","category","color"]);
  const note = new Note(body);
  note.user = req.user._id //as userId cannot be sent via front end, it must be sent by default backend
  note.save()
    .then(note => res.json(note))
    .catch(err => res.json(err));
};

module.exports.list = (req, res) => {
  Note.find({ user: req.user }).populate('category',['name'])
    .then(data => {
      if (data) {
        res.json(data);
      }
      res.json({});
    })
    .catch(err => res.json(err));
};

module.exports.show = (req, res) => {
  const id = req.params.id;

  Note.findOne({ _id: id }).populate('category',['name'])
    .then(data => res.send(data))
    .catch(err => res.send(err));
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Note.findOneAndUpdate({ _id: id, user: req.user._id }, body, { new: true })
    .then(data => res.send(data))
    .catch(err => res.send(err));
};

module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Note.findOneAndDelete({ _id: id, user: req.user._id })
    .then(data => res.send(data))
    .catch(err => res.send(err));
};

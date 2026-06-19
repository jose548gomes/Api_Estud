const Subject = require('../models/Subject');

exports.getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find({ user: req.userId }).sort('-createdAt');
    res.json(subjects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createSubject = async (req, res) => {
  try {
    const subject = await Subject.create({ ...req.body, user: req.userId });
    res.status(201).json(subject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSubject = async (req, res) => {
  try {
    const subject = await Subject.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      req.body,
      { new: true }
    );
    if (!subject) return res.status(404).json({ error: 'Disciplina não encontrada' });
    res.json(subject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteSubject = async (req, res) => {
  try {
    const subject = await Subject.findOneAndDelete({ _id: req.params.id, user: req.userId });
    if (!subject) return res.status(404).json({ error: 'Disciplina não encontrada' });
    res.json({ message: 'Disciplina removida' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
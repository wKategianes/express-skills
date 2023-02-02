const skills = [
  {id: 125223, skill: 'Javascript', done: true},
  {id: 127904, skill: 'C++', done: false},
  {id: 139608, skill: 'Python', done: false}
];

module.exports = {
  getAll,
  getOne
};

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function getAll() {
  return skills;
}
module.exports = {


  create: (req, res, next) => {
    const dbInstance = req.app.get('db');
    let {author, title, issue} = req.body
    dbInstance.create_comic([author, title, issue])
    .then((comic) => res.status(200).send(comic))
    .catch((err) => res.status(500).send(err))
},

getAll:(req, res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance.read_comics()
    .then( comics => res.status(200).send(comics))
    .catch((err)=> res.status(500).send(err))
},
update: (req, res, next) => {
    const dbInstance = req.app.get('db');
    let {id} = req.params;
    dbInstance.update_comic([Number(id),req.query.description])
    .then((comic) => res.status(200).send(comic))
    .catch((err)=> res.status(500).send(err))
},
delete:(req, res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance.delete_comic([req.params.id])
    .then(()=> res.status(200).send())
    .catch((err) => res.status(500).send(err))
}
}
// COMP 76C 76D 76E 76F
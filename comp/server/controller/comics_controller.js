module.exports = {


  create: (req, res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance.create_comic()
    .then(() => res.status(200).send())
    .catch(() => res.status(500).send())
},

getAll:(req, res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance.read_comics()
    .then( comics => res.status(200).send())
    .catch(()=> res.status(500).send())
},
update: (req, res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance.update_comics()
    .then(() => res.status(200).send())
    .catch(()=> res.status(500).send())
},
delete:(req, res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance.delete_comics()
    .then(()=> res.status(200).send())
    .catch(() => res.status(500).send())
}
}

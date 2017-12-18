modules.exports = {
    updateComic: (req, res, next) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.update_comic()
          .then(() => res.status(200).send())
          .catch((err) => res.status(500).send(err));
      },
      deleteComic: (req, res, next) => {
          const dbInstance = req.app.get('db');
          
          dbInstance.delete_comic()
          .then(() => res.status(200).send('deleted'))
      .catch((err) => res.status(500).send(err));
      },
      addComic: (req, res, next) =>{
        const dbInstance = req.app.get('db');
        dbInstance.create_comic()
        .then((product) => res.status(200).send())
      .catch((err) =>res.status(500).send());
      },
      showCart: (req, res, next) =>{
        const dbInstance = req.app.get('db');
        dbInstance.show_comic()
        .then((cart) => res.status(200).send(cart))
        .catch((err) => res.status(500).send());
      }
}
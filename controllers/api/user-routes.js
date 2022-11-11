const router = require('express').Router();
const { User, Campaign } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      // add separate modals connected to User if needed
      // include: [{ model:  }],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {

    });

    if (!userData) {
      res.status(404).json({ message: 'No User found with that id!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// TODO: need to fill out according to User parameters
router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// TODO: need to fill out according to User parameters
router.put('/:id', (req, res) => {
    User.update(
      {
        username: req.body.username,
        password: req.body.password,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((updatedUser) => {
        res.json(updatedUser);
      })
      .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedUser) => {
      res.json(deletedUser);
    })
    .catch((err) => res.json(err));
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      res
        .status(400)
        // TODO: add in username AND password
        .json({ message: 'Incorrect username, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        // TODO: add in username AND password
        .json({ message: 'Incorrect password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ username: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
const router = require('express').Router();
const { Encounter } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const encounterData = await Encounter.findAll({
      // add separate modals connected to Encounter if needed
      // include: [{ model:  }],
    });
    res.status(200).json(encounterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const encounterData = await Encounter.findByPk(req.params.id, {

    });

    if (!encounterData) {
      res.status(404).json({ message: 'No Encounter found with that id!' });
      return;
    }

    res.status(200).json(encounterData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', async (req, res) => {
  try {
    const encounterData = await Encounter.create({
      number: req.body.number,
    });
    res.status(200).json(encounterData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', (req, res) => {
    Encounter.update(
      {
        number: req.body.number,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((updatedEncounter) => {
        res.json(updatedEncounter);
      })
      .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  Encounter.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedEncounter) => {
      res.json(deletedEncounter);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
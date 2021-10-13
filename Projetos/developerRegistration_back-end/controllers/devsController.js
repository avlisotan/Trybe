const { Router } = require('express');

const devsController = Router();

const { Dev } = require('../models');

devsController.get('/developer', async (req, res) => {
  const devs = await Dev.findAll();
  res.status(200).json(devs);
});

devsController.post('/developer', async (req, res) => {
  const { name, phone, cell_phone, address, zip_code } = req.body;
  const newDev = await Dev.create({ name, phone, cell_phone, address, zip_code });
  res.status(200).json(newDev);
});

devsController.get('/developer/:id', async (req, res) => {
  const dev = await Dev.findByPk(req.params.id);
  if (!dev) return res.status(404).json({ message: 'Dev not found!'});
  res.status(200).json(dev);
});

devsController.put('/developer/:id', async (req, res) => {
  const { name, phone, cell_phone, address, zip_code } = req.body;
  Dev.update(
    { name, phone, cell_phone, address, zip_code },
    { where: { id: req.params.id }}
  );
  res.status(204).json({ message: 'Dev updated successfully.' });
});

devsController.delete('/developer/:id', async (req, res) => {
  Dev.destroy(
    { where: { id: req.params.id }}
  );
  res.status(200).json({ message: 'Dev successfully deleted.' });
});

module.exports = devsController;
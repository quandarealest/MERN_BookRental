const RentalsService = require('./rentals.service');

class RentalsController {
  constructor(){
    this.service = new RentalsService();
    this.list = this.list.bind(this);
    this.get = this.get.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.create = this.create.bind(this);
    this.load = this.load.bind(this);
  }

  async load(req, res, next) {
    const { id: rentalId } = req.params;
    const rental = await this.service.getOne(rentalId);
    req.rental = rental;
    return next();
  }

  async list(req, res) {
    const rentalList = await this.service.getList();
    return res.json(rentalList);
  }

  get(req, res) {
    const { rental } = req;
    return res.json(rental);
  }

  async update(req, res) {
    const { id: rentalId } = req.params;
    const newRental = req.body;
    await this.service.update(rentalId, newRental);
    return res.json({ message: 'success' })
  }

  async delete(req, res) {
    const { params } = req;
    const { id } = params;
    await this.service.delete(id);
    return res.json({ message: 'success' })
  }

  async create(req, res) {
    const rentalInfo = req.body;
    const newRental = await this.service.create(rentalInfo);
    return res.json(newRental)
  }
}

module.exports = RentalsController;
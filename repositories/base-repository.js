// const _ = require('lodash');

class BaseRepository {
  constructor(entity, transaction) {
    this._entity = entity;
    this.transaction = transaction;
  }

  bulkAdd(models) {
    // const x = _.omit(model, _.isUndefined); // TODO: implement later
    return this._entity.bulkCreate(models);
  }

  truncate() {
    return this._entity.destroy({
      where: {},
      truncate: true,
      cascade: false,
    });
  }
  add(model) {
    return this._entity.create(model, { transaction: this.transaction });
  }

  count(condition) {
    return this._entity.count({ where: condition });
  }

  findBy(condition, offset = 0, limit = 9999) {
    return this._entity.findAll({
      where: condition,
      offset,
      limit,
      raw: true,
    });
  }

  findOne(condition) {
    return this._entity.findOne({
      where: condition,
    });
  }
  findAll(condition) {
    return this._entity.findAll({
      where: condition,
    });
  }

  findById(id) {
    return this._entity.findOne({
      where: { id },
    });
  }

  updateByOne(model, condition) {
    return this._entity
      .update(model, {
        where: condition,
        transaction: this.transaction,
      })
      .then((rs) => {
        if (rs) {
          return this.findOne(condition);
        }
      });
  }
  update(model) {
    return this._entity
      .update(model, {
        where: {
          id: model.id,
        },
        transaction: this.transaction,
      })
      .then((rs) => {
        if (rs) {
          return this.findById(model.id);
        }
      });
  }

  delete(id) {
    return this._entity
      .destroy({
        where: { id },
        transaction: this.transaction,
      })
      .then((rs) => {
        if (rs) {
          return id;
        }
      });
  }

  deleteBy(condition) {
    return this._entity.destroy({
      where: condition,
      transaction: this.transaction,
    });
  }
}

module.exports = BaseRepository;

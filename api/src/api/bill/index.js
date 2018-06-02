import express from 'express';
import mongooseRestFulCrud from 'mongoose-restful-crud';
import Bill from './../../schemas/Bill';

const router = express.Router();

const options = {
  select: {},
  filter: {},
  sort: {},
  page: 1,
  perPage: 20,
  population: null
}

const crud = mongooseRestFulCrud(Bill, options);

router.get('/', crud.get);
router.get('/:id', crud.getOne);
router.post('/', crud.post);
router.put('/:id', crud.put);
router.delete('/:id', crud.delete);

module.exports = router;

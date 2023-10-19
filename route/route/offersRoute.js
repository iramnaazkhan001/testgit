const express = require('express');
const offersRouter = express.Router();
const app = express();
app.use(express.json());


const {createOffers,viewOffers,findOffers,updateOffers,updateStatus} = require('../../controller/offers');

offersRouter.post('/api/admin/offers/add', createOffers);
offersRouter.post('/api/admin/offers/view',viewOffers);
offersRouter.get('/api/admin/offers/:percentage_discount', findOffers);
offersRouter.patch('/api/admin/offers/updateoffers/:offer_id', updateOffers);
offersRouter.patch('/api/admin/offers/updatestatus/:offer_id', updateStatus);
module.exports = offersRouter;
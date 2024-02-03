const express = require('express');
const router = express.Router();
const {crudControllers} = require('../controllers');

router.post('/persons',crudControllers.createPerson);
// done

router.post('/orders',crudControllers.createOrder);
// done - >successfully returning the desired ouput 

router.post('/orders/items',crudControllers.addOrderItems);
// not returning the desire output 


router.get('/orders',crudControllers.getAllOrders);
// getting the order API

router.get('/orders/:orderId',crudControllers.getAnOrder);


router.put('/orders/:orderId',crudControllers.updateOrder);



module.exports = router;


// post person data for  
// {
//     "party_id": "P1004",
//     "first_name": "Jane",
//     "middle_name": "M",
//     "last_name": "Doe",
//     "gender": "F",
//     "birth_date": "1992-07-18",
//     "marital_status_enum_id": "SINGLE",
//     "employment_status_enum_id": "EMPLOYED",
//     "occupation": "Data Analyst"
//   }

// post order data 
// {
//     "order_name": "Order123",
//     "placed_date": "2023-01-10T08:00:00",
//     "approved_date": "2023-01-12T10:30:00",
//     "status_id": "OrderPlaced",
//     "party_id": "P1001",
//     "currency_uom_id": "USD",
//     "product_store_id": "Store123",
//     "sales_channel_enum_id": "ONLINE",
//     "grand_total": 150.00,
//     "completed_date": "2023-01-15T12:00:00"
//   }
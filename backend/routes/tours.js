import express from 'express';
import { createTour,updateTour,deleteTour, getAllTour, getSingleTour } from '../controllers/tourController.js';


const router=express.Router()


//create new tour
router.post('/',createTour);
//update new tour
router.put('/:id',updateTour);
//delete new tour
router.delete('/:id',deleteTour);
//create new tour
router.get('/:id',getSingleTour);
//create new tour
router.get('/',getAllTour);

export default router;

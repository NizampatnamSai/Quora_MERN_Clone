 import { configureStore } from "@reduxjs/toolkit";
import userReduce from '../features/Userslice'

 export  default configureStore({
     reducer:{
         user:userReduce
     }
 })
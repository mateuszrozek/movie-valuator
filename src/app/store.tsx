import {configureStore} from '@reduxjs/toolkit';
import formReducer from '../../src/feature/form/formSlice';
import configReducer from "../feature/config/configSlice";


export default configureStore({
    reducer: {
        form: formReducer,
        config: configReducer
    }
});
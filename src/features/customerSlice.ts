import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomerState {
  value: Customer[];
}

interface AddCustomerFoodPayload {
    food: string;
    id: string
}

interface Customer {
    id: string;
    name: string;
    food: string[]
}

const initialState: CustomerState = {
  value: [],
};

export const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
        state.value.push(action.payload)
    },
    addCustomerFood: (state, action: PayloadAction<AddCustomerFoodPayload>) =>{
        state.value.forEach((customer => {
            if(customer.id === action.payload.id){
                customer.food.push(action.payload.food)
            }
        }))
    }
  },
});

export const { addCustomer, addCustomerFood } = customerSlice.actions;
export default customerSlice.reducer;

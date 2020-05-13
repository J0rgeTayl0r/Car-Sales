const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 ford mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
    },
    additionalFeatures: [
        { id: 0, name: 'v-6 engine package', price: 1500 },
        { id: 1, name: 'Racing detail package', price: 1500 },
        { id: 2, name: 'Premium sound system', price: 500 },
        {id: 3 , name: 'Rear spoiler', price: 250}
  ]
};
export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                additionalPrice: state.additionalPrice + action.payload.price,
                car: {
                    ...state.car,
                    features: [
                        ...state.car.features, action.payload
                    ]
                }
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                additionalPrice: state.additionalPrice - action.payload.price,
                car: {
                    ...state.car,
                    features: state.car.features.filter(feature=> feature.id !== action.payload.id)
                }
            }
        default:
            return state;
    }
}
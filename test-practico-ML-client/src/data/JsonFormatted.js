

export const JsonFormatted  = {
    
    
    author:{
        name: String,
        lastname: String,
    },
    categories: [],
    items: [
        {
            id: String,
            title: String,
            price: {
                currency: String,
                amount: Number,
                decimals: Number,
            },
            picture: String,
            condition: String,
            free_shipping: Boolean,
            loc: String
        }
    ]


    
};


export const finalData = {
    author: {
        name: 'Eduardo',
        lastname: 'Custiel'
    },
    title: String,
    price: {
        currency: String,
        amount: Number
    },
    picture: String,
    condition: String,
    free_shipping: Boolean,
    sold_quantity: String,
    description: String
}


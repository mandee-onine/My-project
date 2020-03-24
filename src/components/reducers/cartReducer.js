
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING } from '../actions/action-types/cart-actions'
// import axios from 'axios';

const initState = {
    items: [
        {
            id: 1,
            title: "Besan 555 5 Kgs HDPE",
            img: "images/Flourpage/flour1.jpg",
            price: 150.00,
            MRP: 190,
            company: "GOOGLE",
            info:
                "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
            inCart: false,
            count: 0,
            total: 0
        },
        {
            id: 2,
            title: "Besan 555 10 Kgs HDPE",
            img: "images/Flourpage/flour2.jpg",
            price: 16,
            MRP: 190,
            company: "SAMSUNG",
            info:
                "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
            inCart: false,
            count: 0,
            total: 0
        },
        {
            id: 3,
            title: "Besan 555 25 Kgs HDPE Bag",
            img: "images/Flourpage/flour2.jpg",
            price: 8,
            MRP: 190,
            company: "htc",
            info:
                "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
            inCart: false,
            count: 0,
            total: 0
        },
        {
            id: 4,
            title: "Besan 555 75 Kgs Gunny Bag",
            img: "images/Flourpage/flour4.jpg",
            price: 18,
            MRP: 190,
            company: "htc",
            info:
                "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
            inCart: false,
            count: 0,
            total: 0
        },
        {
            id: 5,
            title: "Jeyyam Besan 5 Kgs HDPE",
            img: "images/Flourpage/flour5.jpg",
            price: 24,
            MRP: 190,
            company: "htc",
            info:
                "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
            inCart: false,
            count: 0,
            total: 0
        },
        {
            id: 6,
            title: "Jeyyam Besan 10 Kgs HDPE",
            img: "images/Flourpage/flour6.jpg",
            price: 17,
            MRP: 190,
            company: "apple",
            info:
                "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
            inCart: false,
            count: 0,
            total: 0
        },
        {
            id: 7,
            title: "Jeyyam Besan 25 Kgs HDPE",
            img: "images/Flourpage/flour7.jpg",
            price: 30,
            MRP: 190,
            company: "apple",
            info:
                "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
            inCart: false,
            count: 0,
            total: 0
        },
        {
            id: 8,
            title: "Jeyyam Besan 75 Kgs Gunny Bag",
            img: "images/Flourpage/flour8.jpg",
            price: 2,
            MRP: 190,
            company: "apple",
            info:
                "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
            inCart: false,
            count: 0,
            total: 0
        }
    ],

    Pulses: [
        {
            "id": 1,
            "para": "pulses",
            img: "/images/pulses/pulses1.jpg",
            "title": "Dried Chickpeas Dal 555 5 Kgs HDPE",
            "price": "150.00",
            "link": "/Driedchickpeas",
            inCart: false,
            count: 0,
            total: 0
        },
        {
            "id": 2,
            "para": "pulses",
            img: "/images/pulses/pulses2.jpg",
            "title": "Dried Chickpeas Dal 555 5 Kgs HDPE",
            "price": "150.00",
            "link": "/Driedchickpeas",
            inCart: false,
            count: 0,
            total: 0
        },
        {
            "id": 3,
            "para": "pulses",
            img: "/images/pulses/pulses3.jpg",
            "title": "Dried Chickpeas Dal 555 5 Kgs HDPE",
            "price": "150.00",
            "link": "/Driedchickpeas",
            inCart: false,
            count: 0,
            total: 0
        },
        {
            "id": 4,
            "para": "pulses",
            img: "/images/pulses/pulses4.jpg",
            "title": "Dried Chickpeas Dal 555 5 Kgs HDPE",
            "price": "150.00",
            "link": "/Driedchickpeas",
            inCart: false,
            count: 0,
            total: 0
        },
        {
            "id": 5,
            "para": "pulses",
            img: "/images/pulses/pulses5.jpg",
            "title": "Dried Chickpeas Dal 555 5 Kgs HDPE",
            "price": "150.00",
            "link": "/Driedchickpeas",
            inCart: false,
            count: 0,
            total: 0
        },
        {
            "id": 6,
            "para": "pulses",
            img: "/images/pulses/pulses6.jpg",
            "title": "Dried Chickpeas Dal 555 5 Kgs HDPE",
            "price": "150.00",
            "link": "/Driedchickpeas",
            inCart: false,
            count: 0,
            total: 0
        },
        {
            "id": 7,
            "para": "pulses",
            img: "/images/pulses/pulses7.jpg",
            "title": "Dried Chickpeas Dal 555 5 Kgs HDPE",
            "price": "150.00",
            "link": "/Driedchickpeas",
            inCart: false,
            count: 0,
            total: 0
        },
        {
            "id": 8,
            "para": "pulses",
            img: "/images/pulses/pulses8.jpg",
            "title": "Dried Chickpeas Dal 555 5 Kgs HDPE",
            "price": "150.00",
            "link": "/Driedchickpeas",
            inCart: false,
            count: 0,
            total: 0
        }
    ],

    Cereals: [
        {
            "id": 1,
            img: "/images/Cereals/Cereals1.jpg",
            "para": "Cereals",
            "title": "Millets Standard Barnyard (Kuthiravail) 10 Kgs(500 Gms X 20) HDPE Pack",
            "price": "150.00",
            "link": "/Milletsstandardbarnyad10kg",
            inCart: false,
            count: 0,
            total: 0
        },
        {
            "id": 2,
            img: "/images/Cereals/Cereals2.jpg",
            "para": "Cereals",
            "title": "Millets Standard Barnyard (Kuthiravail) 25 Kgs HDPE",
            "price": "150.00",
            "link": "/Milletstandardbarnyad25kg",
            inCart: false,
            count: 0,
            total: 0
        },
        {
            "id": 3,
            img: "/images/Cereals/Cereals3.jpg",
            "para": "Cereals",
            "title": "Plain Sugar Standard 30 Kgs(5 Kgs X 6) HDPE Pack",
            "price": "150.00",
            "link": "/Milletstandardbarnyad1kg",
            inCart: false,
            count: 0,
            total: 0
        },
        {
            "id": 4,
            img: "/images/Cereals/Cereals4.jpg",
            "para": "Cereals",
            "title": "Plain Sugar Standard 30 Kgs(10 Kgs X 3) HDPE Pack",
            "price": "150.00",
            "link": "/Milletsstandardfinger10kg",
            inCart: false,
            count: 0,
            total: 0
        },
        {
            "id": 5,
            img: "/images/Cereals/Cereals5.jpg",
            "para": "Cereals",
            "title": "Plain Sugar Standard 25 Kgs HDPE Bag",
            "price": "150.00",
            "link": "/Milletstandardfinger25kg",
            inCart: false,
            count: 0,
            total: 0
        },
        {
            "id": 6,
            img: "/images/Cereals/Cereals6.jpg",
            "para": "Cereals",
            "title": "Plain Sugar Standard 5 Kgs HDPE",
            "price": "150.00",
            "link": "Milletstandardfinger1kg",
            inCart: false,
            count: 0,
            total: 0
        },
        {
            "id": 7,
            img: "/images/Cereals/Cereals7.jpg",
            "para": "Cereals",
            "title": "Plain Sugar Standard 10 Kgs HDPE",
            "price": "150.00",
            "link": "/Milletstandardfoxtail10kg",
            inCart: false,
            count: 0,
            total: 0
        },
        {
            "id": 8,
            img: "/images/Cereals/Cereals8.jpg",
            "para": "Cereals",
            "title": "Plain Sugar Standard 1 Kgs Pouch",
            "price": "150.00",
            "link": "/Milletstandardfoxtail25kg",
            inCart: false,
            count: 0,
            total: 0
        }
    ],
    addedItems: [],
    total: 0

}
const cartReducer = (state = initState, action) => {

    //INSIDE HOME COMPONENT
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price
            }
        }
        else {
            addedItem.quantity = 0;
            //calculating the total
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal - addedItem.price
            }

        }
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }

    }

    if (action.type === ADD_SHIPPING) {
        return {
            ...state,
            total: state.total + 6
        }
    }

    if (action.type === 'SUB_SHIPPING') {
        return {
            ...state,
            total: state.total - 6
        }
    }

    else {
        return state
    }

}

export default cartReducer

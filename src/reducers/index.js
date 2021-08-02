const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    total: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                loading: true
            };
        case 'MENU_FAILED':
            return {
                ...state,
                error: true
            };
        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            let newItem = {};
            const oldItem = state.items.find(i => i.id === item.id);
            if (oldItem) {
                const itemIndex = state.items.findIndex(item => item.id === id);
                newItem = {
                    ...oldItem,
                    ammount: ++oldItem.ammount
                };
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, itemIndex),
                        newItem,
                        ...state.items.slice(itemIndex + 1)
                    ],
                    total: state.total + newItem.price
                }
            }  else { newItem = {
                    title: item.title,
                    price: item.price,
                    url: item.url,
                    id: item.id,
                    ammount: 1
                      }
                    return {
                        ...state,
                        items: [
                            ...state.items,
                            newItem
                        ],
                        total: state.total + newItem.price
                    };
            };
            
        case 'ITEM_DELETE_FROM_CART':
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx);
            let oldItm = state.items[itemIndex];
            if (oldItm.ammount > 1) {
                oldItm = {
                    ...oldItm,
                    ammount: --state.items[itemIndex].ammount
                }
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, itemIndex),
                        oldItm,
                        ...state.items.slice(itemIndex + 1)
                    ],
                    total: state.total - oldItm.price
                };
            }
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ],
                total: state.total - oldItm.price
            };
        default:
            return state;
    }
}

export default reducer;
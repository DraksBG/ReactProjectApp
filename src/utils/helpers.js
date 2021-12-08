export const formatPrice = (price) => {
    const formatedPrice = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price / 100);
    return formatedPrice;
}

export const getUniqueValues = () => {}

import dayjs from "dayjs";

const today = dayjs();

const deliveryDates = [
    {   
        id: 1,
        date: today.add(1, 'day').format('dddd, MMMM DD'),
        shippingCost: 0
    },
    
    {
        id: 2,
        date: today.add(3, 'day').format('dddd, MMMM DD'),
        shippingCost: 499
    }
    ,
    {
        id: 3,
        date: today.add(7, 'day').format('dddd, MMMM DD'),
        shippingCost: 999
    }

];

export default deliveryDates
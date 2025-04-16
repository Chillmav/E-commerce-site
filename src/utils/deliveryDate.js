import dayjs from "dayjs";

const today = dayjs();

const deliveryDates = {

    tommorow: today.add(1, 'day').format('dddd, MMMM DD'),
    day3: today.add(3, 'day').format('dddd, MMMM DD'),
    day7: today.add(7, 'day').format('dddd, MMMM DD')

};

export default deliveryDates
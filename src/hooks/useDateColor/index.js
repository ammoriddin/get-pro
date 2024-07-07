import { parse } from 'date-fns';
import { uz } from 'date-fns/locale';

export const useDateColor = (date) => {
    const todayDate = new Date();
    const parsedDate = parse(date, 'dd MMMM yyyy. HH:mm', new Date(), { locale: uz });

    const hoursDifference = parsedDate.getHours() - todayDate.getHours();

    if (parsedDate < todayDate) {
        return 'text-[#DC4523]';
    } else if (hoursDifference <= 10 && hoursDifference >= 0) {
        return 'text-[#E59246]';
    } else {
        return 'text-green-500';
    }
};

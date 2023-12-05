export const formatDate = (date)=>{
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();

    return `${hours%12 === 0? '12':hours%12}:${minutes<10 ? '0'+ minutes:minutes} ${hours<12?'AM':'PM'}`;
}
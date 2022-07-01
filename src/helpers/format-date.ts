const formatDate = (date: Date = newDate()): string => {
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
}
export default formatDate;
export const DateFormatter = (timestamp: bigint): string => {
    const date = new Date(Number(timestamp));
    const year = date.getFullYear(); // YYYY
    const month = ('0' + (date.getMonth() + 1)).slice(-2);  // MM
    const day = ('0' + date.getDate()).slice(-2);  // DD
    const hours = ('0' + date.getHours()).slice(-2); // HH
    const minutes = ('0' + date.getMinutes()).slice(-2); // MM
    return day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;
};

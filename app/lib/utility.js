export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate= date.toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' });
    return formattedDate.replace(/(\b\w)/g, s => s.toUpperCase());
};
export const formatNumber = (num) => {
    if (num === null || num === undefined) {
        return ''; // o potresti voler restituire un valore predefinito come 'N/A' o '0'
    }
    return Number(num).toLocaleString('it-IT');
};
export function formatTimeToHour(dateString: string) {
    const date = new Date(dateString);

    // Lấy giờ
    const hours = date.getHours();

    return `${hours}h`;
}

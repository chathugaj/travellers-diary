const formatToReadableDate = (date) => {
    const d = new Date(date).toLocaleDateString();
    return d
}

export { formatToReadableDate }
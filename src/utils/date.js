export const formatDDMMYYYY = (oldFormat) => {
    const newDate = new Date(oldFormat)
    const option = {
        year: "numeric",
        month: "numeric",
        day:"numeric"
    }
    return newDate.toLocaleDateString("es-Es", option)
}
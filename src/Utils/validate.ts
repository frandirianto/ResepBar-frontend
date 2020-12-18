export function ValidatePhoto(photo: File | undefined) {
    if (photo !== undefined && photo.type === "image/jpeg") return true;
    return false;
}

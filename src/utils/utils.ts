export const imageToBase64 = (file: File|null): Promise<string> => {
    if (!file) {
        return Promise.resolve('');
    }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
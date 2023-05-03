export const validateURL = (url: string): Promise<{ isValid: boolean }> =>
  Promise.resolve({
    isValid: true,
  });

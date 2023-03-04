export const saveLocalStorage = <T>(key: string, value: T) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const clearLocalStorage = (key: string) => {
  window.localStorage.removeItem(key);
};

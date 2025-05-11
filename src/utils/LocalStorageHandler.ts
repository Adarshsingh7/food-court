class LocalStorageHandler {
  // Save a value (any serializable object) under a key
  static set<T>(key: string, value: T): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (err) {
      console.error(`Failed to store item in localStorage: ${err}`);
    }
  }

  // Get a value and deserialize it to type T
  static get<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : null;
    } catch (err) {
      console.error(`Failed to parse item from localStorage: ${err}`);
      return null;
    }
  }

  // Remove an item by key
  static remove(key: string): void {
    localStorage.removeItem(key);
  }

  // Clear all localStorage (optional)
  static clear(): void {
    localStorage.clear();
  }
}

// const localStorageHandler = new LocalStorageHandler();

export default LocalStorageHandler;

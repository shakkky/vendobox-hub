import { useState, useCallback } from 'react';

type SetValueFunction<T> = (value: T) => T;

function isFunc<T>(val: T | SetValueFunction<T>): val is SetValueFunction<T> {
  return typeof val === 'function';
}

export default function useLocalStorage<T>(
  key: string,
  initialValue: T,
  ttl = 0
): [T, (val: T | SetValueFunction<T>) => void] {
  const wrappedKey = `useLocalStorage:${key}`;
  const setValueToStorage = useCallback(
    valueToSet =>
      window.localStorage.setItem(wrappedKey, JSON.stringify([valueToSet])),
    [wrappedKey]
  );
  // add ttl expiry to local storage object, delete on retrieval if expired
  const today = new Date();
  const currentTime = today.getTime();
  const [value, setValue] = useState<T>(() => {
    if (Object.keys(window.localStorage).includes(wrappedKey)) {
      const storedObject = JSON.parse(
        window.localStorage.getItem(wrappedKey) ?? ''
      )[0];
      // key expired - rewrite with initial value
      if (storedObject.expiry && currentTime > storedObject.expiry) {
        setValueToStorage(initialValue);
        return initialValue;
      } else {
        return storedObject;
      }
    }
    setValueToStorage(initialValue);
    return initialValue;
  });
  const setValueWrapper = useCallback(
    (newValue: T | SetValueFunction<T>) => {
      if (!isFunc(newValue)) {
        setValueToStorage(newValue);
        return setValue(newValue);
      }
      return setValue(oldValue => {
        const generatedValue = newValue(oldValue);
        setValueToStorage(generatedValue);
        return generatedValue;
      });
    },
    [setValueToStorage]
  );
  return [value, setValueWrapper];
}

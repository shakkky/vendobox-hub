import { useState, useCallback } from 'react';

type SetValueFunction<T> = (value: T) => T;

function isFunc<T>(val: T | SetValueFunction<T>): val is SetValueFunction<T> {
  return typeof val === 'function';
}

export default function useSessionStorage<T>(
  key: string,
  initialValue: T
): [T, (val: T | SetValueFunction<T>) => void] {
  const wrappedKey = `useSessionStorage:${key}`;
  const setValueToStorage = useCallback(
    valueToSet =>
      window.sessionStorage.setItem(wrappedKey, JSON.stringify([valueToSet])),
    [wrappedKey]
  );
  const [value, setValue] = useState<T>(() => {
    if (Object.keys(window.sessionStorage).includes(wrappedKey)) {
      return JSON.parse(window.sessionStorage.getItem(wrappedKey) ?? 'null')[0];
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

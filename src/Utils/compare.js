import { get } from 'lodash';
const comparableTypes = ['string', 'number', 'function', 'boolean'];

export const compareShallowValues = (props, nextProps) => {
  if (
    typeof nextProps !== 'object' ||
    typeof props !== 'object' ||
    props === null ||
    nextProps === null
  ) {
    return props !== nextProps;
  }
  const comparableKeys = Object.keys(nextProps).filter(key =>
    comparableTypes.includes(typeof nextProps[key])
  );
  return comparableKeys.some(
    key => !Object.keys(props).includes(key) || props[key] !== nextProps[key]
  );
};

export const compareConstructor = (props, nextProps) => key =>
  get(props, key) !== get(nextProps, key);

export const compareArrayConstructor = (props, nextProps) => key =>
  props.length !== nextProps.length ||
  props.some((prop, index) => get(prop, key) !== get(nextProps[index], key));

export const compareArrayPropConstructor = (props, nextProps) => key =>
  props?.[key]?.length !== nextProps?.[key]?.length ||
  (props[key] ?? []).some((prop, index) => prop !== get(nextProps[key], index));

export const compareArrayItemShallowConstructor = (props, nextProps) => key =>
  props[key].length !== nextProps[key].length ||
  (props[key] ?? []).some((prop, index) =>
    compareShallowValues(prop ?? {}, get(nextProps[key], index, {}))
  );

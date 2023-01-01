import Skeleton from 'react-loading-skeleton';

import { isUrlImage, isAdmin } from '../../../helper';
import {
  Wrapper,
  LabelText,
  ValueText,
  PreviewImage,
  ValueLink,
} from './styles';
import React from 'react';

type Field = {
  label: string;
  field_type: string;
  field_value: string | null;
  document_type?: string;
  name: string | null;
  value: string | null;
  urlValue: string | null;
  max_size_mb?: string | null;
  required: boolean;
  isReadOnly: (editMode: boolean) => boolean;
  placeholder: string | null;
  url: (val?: Maybe<string>) => Maybe<string>;
  valueTransformer: (value: unknown) => unknown;
  readValueTransformer: <T = unknown>(value: unknown) => T;
  shouldRender: (
    modelToRender: Record<string, unknown>,
    field: Field | null,
    editMode: boolean,
    create: boolean
  ) => boolean;
  loadOptions?: () => { label: string; value: unknown }[];
  isEditUserField: boolean;
  accept?: string | null;
  autocompleteShouldReload?: boolean;
  autocompleteKey?: string;
  editable?: boolean;
  editableForMyAccount?: boolean;
  note?: string;
  maxLength?: number;
};

const formatData = (
  type: Maybe<string>,
  value: Maybe<React.ReactNode>,
  label: Maybe<string>,
  link: Maybe<string>
) => {
  const displayValue = !!value ? value : '-';
  switch (type) {
    case 'checkbox':
      return displayValue === '-' ? 'No' : 'Yes';

    case 'url':
      return (
        <a
          href={(value as string) ?? ''}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download {label}
        </a>
      );

    case 'file': {
      if (displayValue === '-') return '-';
      if (isUrlImage(displayValue as string))
        return <PreviewImage src={displayValue as string} />;
      return (
        <a
          href={(value as string) ?? ''}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download {label}
        </a>
      );
    }

    case 'percent': {
      if (displayValue === '-') return '-';
      return `${displayValue}%`;
    }

    default:
      return displayValue;
  }
};

const renderValueTemplate = ({
  displayValue,
  label,
  url,
  urlValue,
  values = [],
  urlValues = [],
  joinWith,
  secondary,
}: Partial<Pick<Field, 'label' | 'url' | 'urlValue'>> & {
  displayValue: Maybe<React.ReactNode>;
  joinWith: string;
  values?: string[];
  urlValues?: string[];
  secondary?: boolean;
}) => {
  if (isAdmin() && values && values.length > 0) {
    return (
      <>
        {values.map((val, index, arr) =>
          url && url(urlValues[index]) ? (
            <>
              <ValueLink inline href={url(urlValues[index]) ?? ''}>
                {val}
              </ValueLink>
              {index < arr.length - 1 ? joinWith : ''}
            </>
          ) : (
            <>
              <ValueText inline>{val}</ValueText>
              {index < arr.length - 1 ? joinWith : ''}
            </>
          )
        )}
      </>
    );
  }
  if (isAdmin() && url && urlValue && url(urlValue)) {
    return <ValueLink href={url(urlValue) ?? ''}>{displayValue}</ValueLink>;
  }
  if (label === 'Phone') {
    return (
      <ValueLink href={`tel:+${(displayValue as string).replace(/\s/g, '')}`}>
        {displayValue}
      </ValueLink>
    );
  }
  if (label === 'Email' || label === 'Email Address') {
    return (
      <ValueLink href={`mailto:${displayValue}`}>{displayValue}</ValueLink>
    );
  }
  return (
    <ValueText>
      {displayValue} {secondary && secondary}
    </ValueText>
  );
};

const SectionItem = ({
  field_type,
  label,
  value = '-',
  values = [],
  formComponent,
  edit = false,
  required = false,
  link,
  url = (val?: Maybe<string>) => val,
  urlValue,
  urlValues = [],
  joinWith = ', ',
  loading,
  secondary,
  minHeight,
  flexStyle,
  ...rest
}: Partial<
  Pick<Field, 'field_type' | 'label' | 'required' | 'url' | 'urlValue'>
> & {
  loading?: boolean;
  secondary?: boolean;
  minHeight?: string;
  flexStyle?: boolean;
  joinWith?: string;
  edit?: boolean;
  link?: string;
  values?: string[];
  urlValues?: string[];
  formComponent?: JSX.Element;
  value?: string | React.ReactNode;
}) => {
  const displayValue = formatData(field_type, value, label, link);

  return (
    <Wrapper
      className="section-item"
      flexStyle={flexStyle}
      minHeight={minHeight}
    >
      {label && (
        <LabelText>
          {label}
          {required && <span>*</span>}
        </LabelText>
      )}
      {edit === true && formComponent ? (
        formComponent
      ) : typeof value === 'string' ? (
        loading ? (
          <Skeleton width="30%" height={15} />
        ) : (
          renderValueTemplate({
            displayValue,
            label,
            url,
            urlValue,
            urlValues,
            values,
            joinWith,
            secondary,
            ...rest,
          })
        )
      ) : loading ? (
        <Skeleton width="30%" height={15} />
      ) : (
        displayValue
      )}
    </Wrapper>
  );
};

export default SectionItem;

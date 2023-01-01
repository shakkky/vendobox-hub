export {};

declare global {
  type Maybe<T> = null | undefined | T;
  type MaybeFields<T> = {
    [Key in keyof T]: Maybe<T[Key]>;
  };
  type ValueOf<T> = T[keyof T];
  type ArrayElement<
    ArrayType extends readonly unknown[]
  > = ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

  // this utility type is designed to create a nonnullable type from nested array type like:
  // agents: (agent | null)[] | null
  // by throwing away the null on the property and inside the array
  type NonNullArrayItem<T, Key extends keyof NonNullable<T>> = NonNullable<
    NonNullable<T>[Key]
  > extends unknown[] // this ternary here is to check whether the property is an array or not
    ? NonNullable<NonNullable<NonNullable<T>[Key]>[0]>[] // the extra here is to pull the array type out
    : NonNullable<NonNullable<T>[Key]>;

  interface Resume {
    id: number;
    original_version_id?: number;
    url: string;
    version: number;
    title: string;
    created_at: string;
    updated_at: string;
    revisions?: Resume[];
  }
}
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    ['data-component-key']?: string;
    ['data-page-component-key']?: string;
  }
}

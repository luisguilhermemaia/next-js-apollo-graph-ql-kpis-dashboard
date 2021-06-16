import { makeVar, useReactiveVar, ReactiveVar } from '@apollo/client';

type LocalStateResult<T> = [T, ReactiveVar<T>];

const selectedToggleThemeVar = makeVar<boolean>(false);

export const useToggletheme = (): LocalStateResult<boolean> => {
    const value = useReactiveVar(selectedToggleThemeVar);
    return [value, selectedToggleThemeVar];
};

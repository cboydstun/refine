import { useEffect } from "react";
import {
    useForm as useHookForm,
    UseFormProps as UseHookFormProps,
    UseFormReturn,
    FieldValues,
} from "react-hook-form";
import {
    BaseRecord,
    HttpError,
    useForm as useFormCore,
    useWarnAboutChange,
    useFormProps,
    UseFormReturnType as UseFormReturnTypeCore,
} from "@pankod/refine-core";

export type UseFormReturnType<
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables extends FieldValues = FieldValues,
    TContext extends object = {},
> = UseFormReturn<TVariables, TContext> & {
    useFormCore: UseFormReturnTypeCore<TData, TError, TVariables>;
};

export type UseFormProps<
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables extends FieldValues = FieldValues,
    TContext extends object = {},
> = {
    useFormCoreProps?: useFormProps<TData, TError, TVariables>;
} & UseHookFormProps<TVariables, TContext>;

export const useForm = <
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables extends FieldValues = FieldValues,
    TContext extends object = {},
>({
    useFormCoreProps,
    ...rest
}: UseFormProps<TData, TError, TVariables, TContext>): UseFormReturnType<
    TData,
    TError,
    TVariables,
    TContext
> => {
    const { warnWhenUnsavedChanges, setWarnWhen } = useWarnAboutChange();

    const useHookFormResult = useHookForm<TVariables, TContext>({
        ...rest,
    });

    const { watch, setValue, reset } = useHookFormResult;

    const useFormCoreResult = useFormCore<TData, TError, TVariables>({
        onMutationSuccess: () => {
            reset();
        },
        ...useFormCoreProps,
    });

    const { editId, queryResult } = useFormCoreResult;
    const { data, isFetching } = queryResult ?? {};

    useEffect(() => {
        const subscription = watch((values: any, { type }: { type?: any }) => {
            if (type === "change") {
                onValuesChange(values);
            }
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    useEffect(() => {
        Object.entries(queryResult?.data?.data || {}).forEach(
            ([key, value]) => {
                setValue(key as any, value);
            },
        );
        return () => {
            reset();
        };
    }, [data, editId, isFetching]);

    const onValuesChange = (changeValues: Record<string, any>) => {
        if (warnWhenUnsavedChanges) {
            setWarnWhen(true);
        }
        return changeValues;
    };

    return {
        ...useHookFormResult,
        useFormCore: useFormCoreResult,
    };
};

import { useEffect, useState } from 'react';

type IRequestResult<T> = {
  data: T;
  loading: boolean;
  error?: string;
};

type IRequestOptions<T> = {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
};

export function useRequest<T, V>(
  fetcher: (variables: V) => Promise<T>,
  variables?: V,
  options?: IRequestOptions<T>,
): IRequestResult<T> {
  const [data, setData] = useState<T>(undefined!);
  const [error, setError] = useState(undefined);
  const [loading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await fetcher(variables!);
      options?.onSuccess?.(res);
      setData(res);
    } catch (error) {
      options?.onError?.(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, error, loading };
}

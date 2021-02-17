import { useCallback, useEffect } from 'react';

export const useDebounceEffect = (action: () => void, delay: number, dependencies: React.DependencyList) => {
  const callback = useCallback(action, dependencies);

  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay])
};

import { useState, useCallback } from 'react';

export default function useToggle (initialValue = false): [boolean, () => void] {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(toggleValue => !toggleValue);
  }, []);

  return [value, toggle];
}

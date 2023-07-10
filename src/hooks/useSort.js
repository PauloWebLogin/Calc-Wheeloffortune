import { useState } from 'react';

export function useSort() {
  const [clicks, setSort] = useState(0);

  function ascending() {
    setSort(clicks - 1);
  }

  function descending() {
    setSort(clicks + 1);
  }

  return { clicks, ascending, descending };
}

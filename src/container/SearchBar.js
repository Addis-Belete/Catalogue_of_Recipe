/* eslint-disable react/prop-types */

import React, { useState } from 'react';

const SearchBar = () => {
  const [q, setQ] = useState('');
  return (
    <div>
      <input type="text" placeholder="Search" value={q} onChange={(e) => setQ(e.target.value)} />

    </div>
  );
};
export default SearchBar;

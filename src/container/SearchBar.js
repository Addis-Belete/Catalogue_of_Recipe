/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';

const SearchBar = () => {
  const [q, setQ] = useState('');
  const search = (rows) => rows.filter((row) => row.title.toLowerCase().indexOf(q) > -1);
  return (
    <div>
      <input type="text" placeholder="Search" value={q} onChange={(e) => setQ(e.target.value)} />

    </div>
  );
};
export default SearchBar;

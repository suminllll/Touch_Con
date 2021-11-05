import React from 'react';

const Page = ({ activePage, itemsCountPerPage }) => {
  return (
    <div>
      {activePage}
      {itemsCountPerPage}
    </div>
  );
};

export default Page;

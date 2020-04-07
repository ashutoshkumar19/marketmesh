import React, { useLayoutEffect, useState } from 'react';

function useGetWidth(selector, selectorName) {
  const [inputWidth, setInputWidth] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      if (selector === 'id') {
        setInputWidth(document.getElementById(selectorName).offsetWidth);
      } else if (selector === 'class') {
        setInputWidth(document.getElementsByClassName(selectorName)[0].offsetWidth);
      }
    }

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return inputWidth;
}

function SearchSuggestion(props) {
  const { searchText } = props;

  const inputWidth = useGetWidth('class', 'second-wrap');
  console.log(searchText);

  return (
    <div className='search-suggestions-container' style={{ width: `${inputWidth - 2}px` }}></div>
  );
}

export default SearchSuggestion;

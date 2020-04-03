import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SearchForm() {
  const [optionList, setOptionList] = useState([]);

  useEffect(() => {
    const options = [
      { value: '0', text: 'All Categories' },
      { value: '1', text: "Women's Clothing" },
      { value: '2', text: "Men's Clothing" },
      { value: '3', text: 'Cellphones & Telecommunications' },
      { value: '4', text: 'Computer & Office' },
      { value: '5', text: 'Consumer Electronics' },
      { value: '6', text: 'Jewelry & Accessories' },
      { value: '7', text: 'Home & Garden' },
      { value: '8', text: 'Luggage & Bags' },
      { value: '9', text: 'Shoes' },
      { value: '10', text: 'Mother & Kids' },
      { value: '11', text: 'Sports & Entertainment' },
      { value: '12', text: 'Beauty & Health' },
      { value: '13', text: 'Watches' },
      { value: '14', text: 'Toys & Hobbies' },
      { value: '15', text: 'Weddings & Events' },
      { value: '16', text: 'Novelty & Special Use' },
      { value: '17', text: 'Automobiles & Motorcycles' },
      { value: '18', text: 'Lights & Lighting' },
      { value: '19', text: 'Furniture' },
      { value: '20', text: 'Electronic Components & Supplies' },
      { value: '21', text: 'Education & Office Supplies' },
      { value: '22', text: 'Home Appliances' },
      { value: '23', text: 'Home Improvement' },
      { value: '24', text: 'Food' },
      { value: '25', text: 'Security & Protection' },
      { value: '26', text: 'Tools' },
      { value: '27', text: 'Hair Extensions & Wigs' },
      { value: '28', text: 'Apparel Accessories' },
      { value: '29', text: 'Underwears & Sleepwears' }
    ];
    setOptionList(options);
  }, []);

  const initialState = {
    selectedOption: '0',
    searchText: ''
  };

  const [formData, setFormData] = useState(initialState);

  const { selectedOption, searchText } = formData;

  const clearState = () => {
    setFormData({ ...initialState });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOptionChange = e => {
    const { name, value, options, selectedIndex } = e.target;
    setFormData({ ...formData, [name]: value });
    var selectedText = options[selectedIndex].text;
    console.log(selectedText);

    // Dynamically set select box width
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var font = '16px Roboto';
    context.font = font;
    var width = context.measureText(selectedText).width + 22;
    var formattedWidth = Math.ceil(width) + 'px';
    var element = document.getElementById('search-dropdown-box');
    element.style.width = formattedWidth;
    if (width > 175) {
      element.title = selectedText;
    } else {
      element.title = '';
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const text = searchText.trim();
    if (text !== '') {
      console.log(searchText);
    } else {
      clearState();
      console.log('Empty search field.....!');
    }
    // search({ text }).then(clearState());
  };

  return (
    <form className='navbar-form' onSubmit={e => onFormSubmit(e)}>
      <div className='input-field first-wrap'>
        <div className='input-select'>
          <select
            id='search-dropdown-box'
            name='selectedOption'
            value={selectedOption}
            onChange={e => handleOptionChange(e)}
          >
            {optionList.map((item, index) => (
              <option value={item.value}>{item.text}</option>
            ))}
          </select>
        </div>
      </div>

      <div className='input-field second-wrap'>
        <input
          id='search'
          type='text'
          name='searchText'
          placeholder='What are you looking for?'
          value={searchText}
          onChange={e => handleChange(e)}
        />
      </div>

      <Link className='input-field third-wrap' to={'/products'}>
        <button className='btn-search' type='submit'>
          <i className='fas fa-search'></i>
        </button>
      </Link>

      {/* <div className='input-field third-wrap'>
        <button className='btn-search' type='submit'>
          <i className='fas fa-search'></i>
        </button>
      </div> */}
    </form>
  );
}

export default SearchForm;

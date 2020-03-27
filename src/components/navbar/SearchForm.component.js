import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchForm() {
  const initialState = {
    searchText: ''
  };

  const [formData, setFormData] = useState(initialState);

  const { searchText } = formData;

  const clearState = () => {
    setFormData({ ...initialState });
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    if (searchText.trim() !== '') {
      console.log(searchText);
    } else {
      clearState();
      console.log('Empty search field.....!');
    }
    // login({ login_email, login_password }).then(clearState());
  };

  return (
    <form className='navbar-form' onSubmit={e => onFormSubmit(e)}>
      <div className='input-field first-wrap'>
        <div className='input-select'>
          <select data-trigger='' name='choices-single-default' id='search-dropdown-box'>
            <option value=''>All Categories</option>
            <option value=''>Women's Clothing</option>
            <option value=''>Men's Clothing</option>
            <option value=''>Cellphones &amp; Telecommunications</option>
            <option value=''>Computer &amp; Office</option>
            <option value=''>Consumer Electronics</option>
            <option value=''>Jewelry &amp; Accessories</option>
            <option value=''>Home &amp; Garden</option>
            <option value=''>Luggage &amp; Bags</option>
            <option value=''>Shoes</option>
            <option value=''>Mother &amp; Kids</option>
            <option value=''>Sports &amp; Entertainment</option>
            <option value=''>Beauty &amp; Health</option>
            <option value=''>Watches</option>
            <option value=''>Toys &amp; Hobbies</option>
            <option value=''>Weddings &amp; Events</option>
            <option value=''>Novelty &amp; Special Use</option>
            <option value=''>Automobiles &amp; Motorcycles</option>
            <option value=''>Lights &amp; Lighting</option>
            <option value=''>Furniture</option>
            <option value=''>Electronic Components &amp; Supplies</option>
            <option value=''>Education &amp; Office Supplies</option>
            <option value=''>Home Appliances</option>
            <option value=''>Home Improvement</option>
            <option value=''>Food</option>
            <option value=''>Security &amp; Protection</option>
            <option value=''>Tools</option>
            <option value=''>Hair Extensions &amp; Wigs</option>
            <option value=''>Apparel Accessories</option>
            <option value=''>Underwear &amp; Sleepwears</option>
            <option value=''>In All Categories</option>
            {/* <option placeholder=''>All Categories</option>
            <option>Women's Clothing</option>
            <option>Men's Clothing</option>
            <option>Mobile Phones &amp; Telecommunications</option>
            <option>Computer &amp; office</option>
            <option>Consumer Electronics</option>
            <option>Home &amp; Appliances</option>
            <option>Toys, Kids &amp; Babies</option>
            <option>Beauty &amp; Health</option>
            <option>Sports &amp; Fitness</option>
            <option>Jwellery &amp; Watches</option>
            <option>Automobiles</option>
            <option>Automobiles</option>
            <option>Automobiles</option>
            <option>Automobiles</option>
            <option>Automobiles</option>
            <option>Automobiles</option>
            <option>Automobiles</option>
            <option>Automobiles</option>
            <option>Automobiles</option>
            <option>Automobiles</option>
            <option>Automobiles</option>
            <option>Automobiles</option>
            <option>Automobiles</option>
            <option>Automobiles</option>
            <option>Automobiles</option>
            <option>Automobiles</option> */}
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

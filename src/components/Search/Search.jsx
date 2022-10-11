import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Search.module.css';
import { IconContext } from 'react-icons';
import { BiSearchAlt2 } from 'react-icons/bi';
import Notiflix from 'notiflix';

class Search extends Component {
static propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

state = {
    searchInput: '',
};

handleChange = event => {
    this.setState({ searchInput: event.target.value.toLowerCase() });
  };

handleFormSubmit = event => {
    event.preventDefault();

if (this.state.searchInput.trim() === '') {
    Notiflix.Notify.failure('Please enter a search term!');
return;
}

this.props.onSubmit(this.state.searchInput);
};

render() {
return (
<header className={css.search}>
<form onSubmit={this.handleFormSubmit} className={css.searchForm}>
<button type="submit" className={css.searchFormButton}>
<IconContext.Provider
    value={{ style: { verticalAlign: 'middle' } }}
>
<BiSearchAlt2 size={24} />
</IconContext.Provider>
<span className={css.searchFormButtonLabel}>Search</span>
</button>

<input
    className={css.searchFormInput}
    value={this.state.searchInput}
    type="text"
    autoComplete="off"
    autoFocus
    placeholder="Search images and photos"
    onChange={this.handleChange}
/>
</form>
</header>
);
}
}

export default Search;

Notiflix.Notify.init({
  distance: '7px',
  timeout: 2000,
});
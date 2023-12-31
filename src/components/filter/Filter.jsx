import PropTypes from 'prop-types';
import css from './Filter.module.css'

const Filter = ({ value, onChange }) => {
    return (
        <label >
            Find contacts by Name
            <input
                className={css.width}
                type='text'
                value={value}
                onChange={onChange} />
        </label>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Filter;
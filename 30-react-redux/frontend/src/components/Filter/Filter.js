import { useDispatch, useSelector } from 'react-redux';
import { setTitileFilter,selectTitileFilter } from '../../redux/slices/filterSlice';
import './Filter.css';
const Filter = () => {
    const dispatch = useDispatch();
    const titleFilter = useSelector(selectTitileFilter);

    const handleTitleFilterChange = (e) => {
        dispatch(setTitileFilter(e.target.value));
    };

    return (
        <div className="app-block filter">
            <div className="filter-group">
                <input type="text"
                    value={titleFilter}
                    placeholder="Filter by title..."
                    onChange={handleTitleFilterChange} />
            </div>
        </div>
    );
};

export default Filter;
import React, { useEffect } from 'react'
import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../actions/categoryAction';
import { setCategoryFilters, setPlatformFilter, setSortBy } from '../../actions/filterAction';
import { applyFilter } from '../../actions/gameActions';
import { setSearchTerm } from "../../actions/searchAction";
import CSS from './FiltersComponent.module.css';

const platformOptions = [
    { value: "all", label: "All" },
    { value: "pc", label: "PC" },
    { value: "browser", label: "Browser" }
];
const sortOptions = [
    { value: "release-date", label: "Release Date" },
    { value: "alphabetical", label: "Alphabetical" },
    { value: "relevance", label: "Relevance" }
];

const FiltersComponent = () => {

    const state = useSelector((state) => state);
    const categories = state.categories;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    console.log(state);

    const options = categories.map(cat => {
        return ({
            value: cat,
            label: cat
        })
    });

    const handleOnInputChange = (e) => {
        dispatch(setSearchTerm(e.target.value));
    }

    const handleOnChange = (values, ele) => {
        switch (ele.name) {
            case "platform": {
                const platform = values.value;
                dispatch(setPlatformFilter(platform));
                break;
            }
            case "category": {
                const cats = values.map((val) => val.value);
                dispatch(setCategoryFilters(cats));
                break;
            }
            case "sort": {
                dispatch(setSortBy(values.value));
                break;
            }
            default:
                break;
        }
        dispatch(applyFilter());
    }

    return (
        <div className={CSS.wrapper}>
            <div>
                <input
                    type="text"
                    placeholder="Search by Name..."
                    name="search"
                    onChange={handleOnInputChange}
                    className={CSS.search}
                />
            </div>
            <div className={CSS.container}>
                <div className={CSS.first}>
                    <div className={CSS.lbl}><label> Filter by Platform </label></div>
                    <Select
                        name="platform"
                        options={platformOptions}
                        className="basic-single"
                        classNamePrefix="select"
                        onChange={handleOnChange}
                    />
                </div>
                <div className={CSS.middle}>
                    <div className={CSS.lbl}><label> Filter by Category </label></div>
                    <Select
                        isMulti
                        name="category"
                        options={options}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={handleOnChange}
                    />
                </div>
                <div className={CSS.last}>
                    <div className={CSS.lbl}><label> Sort By </label></div>
                    <Select
                        name="sort"
                        options={sortOptions}
                        className="basic-single"
                        classNamePrefix="select"
                        onChange={handleOnChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default FiltersComponent;
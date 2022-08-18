import { useQuery } from '@apollo/client';
import Multiselect from 'multiselect-react-dropdown';
import React from 'react';
import { GET_ALL_CATEGORIES } from '../queries/gql-queries';

const MultiSelect = () => {
    const { data, isLoading } = useQuery(GET_ALL_CATEGORIES);
    // console.log(data);
    return (
        <div className='w-1/2 border border-gray-400 rounded my-1'>
            {
                isLoading ? "Loading" : <Multiselect
                    isObject={false}
                    onKeyPressFn={function noRefCheck() { }}
                    onRemove={function noRefCheck() { }}
                    onSearch={function noRefCheck() { }}
                    onSelect={function noRefCheck() { }}
                    options={[
                        "Electronics",
                        "Furniture",
                        "Home Appliance",
                        "Sporting Goods",
                        "Outdoor",
                        "Toys"
                    ]}
                />
            }
        </div>
    );
};

export default MultiSelect;
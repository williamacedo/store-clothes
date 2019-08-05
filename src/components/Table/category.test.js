import React from 'react';
import { shallow } from 'enzyme';
import CategoryList from './CategoryList';
import { mockCategoryFields, mockCategories } from '../../mocks';

describe('Category', () => {

    let category = shallow(<CategoryList data={mockCategories} fields={mockCategoryFields} />);

    describe('CategoryList', () => {
        it('renders the table', () => {
            expect(category.find('table').length).toEqual(1);
        });
    
        it('renders fields of table', () => {
            expect(category.find('th').length).toEqual(mockCategoryFields.length);
        });

        it('renders categories in the table', () => {
            expect(category.find('.item').length).toEqual(mockCategories.length);
        });  
    });
});


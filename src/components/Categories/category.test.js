import React from 'react';
import { shallow } from 'enzyme';
import CategoryList from '../Table/CategoryList';
import { mockCategoryFields, mockCategories } from '../../mocks';

describe('CategoryList', () => {
    let category = shallow(<CategoryList data={mockCategories} fields={mockCategoryFields} />);

    it('renders the table', () => {
        expect(category.find('table').length).toEqual(1);
    });

    it('renders fields of table', () => {
        expect(category.find('th').length).toEqual(mockCategoryFields.length);
    });

    describe('remounting the component', () => {
        let category2;

        beforeEach(() => {
            category2 = shallow(<CategoryList data={mockCategories} fields={mockCategoryFields} />);
        })

        it('renders categories in the table', () => {
            expect(category2.find('.item').length).toEqual(mockCategories.length);
        })
    });
})
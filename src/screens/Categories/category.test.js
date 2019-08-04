import React from 'react';
import { mount } from 'enzyme';
import CategoryList from '../../components/Table/CategoryList';
import FormCategory from './FormCategory';
import { mockCategoryFields, mockCategories } from '../../mocks';

describe('Category', () => {

    let category = mount(<CategoryList data={mockCategories} fields={mockCategoryFields} />);

    describe('CategoryList', () => {
        it('renders the table', () => {
            expect(category.find('table').length).toEqual(1);
        });
    
        it('renders fields of table', () => {
            expect(category.find('th').length).toEqual(mockCategoryFields.length);
        });
    
        describe('remounting the component', () => {
            let category2;
    
            beforeEach(() => {
                category2 = mount(<CategoryList data={mockCategories} fields={mockCategoryFields} />);
            })
    
            it('renders categories in the table', () => {
                expect(category2.find('.item').length).toEqual(mockCategories.length);
            })
        });
    });

    describe('FormCategory', () => {
        let form = mount(<FormCategory />);
        let testName = "Category";
        let testDescription = "Description Example";

        beforeEach(() => {
            form.find('#name').simulate('change', {
                target: { value: testName }
            })
            form.find('#description').simulate('change', {
                target: { value: testDescription }
            })            
        })
    
        it('renders the form', () => {
            expect(form.find('form').length).toEqual(1);
        });
    
        it('change name', () => {
            expect(form.find('#name').getDOMNode().value).toEqual(testName);
        });

        it('change description', () => {
            expect(form.find('#description').getDOMNode().value).toEqual(testDescription);
        });

    });

});


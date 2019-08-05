import React from 'react';
import { shallow } from 'enzyme';
import FormCategory from './FormCategory';
import CategoryList from '../../../components/Table/CategoryList';
import { mockCategoryFields, dataCategory } from '../../../mocks';

describe('FormCategory', () => {
    let form = shallow(<FormCategory />);
    let data = dataCategory[0];            

    it('renders and change the form', () => {
        form.find('#name').simulate('change', {
            target: { value: data.testName }
        })
        form.find('#description').simulate('change', {
            target: { value: data.testDescription }
        })

        expect(form.find('form').length).toEqual(1);
    });

    it('change name', () => {
        expect(form.find('#name').props().value).toEqual(data.testName);
    });

    it('change description', () => {
        expect(form.find('#description').props().value).toEqual(data.testDescription);
    });

    describe('test button click', () => {
            let category = shallow(<CategoryList data={dataCategory} fields={mockCategoryFields} />);
            it('renders the categories', () => {
                form.find('.button').simulate('click');
                form.update();                    
                expect(category.find('.item').length).toEqual(1);
            });
    });
});
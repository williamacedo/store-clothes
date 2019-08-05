import React from 'react';
import { shallow } from 'enzyme';
import FormProduct from './FormProduct';
import { StaticRouter } from 'react-router-dom';
import ProductList from '../../../components/Table/ProductList';
import { dataProduct, mockProductsFields } from '../../../mocks';

describe('FormProduct', () => {
    let form = shallow(<FormProduct />);
    let data = dataProduct[0];

    beforeEach(() => {
        form.find('#name').simulate('change', {
            target: { value: data.testTitle }
        });
        form.find('#description').simulate('change', {
            target: { value: data.testDescription }
        });
        form.find('#category').simulate('change', {
            target: { value: data.testCategory }
        });      

        form.find('#price').props().onChangeEvent(({ target: { value: '19.00' } }))
    });

    it('renders the form', () => {
        expect(form.find('form').length).toEqual(1);
    });

    it('change title', () => {
        expect(form.find('#name').props().value).toEqual(data.testTitle);
    });

    it('change description', () => {
        expect(form.find('#description').props().value).toEqual(data.testDescription);
    });
    
    it('change category', () => {
        expect(form.find('#category').props().value).toEqual(data.testCategory);
    }); 
    
    it('change price', () => {
        expect(form.find('#price').props().value).toEqual(data.testPrice);
    }); 
    
    // describe('test button click', () => {
    //     let product = shallow(<StaticRouter><ProductList data={dataProduct} fields={mockProductsFields} /></StaticRouter>);
    //     it('renders the products', () => {
    //         form.find('.button').simulate('click');
    //         form.update();                    
    //         expect(product.find('.item-product').length).toEqual(1);
    //     });
    // });    
});
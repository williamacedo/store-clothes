import React from 'react';
import { mount } from 'enzyme';
import { StaticRouter } from 'react-router-dom';
import ProductList from '../../components/Table/ProductList';
import { mockProductsFields, mockProducts } from '../../mocks';

describe('Product', () => {
    let product = mount(<StaticRouter><ProductList data={mockProducts} fields={mockProductsFields} /></StaticRouter>);

    describe('CategoryList', () => {
        it('renders the table', () => {
            expect(product.find('table').length).toEqual(1);
        });
        it('renders fields in table', () => {
            expect(product.find('th').length).toEqual(mockProductsFields.length);
        });
        it('renders categories in the table', () => {
            expect(product.find('.item-product').length).toEqual(mockProducts.length);
        })
    });
});
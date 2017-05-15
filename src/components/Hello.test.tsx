import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from './Hello';

it('renders the correct text when no enthusiasm level is given', () => {
    const hello = enzyme.shallow(<Hello name='Fredrik' />);
    expect(hello.find(".greeting").text()).toEqual('Hello Fredrik!');
});

it('renders the correct text with an implicit enthusiasm of 1', () => {
    const hello = enzyme.shallow(<Hello name='Fredrik' />);
    expect(hello.find(".greeting").text()).toEqual('Hello Fredrik!');
});

it('renders the correct text with an explictit enthusiasm level of 5', () => {
    const hello = enzyme.shallow(<Hello name='Fredrik' enthusiasmLevel={5} />);
    expect(hello.find(".greeting").text()).toEqual('Hello Fredrik!!!!!'); 
});
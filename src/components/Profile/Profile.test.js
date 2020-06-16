import React from 'react'
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils'
import { create } from 'react-test-renderer';
import ProfileStatusWithHooks from './ProfileInfo/ProfilestatuWithHooks';

describe("Some test", () => {
  test('after creation span should be displayed', () => {
    const component = create(<ProfileStatusWithHooks status='status' />)
    const root = component.root
    let span = root.findByType('span')
    expect(span.children[0]).toBe('status')
  });

  test('editMode equal true and find is on the page', () => {
    let component
    beforeEach(() => {
      component = document.createElement('div');
      document.body.appendChild(component);
    });
    
    afterEach(() => {
      document.body.removeChild(component);
      component = null;
    });
    act(() => {
      create(<ProfileStatusWithHooks status='status' />, component);
    });

    // const component = create(<ProfileStatusWithHooks status='status' />)
    const root = component.root
    let span = root.findByType('span')
    act(()=> {
      span.props.onDoubleClick()
    })
    let input = root.findByType('input')
    expect(input.props.value).toBe('status')
  });
})

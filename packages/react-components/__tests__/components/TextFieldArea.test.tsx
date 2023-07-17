import userEvent from "@testing-library/user-event";
import TextFieldArea from '../../src/components/TextFieldArea';
import { renderComponent, DEFAULT_ERROR_MESSAGE } from '../utils';

const field = {
  name: 'multiline',
  label: {
    value: 'multi line field',
  },
  fieldType: 'multiline-input',
  placeholder: 'multiline field',
  visible: true,
  required: true,
};
const helper = renderComponent(TextFieldArea);

describe('Text Area Field', () => {

  test('value entered by user in text field is set in model', async () => {
    const f = {
      ...field,
    };
    const { renderResponse, element } = await helper(f);
    const input = await renderResponse.findByPlaceholderText(f.placeholder);
    const inputVal = 'abc';
    userEvent.type(input, inputVal);
    const state = element.getState();
    expect(state.value).toEqual(inputVal);
  });

  test('it should handle visible property', async () => {
    const f = {
      ...field,
      visible: false,
    };
    const { renderResponse } = await helper(f);
    expect(renderResponse.queryByText(f.label.value)).toBeNull();
  });

  test('error message element exists when the field is invalid', async () => {
    const f = {
      ...field,
      valid: false,
      errorMessage: DEFAULT_ERROR_MESSAGE
    };
    const { renderResponse } = await helper(f);
    expect(renderResponse.queryByText(DEFAULT_ERROR_MESSAGE)).not.toBeNull()
  });

  test('it should handle maxlength constraint', async () => {
    const f = {
      ...field,
      maxLength: 5,
      errorMessage: DEFAULT_ERROR_MESSAGE
    };
    let { renderResponse, element } = await helper(f);
    const input = await renderResponse.findByPlaceholderText(f.placeholder);
    userEvent.type(input, 'aaaaaaaaaaaa');
    expect(element.getState().value).toEqual('aaaaa');
    expect(renderResponse.queryByText(DEFAULT_ERROR_MESSAGE)).toBeNull();
  });

  test('it should handle minLength constraint', async () => {
    const f = {
      ...field,
      minLength: 5,
      errorMessage: DEFAULT_ERROR_MESSAGE
    };
    let { renderResponse, element } = await helper(f);
    const input = await renderResponse.findByPlaceholderText(f.placeholder);
    userEvent.type(input, 'aa');
    expect(element.getState().value).toEqual('aa');
    expect(renderResponse.queryByText(DEFAULT_ERROR_MESSAGE)).toBeNull();
  });

  test('In case of both tooltip and description, tooltip should be visible and onclick of toggle button, description should be visible', async () => {
    const f = {
      ...field,
      tooltip: 'Short Description',
      description: 'Mandatory'
    };
    const { renderResponse } = await helper(f);
    expect(renderResponse.getByText('Short Description')).not.toBeNull();
    const button = renderResponse.container.getElementsByClassName('cmp-adaptiveform-textinput__questionmark');
    userEvent.click(button[0]);
    expect(renderResponse.getByText('Mandatory')).not.toBeNull();
  });

  test('html in the label should be handled for non rich text', async () => {
    const f = {
      ...field,
      label: {
        value: '<p>title inside p tags</p>',
        richText: true,
        visible: true
      }
    }
    let { renderResponse } = await helper(f);
    expect(renderResponse.container.innerHTML).toContain('<p>title inside p tags</p>');
  });

  test('labels and inputs are linked with for and id attribute', async () => {
    let { renderResponse } = await helper(field);
    const input = await renderResponse.findByPlaceholderText(field.placeholder);
    const label = await renderResponse.queryByText(field.label.value)
    expect(input?.getAttribute('id')).toEqual(label?.getAttribute('for'));
  });
});
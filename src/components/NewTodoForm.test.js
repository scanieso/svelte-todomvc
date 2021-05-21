import '@testing-library/jest-dom';
import { jest } from '@jest/globals';
import { render, fireEvent } from '@testing-library/svelte';
import NewTodoForm from './NewTodoForm.svelte';

describe('<NewTodoForm /> component', () => {
  test('calls `onSubmit` and clears input', async () => {
    const mock = jest.fn();
    const { getByTestId } = render(NewTodoForm, {
      onSubmit: mock
    });
    const formEl = getByTestId('new-todo-form');
    const inputEl = getByTestId('new-todo');

    await fireEvent.input(inputEl, { target: { value: 'Write a test' } });
    expect(inputEl).toHaveValue('Write a test');

    await fireEvent.submit(formEl);

    expect(mock).toBeCalledTimes(1);
    expect(inputEl).toHaveValue('');
  });

  test('does not call `onSubmit` when input is empty', async () => {
    const mock = jest.fn();
    const { getByTestId } = render(NewTodoForm, {
      onSubmit: mock
    });
    const formEl = getByTestId('new-todo-form');
    const inputEl = getByTestId('new-todo');

    await fireEvent.submit(formEl);

    expect(mock).not.toBeCalled();

    await fireEvent.input(inputEl, { target: { value: ' ' } });
    await fireEvent.submit(formEl);

    expect(mock).not.toBeCalled();
  });
});

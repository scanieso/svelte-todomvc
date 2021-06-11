import '@testing-library/jest-dom';
import { jest } from '@jest/globals';
import { render, fireEvent } from '@testing-library/svelte';
import TodoList from './TodoList.svelte';

const mockTodos = [
  { id: '1', name: 'First Todo', done: true },
  { id: '2', name: 'Second Todo', done: false },
  { id: '3', name: 'Third Todo', done: false }
];

describe('<TodoList /> component', () => {
  test('should render all todos', async () => {
    const { getByTestId } = render(TodoList, {
      filter: '',
      todos: mockTodos,
      onRemoveTodo: () => {
        // noop
      }
    });

    expect(getByTestId('todo-checkbox-1')).toBeChecked();
    expect(getByTestId('todo-label-1')).toHaveTextContent('First Todo');
    expect(getByTestId('todo-checkbox-2')).not.toBeChecked();
    expect(getByTestId('todo-label-2')).toHaveTextContent('Second Todo');
    expect(getByTestId('todo-checkbox-3')).not.toBeChecked();
    expect(getByTestId('todo-label-3')).toHaveTextContent('Third Todo');
  });

  test('should filter todos by `active`', () => {
    const { getByTestId, queryByTestId } = render(TodoList, {
      filter: 'active',
      todos: mockTodos,
      onRemoveTodo: () => {
        // noop
      }
    });

    const listEl = getByTestId('todo-list');

    expect(queryByTestId('todo-1')).not.toBeInTheDocument();
    expect(listEl).toContainElement(getByTestId('todo-2'));
    expect(listEl).toContainElement(getByTestId('todo-3'));
  });

  test('should filter todos by `completed`', () => {
    const { getByTestId, queryByTestId } = render(TodoList, {
      filter: 'completed',
      todos: mockTodos,
      onRemoveTodo: () => {
        // noop
      }
    });

    const listEl = getByTestId('todo-list');

    expect(listEl).toContainElement(getByTestId('todo-1'));
    expect(queryByTestId('todo-2')).not.toBeInTheDocument();
    expect(queryByTestId('todo-3')).not.toBeInTheDocument();
  });

  test('should call `onRemoveTodo` when clicking delete button', async () => {
    const mock = jest.fn();
    const { getByTestId } = render(TodoList, {
      todos: mockTodos,
      onRemoveTodo: mock
    });

    await fireEvent.click(getByTestId('todo-delete-1'));
    expect(mock).toBeCalledTimes(1);
  });
});

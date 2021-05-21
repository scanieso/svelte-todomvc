import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Filter from './Filter.svelte';

describe('<Filter /> component', () => {
  test('should render correctly', async () => {
    const { component, getByTestId } = render(Filter, {
      filter: 'hello',
      selectedFilter: 'not-hello'
    });
    const filterEl = getByTestId('filter');
    expect(filterEl).not.toHaveClass('selected');

    await component.$set({ selectedFilter: 'hello' });
    expect(filterEl).toHaveClass('selected');
  });
});

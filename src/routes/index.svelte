<script>
  import Filter from '../components/Filter.svelte';

  let newTodoName = '';
  let todosFilter = '';

  let todos = [
    { name: 'One', done: false },
    { name: 'Two', done: true },
    { name: 'Three', done: false },
  ];

  const filters = [
    { name: 'All', filterBy: '' },
    { name: 'Active', filterBy: 'active' },
    { name: 'Completed', filterBy: 'completed' },
  ];

  $: visibleTodos = todos.filter((todo) => {
    switch (todosFilter) {
      case 'active':
        return todo.done === false;
      case 'completed':
        return todo.done === true;
      default:
        return true;
    }
  });

  $: completeTodos = todos.filter((todo) => todo.done === true);
  $: incompleteTodos = todos.filter((todo) => todo.done === false);

  const submitForm = (e) => {
    e.preventDefault();
    addTodo();
    clearNewTodo();
  };

  const addTodo = () => {
    if (newTodoName.trim().length === 0) {
      return;
    }

    todos = [
      ...todos,
      {
        // TODO Make ID more unique
        id: 'todo-' + todos.length.toString(),
        name: newTodoName,
        done: false
      }
    ];
  };

  const removeTodo = (id) => {
    todos = todos.filter(todo => todo.id !== id);
  };

  const clearNewTodo = () => {
    newTodoName = '';
  };

  const clearCompleted = () => {
    todos = incompleteTodos;
  };
</script>

<section class="todoapp">
  <header class="header">
    <h1>todos</h1>
    <form on:submit="{submitForm}">
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        bind:value={newTodoName} />
    </form>
  </header>

  <section class="main">
    <!-- TODO -->
    <!-- <input id="toggle-all" class="toggle-all" type="checkbox" /> -->
    <!-- <label for="toggle-all">Mark all as complete</label> -->

    <ul class="todo-list">
      {#each visibleTodos as todo, i}
        <li class={todo.done ? 'completed' : ''}>
          <div>
            <input
              class="toggle"
              type="checkbox"
              bind:checked={todo.done}
              id={'todo-' + todo.id} />
            <label for="{'todo-' + todo.id}">{todo.name}</label>
            <button class="destroy" on:click={() => removeTodo(todo.id)} />
          </div>
        </li>
      {/each}
    </ul>
  </section>

  {#if todos.length}
    <footer class="footer">
      <span class="todo-count">
        <strong>{incompleteTodos.length}</strong>
        item{incompleteTodos.length === 1 ? '' : 's'} left
      </span>

      <ul class="filters">
        {#each filters as filter}
          <li>
            <Filter
              on:click={() => todosFilter = filter.filterBy}
              selectedFilter="{todosFilter}"
              filter="{filter.filterBy}"
            >
              {filter.name}
            </Filter>
          </li>
        {/each}
      </ul>

      {#if completeTodos.length > 0}
        <button
          class="clear-completed"
          on:click={clearCompleted}>
          Clear completed
        </button>
      {/if}
    </footer>
  {/if}
</section>

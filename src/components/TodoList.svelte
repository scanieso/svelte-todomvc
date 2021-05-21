<script>
  export let onRemoveTodo;
  export let todosFilter = '';
  export let todos = [];

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
</script>

<ul class="todo-list">
  {#each visibleTodos as todo}
    <li class="todo {todo.done ? 'completed' : ''}">
      <input
        class="toggle"
        type="checkbox"
        bind:checked={todo.done}
        id={'todo-' + todo.id} />
      <label for="{'todo-' + todo.id}">{todo.name}</label>
      <button class="destroy" on:click={() => onRemoveTodo(todo.id)} />
    </li>
  {/each}
</ul>

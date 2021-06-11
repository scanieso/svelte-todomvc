<script>
  export let filter = '';
  export let todos = [];
  export let onRemoveTodo;

  $: visibleTodos = todos.filter((todo) => {
    switch (filter) {
      case 'active':
        return todo.done === false;
      case 'completed':
        return todo.done === true;
      default:
        return true;
    }
  });
</script>

<ul class="todo-list" data-testid="todo-list">
  {#each visibleTodos as todo}
    <li
      class="todo {todo.done ? 'completed' : ''}"
      data-testid={'todo-' + todo.id}
    >
      <input
        class="toggle"
        type="checkbox"
        bind:checked={todo.done}
        data-testid={'todo-checkbox-' + todo.id} />
      <label
        for="{'todo-checkbox-' + todo.id}"
        data-testid={'todo-label-' + todo.id}>{todo.name}</label>
      <button
        class="destroy" on:click={() => onRemoveTodo(todo.id)}
        data-testid={'todo-delete-' + todo.id} />
    </li>
  {/each}
</ul>

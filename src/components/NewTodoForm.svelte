<script>
  export let onSubmit;
  let todoName = '';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoName.trim().length < 1) {
      return;
    }

    onSubmit(todoName);
    clearNewTodo();
  };

  const clearNewTodo = () => {
    todoName = '';
  };
</script>

<form
  data-testid="new-todo-form"
  on:submit={handleSubmit}
>
  <input
    class="new-todo"
    placeholder="What needs to be done?"
    data-testid="new-todo"
    bind:value={todoName} />
</form>

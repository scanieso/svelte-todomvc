<script>
	let newTodoName = '';

	$: todos = [];

	$: incompleteTodos = todos.filter((todo) => todo.done === false);

	const submitForm = (e) => {
		e.preventDefault();
		addTodo();
		clearNewTodo();
	};

	const addTodo = () => {
		todos = [
			...todos,
			{
				id: 'todo-' + todos.length.toString(),
				name: newTodoName,
				done: false
			}
		];
	};

	const clearNewTodo = () => {
		newTodoName = '';
	}
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
			{#each todos as todo, i}
				<li class={todo.done ? 'completed' : ''}>
					<div>
						<input
							class="toggle"
							type="checkbox"
							bind:checked={todo.done}
							id={'todo-' + todo.id} />
						<label for="{'todo-' + todo.id}">{todo.name}</label>
						<button class="destroy" />
					</div>
				</li>
			{/each}
		</ul>
	</section>

	<footer class="footer">
		<span class="todo-count">
			<strong>{incompleteTodos.length}</strong>
			item{incompleteTodos.length === 1 ? '' : 's'} left
		</span>

		<ul class="filters">
			<li>
				<a href="#/" class="selected">All</a>
			</li>
			<li>
				<a href="#/active">Active</a>
			</li>
			<li>
				<a href="#/completed">Completed</a>
			</li>
		</ul>
		<button class="clear-completed" style="display: none;" />
	</footer>
</section>

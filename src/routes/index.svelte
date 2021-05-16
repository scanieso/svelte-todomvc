<script>
	const todos = [
		{ id: '1', name: 'Meal prep', done: false },
		{ id: '2', name: 'Take out recycling', done: false },
	];

	$: incompleteTodos = todos.filter((todo) => todo.done === false);
</script>

<section class="todoapp">
	<header class="header">
		<h1>todos</h1>
		<input class="new-todo" placeholder="What needs to be done?" />
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

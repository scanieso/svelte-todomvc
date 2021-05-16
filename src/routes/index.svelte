<section class="todoapp">
	<header class="header">
		<h1>todos</h1>
		<input class="new-todo" placeholder="What needs to be done?" />
	</header>
	<section class="main">
		<input id="toggle-all" class="toggle-all" type="checkbox" />
		<label for="toggle-all">Mark all as complete</label>
		<ul class="todo-list">
			<li>
				<div class="view">
					<input class="toggle" type="checkbox" />
					<label>hello</label>
					<button class="destroy" />
				</div>
			</li>
		</ul>
	</section>
	<footer class="footer">
		<span class="todo-count"><strong>1</strong> item left</span>
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

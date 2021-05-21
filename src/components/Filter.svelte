<script>
  export let selectedFilter;
  export let filter;
</script>

<button
  class="filter { selectedFilter === filter ? 'selected' : ''}"
  on:click
  data-testid="filter"
>
  <slot></slot>
</button>

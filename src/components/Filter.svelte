<script>
  export let selectedFilter;
  export let filter;
</script>

<button
  class="filter { selectedFilter === filter ? 'selected' : ''}"
  on:click
>
  <slot></slot>
</button>

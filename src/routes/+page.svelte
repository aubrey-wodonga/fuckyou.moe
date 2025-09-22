<script lang="ts">
  const { data } = $props();
  const moe = $derived(data.moe);
</script>

<h1>{moe}</h1>

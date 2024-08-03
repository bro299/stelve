<script>
  import { form, message } from 'sveltekit-superforms';
  import { usernameSchema } from '$lib/schema/username';
  import { onMount } from 'svelte';

  let formInstance;

  onMount(async () => {
    formInstance = await form(usernameSchema);
  });

  const submitForm = async () => {
    const response = await formInstance.submit();
    if (response.type === 'success') {
      alert(response.text);
    } else {
      alert('Error: ' + response.text);
    }
  };
</script>

{#if formInstance}
  <form on:submit|preventDefault={submitForm}>
    <input type="text" bind:value={formInstance.data.username} placeholder="Enter Instagram Username" />
    <button type="submit">Roast</button>
  </form>
{/if}

{#if formInstance.message}
  <p>{formInstance.message.text}</p>
{/if}

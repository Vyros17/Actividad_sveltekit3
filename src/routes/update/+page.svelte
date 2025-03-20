<script lang="ts">
    import { page } from '$app/stores';
    import FormFields from '$lib/components/FormFields.svelte';
    export let data;
    let { response } = data;
</script>

<FormFields isEditable={true} body={response}/>
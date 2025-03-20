<script lang="ts">
    import { enhance } from "$app/forms";

    
    import { goto } from "$app/navigation";

    export let isEditable = false;
    export let body;


    // function fieldsAreFull(){
    //     return (body.email.length>0 && body.lastName.length>0 && body.name.length>0);
    // }

</script>

<div class="flex items-center justify-center min-h-screen bg-cyan-200">
    <form method="POST" action={isEditable ? "?/update": "?/create"} class="bg-white p-6 rounded shadow-md w-96 space-y-4" use:enhance>
        <h2 class="text-xl font-bold text-center">Formulario</h2>

        <div>
            <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={isEditable ? body.name : ""}
                class="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
        </div>

        <div>
            <input
                type="text"
                name="username"
                value={isEditable ? body.username : ""}
                placeholder="Usuario"
                class="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
        </div>
        <div>
            <input
                type="email"
                name="email"
                value={isEditable ? body.email : ""}
                placeholder="Email"
                class="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
        </div>

        <button
            type="submit"
            class="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition cursor-pointer"
        >
            Enviar
        </button>
        <button
            type="button"
            on:click={() => {
                goto("/");
            }}
            class="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition cursor-pointer"
        >
            volver
        </button>
    </form>
</div>

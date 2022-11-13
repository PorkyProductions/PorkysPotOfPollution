<script>
    var date = new Date()
    async function getCatFact() {
        const response = await fetch("https://catfact.ninja/fact")
        const data = await response.json()
        const catFact = data.fact
        return catFact
    }
</script>

<div class="bg-white">
    <div class="flex content-center justify-center">
        <img src="/logo.png" alt="">
    </div>
    <p class="text-center text-black hover:text-theme-darkRed">
        Copyright &copy; 2022-{date.getFullYear()} PorkyProdutions, and contributors. All Rights Reserved
    </p>
    {#await getCatFact()}
    <p class="text-center text-black hover:text-theme-darkRed">
        Loading
    </p>
    {:then catFact} 
    <p class="text-center text-black hover:text-theme-darkRed">
        {catFact}
    </p>
    {/await}
    <style>
        img {
            width: 35%;
        }
    </style>
</div>
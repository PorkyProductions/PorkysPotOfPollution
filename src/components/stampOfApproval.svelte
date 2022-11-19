<script>
    import stars from 'bootstrap-icons/icons/stars.svg'
</script>
<div class="super flex content-center justify-center absolute">
    
    <img id="stars" src={stars} alt="stars">
    &nbsp
    <span class="text-sm">
        Porky Approved
    </span>
    
</div>

<style> 
    .super{
        bottom: 270px;
        right: 180px;
        transform: rotate(-20deg);
        background-color: yellow;
        border-radius: 30px;
        border: 3px solid black;
        padding:10px;
        padding-left: 40px;
        padding-right: 40px;
    }
* {
    text-decoration: none;
}
    #stars {
        width: 180px;
    }
    
</style>
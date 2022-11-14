<script>
    export let numOfStars;
    import { onMount } from 'svelte';
    let a = 0;

    let starChecks1 = (numOfStars >= 1)? "checked": "";
    let starChecks2 = (numOfStars >= 2)? "checked": "";
    let starChecks3 = (numOfStars >= 3)? "checked": "";
    let starChecks4 = (numOfStars >= 4)? "checked": "";
    let starChecks5 = (numOfStars >= 5)? "checked": "";
    
    
</script>
<div>
<span class="float-child"style="float:right;margin-left: auto; margin-right: 0;"></span>

<span class="fa fa-star {starChecks1}" id="star1"></span>
<span class="fa fa-star {starChecks2}" id="star2"></span>
<span class="fa fa-star {starChecks3}" id="star3"></span>
<span class="fa fa-star {starChecks4}" id="star4"></span>
<span class="fa fa-star {starChecks5}" id="star5"></span>
</div>
<style>
    .checked {
       color: darkgoldenrod;
    }
    
  </style>


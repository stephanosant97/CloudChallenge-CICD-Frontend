<script>
    import Background from "./background.svelte";
    import Card from "./card.svelte";
    import Header from "./header.svelte";
</script>
  
<div class="container">
    <div>
        <Header />
    </div>
    <div>
        <Background />
        <div id="card-container" class="card-container">
            <Card />
        </div>
    </div>
</div>

<style>
    .container {
        position: relative;
        width: 100%;
        height: 100vh;
    }

    .card-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    /* Media query for adjusting the positioning in browser mode */
    @media (min-width: 768px) {
        .card-container {
            left: calc(60% - 0px);
        }
    }

    /* Media query for iPads and Nest Hubs */
    @media (min-width: 768px) and (max-width: 1024px) {
        .card-container {
            left: calc(52% - 0px);
        }
    }

    /* Media query for Nest Hub Max */
    @media (min-width: 1280px) and (max-width: 1800px) {
        .card-container {
            left: calc(50% - 0px);
        }
    }

    /* Media query for Surface 7 Pro */
    @media (min-width: 912px) and (max-width: 1368px) {
        .card-container {
            left: calc(50% - 0px);
        }
    }

    /* Media query for Asus Zenbook Fold */
    @media (min-width: 853px) and (max-width: 1280px) {
        .card-container {
            left: calc(56% - 0px);
        }
    }
</style>

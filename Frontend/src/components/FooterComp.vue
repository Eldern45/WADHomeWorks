<script>
export default {
    name: 'FooterComp',
}
</script>

<template>
    <footer class="footer">
        <div class="authors">
            <p>Authors:</p>
            <ul>
                <li>Johan Veenpere</li>
                <li>Timofei Šinšakov</li>
                <li>Timur Sirazitdinov</li>
            </ul>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    background-color: #333;
    color: white;
    text-align: center;
    margin: auto;
    padding: 10px;
    font-size: 10px;
    line-height: 1.0;
    width: 100%;
}

.authors {
    margin-top: 15px;
}

.authors ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.authors li {
    margin-bottom: 5px;
}
</style>

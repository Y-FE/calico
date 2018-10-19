
<template>
    <code-container>
        <cc-scale-area 
            style="border: 1px solid lightblue;"
            :outWidth="scaleOutWidth"
            :outHeight="scaleOutHeight">
        </cc-scale-area>
    </code-container>
</template>
<style scoped>
</style>
<script>
    export default {
        name: 'zhCatScaleareaGeneral',
        data() {
            return {
                scaleOutWidth: 600,
                scaleOutHeight: 468
            }
        },
       
    }
</script>

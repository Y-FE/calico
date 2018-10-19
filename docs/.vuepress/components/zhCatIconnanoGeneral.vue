
<template>
    <code-container>
        <div>
            <cc-icon-nano icon="icon-setting" 
                :active="showDraggable"   
                @click="showDraggable = !showDraggable">
            </cc-icon-nano>
        </div>
        
    </code-container>
</template>
<style scoped>
</style>
<script>
    export default {
        name: 'zhCatIconnanoGeneral',
        components: {
        },
        props: {},
        data() {
            return {
                showDraggable: false,
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
        }
    }
</script>

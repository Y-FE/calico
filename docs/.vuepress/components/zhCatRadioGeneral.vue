
<template>
    <code-container>
        <cc-radio-group v-model="radio">
            <cc-radio-button value="画笔" >画笔</cc-radio-button>
            <cc-radio-button value="橡皮">橡皮</cc-radio-button>
            <cc-radio-button value="喷漆" label="喷漆"></cc-radio-button>
            <cc-radio-button value="放大镜" label="放大镜"></cc-radio-button>
        </cc-radio-group>
    </code-container>
</template>
<style scoped>
</style>
<script>
    export default {
        name: 'zhCatRadioGeneral',
        components: {
        },
        props: {},
        data() {
            return {
                radio: '画笔'
            }
        },
    }
</script>

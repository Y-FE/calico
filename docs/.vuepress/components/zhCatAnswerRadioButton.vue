<template>
   <code-container>
        <cc-radio-group v-model="hori" column>
            <cc-answer-radio value="77" ></cc-answer-radio>
            <cc-answer-radio :value="1"></cc-answer-radio>
        </cc-radio-group>
    </code-container>
</template>
<style scoped>
</style>
<script>
    export default {
        name: 'zhCatAnswerRadioButton',
        components: {
        },
        props: {},
        data() {
            return {
                hori: 1,
            }
        },
    }
</script>


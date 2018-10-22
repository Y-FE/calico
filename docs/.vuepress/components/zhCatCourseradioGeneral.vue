
<template>
    <code-container>
            <cc-course-radio-group v-model="courseRadio">
                <cc-course-radio v-for="i in 4" :key="i" :value="i">
                    我是一个courseRadio {{i}}
                </cc-course-radio>
            </cc-course-radio-group>
    </code-container>
</template>
<style scoped>
</style>
<script>
    export default {
        data() {
            return {
                courseRadio: 1
            }
        },
    }
</script>

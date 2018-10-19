<template>
    <code-container>
        <cc-line-select v-model="line" title="线条颜色">
            <cc-line-option v-for="(item, index) in colorList" :key="index" :value="item">
                
            </cc-line-option>
        </cc-line-select>
    </code-container>
</template>
<style scoped>
</style>
<script>
    export default {
        name: 'zhCatLineSelect',
        data() {
            return {
                line: '#18A2EA',
                colorList:[
                    '#18A2EA','#FFB804','#FF4040','#2D2D2D','#009E4A',''
                ],
            }
        },
    }
</script>
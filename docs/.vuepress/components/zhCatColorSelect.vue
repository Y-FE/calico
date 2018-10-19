<template>
    <code-container>
        <cc-color-select v-model="color" title="画笔颜色">
            <cc-color-option v-for="(item, index) in colorList" :key="index" :value="item">
                
            </cc-color-option>
        </cc-color-select>
    </code-container>
</template>
<style scoped>
</style>
<script>
    export default {
        name: 'zhCatColorSelect',
        data() {
            return {
                color: 'rgba(0,0,0,0)',
                colorList:[
                    '#18A2EA','#FFB804','#FF4040','#2D2D2D','#009E4A',''
                ],
            }
        },
    }
</script>
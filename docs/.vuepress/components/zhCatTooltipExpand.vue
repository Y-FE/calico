<template>
    <code-container>
        <cc-tooltip :show="show" content="手动控制tooltip的出现和消失" direction="right">
            <cc-button @click="show = !show" type="default">
                {{show ? '点我关闭tooltip' : '点我展示tooltip'}}
            </cc-button>
        </cc-tooltip>
    </code-container>
</template>
<script>
    export default {
        name: 'zhCatTooltipExpand',
        components: {
        },
        props: {},
        data() {
            return {
                show: true,
            }
        },
    }
</script>
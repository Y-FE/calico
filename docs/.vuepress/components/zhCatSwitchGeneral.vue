
<template>
    <code-container>
        <cc-row align="center">
            <div class="doc-des" style="width: 50px;">{{value1}}</div>
            <cc-switch v-model="value1"></cc-switch>
        </cc-row>
        <cc-row align="center">
            <div class="doc-des" style="width: 50px;">{{value2}}</div>
            <cc-switch v-model="value2"></cc-switch>
        </cc-row>
    </code-container>
</template>
<script>
    export default {
        name: 'zhCatSwitchGeneral',
        data() {
            return {
                value1: true,
                value2: false
            }
        },
    }
</script>

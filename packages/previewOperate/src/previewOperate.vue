<template>
    <div class="cat-operate-icons">
        <cc-row  justify="space-between"
            align="center"
            class="cat-operate-body">
            <cc-row class="cat-operate-box"
                @click="deletItem"
                justify="center"
                align="center">
                <i class="iconfont icon-delete-page"></i>
            </cc-row>
            <cc-row class="cat-operate-box"
                @click="changeOrder('up')"
                justify="center"
                align="center">
                <i class="iconfont icon-move-up"></i>
            </cc-row>
            <cc-row class="cat-operate-box"
                @click="changeOrder('down')"
                justify="center"
                align="center">
                <i class="iconfont icon-move-down"></i>
            </cc-row>
        </cc-row>
    </div>
</template>
<style lang="scss">
.cat-operate-icons {
    height: $--preview-operate-height;
    background: $--preview-operate-background-color;
    .cat-operate-body {
        width: fit-content;
        margin: 0 auto;
        .cat-operate-box {
            width: $--preview-operate-height;
            height: $--preview-operate-height;
            cursor: pointer;
            transition: $--transition-primary;
            i {
                font-size: $--preview-operate-item-font-size;
                color: $--preview-operate-item-color;
            }
            &:hover {
                background: $--preview-operate-item-background-color-active;
                i {
                   color: $--preview-operate-item-color-active; 
                }
            }
        }
    } 
}
</style>
<script>
    import ccRow from '@packages/row/src/row.vue';
    export default {
        name: 'CcPreviewOperate',
        components: {
            ccRow
        },
        props: {},
        data() {
            return {
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
            deletItem() {
                this.$emit('delete-item');
            },
            changeOrder(direction) {
                // direction: up / down
                this.$emit('change-order', direction);
            },
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
        }
    }
</script>
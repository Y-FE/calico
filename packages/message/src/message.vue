<template>
    <transition>
        <cc-row 
            class="cat-message-body"
            justify="space-between"
            align="center"
            v-if="show">
            <p>66</p>
            <p>77</p>
        </cc-row>
    </transition>
</template>
<style lang="scss">
    .cat-message-body {
        color: $--message-color;
        font-size: $--message-font-size;
        background-color: $--message-fill;
        border-radius: $--message-radius;
        padding: $--message-padding;
    }
</style>
<script>
    import ccRow from '../../row/src/row.vue';
    export default {
        name: 'CcMessage',
        components: {
            ccRow,
        },
        props: {},
        data() {
            return {
                show: false,
                message: null,
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
            startTime(){
                this.show = true;
                // setTimeout(() => {
                //     this.close();
                // }, 3000);
            },
            close() {
                this.show = false;
                setTimeout(() => {
                    this.$destroy(true);
                    this.$el.parentNode.removeChild(this.$el) // 从DOM里将这个组件移除
                }, 500);
            }
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
            this.startTime();
        }
    }
</script>
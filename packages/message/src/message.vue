<template>
    <transition>
        <div v-if="show" class="cat-message-body cat-layout-flex--align">
            <p></p>
        </div>
    </transition>
</template>
<style lang="scss">
    .cat-message-body {
        color: $--message-color;
        font-size: $--message-font-size;
        background-color: $--message-fill;
        border-radius: $--message-radius;
        padding: $--message-padding;
        // @include cat-layout-flex--justify(space-between);
        // @include cat-layout-flex--aligin;
    }
</style>
<script>
    export default {
        name: 'CcMessage',
        components: {
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
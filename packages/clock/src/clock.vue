<template>
    <div class="cat-clock-container">
        <span class="cat-clock-item cat-time-block">{{time}}</span>
        <span class="cat-clock-item cat-clock-pot">:</span>
    </div>
</template>
<style lang="scss">
    .cat-clock-container {
        display: inline-block;
        .cat-clock-item {
            display: inline-block;
            height: $--clock-size;
            line-height: $--clock-size;
            font-size: $--clock-font-size;
            color: $--clock-color;
        }
        .cat-time-block {
            border-radius: $--clock-radius;
            width: $--clock-size;
            background: $--clock-backgound-color;
            text-align: center;
        }
    }
    .cat-clock-container:last-of-type .cat-clock-pot,
    .cat-clock-container:last-child .cat-clock-pot,
    .cat-clock-container:nth-last-of-type(1) .cat-clock-pot {
        display: none;
    }
</style>
<script>
    export default {
        name: 'CcClock',
        components: {
        },
        props: {
            time: {
                type: String | Number,
                default: ''
            }
        },
        data() {
            return {
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
        }
    }
</script>
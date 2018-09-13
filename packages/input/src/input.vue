<template>
    <input v-model="inputVal"
        class="cat-input-body cat-input-body--default" 
        :class="`cat-input-body--${size}`"
        :style="{width: `${width}px`}"
        :placeholder="placeholder"
        @focus="focus"
        @blur="blur"/>
</template>
<style lang="scss">
    .cat-input-body {
        border-radius: $--input-radius;
        color: $--input-color;
        padding: $--input-padding;
    }
    .cat-input-body--default {
        border: 1px solid $--input-border-color;
        &:hover {
            border:  1px solid $--input-border-color-hover;
        }
        &:focus {
            border:  1px solid $--input-border-color-active;
        }
    }
    .cat-input-body--large {
        height: $--input-height-large;
        font-size: $--input-font-size-large;
    }
    .cat-input-body--normal {
        
    }
</style>
<script>
    export default {
        name: 'CcInput',
        components: {
        },
        props: {
            value: {
                type: String | Number,
                default: '',
            },
            placeholder: {
                type: String,
                default: '',
            },
            //normal, large
            size: {
                type: String,
                default: 'normal',
            },
            width: {
                type: String | Number,
                default: 100,
            }
        },
        data() {
            return {
            }
        },
        computed: {
            inputVal: {
                get() {
                    return this.value;
                },
                set(value) {
                    this.$emit('input', value);                
                }
            }
        },
        watch: {
        },
        methods: {
            focus() {
                this.$emit('focus');
            },
            blur() {
                this.$emit('blur');
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